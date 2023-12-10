import { Request, Response } from "express";
import { Twilio } from "twilio";
import nconf from "nconf";
import { generateJwt } from "../libraries/jwt";
import User, { UserInstance } from "../database/models/user";
// Twilio credentials
const accountSid = nconf.get("TWILIO_ACCOUNT_SID");
const authToken = nconf.get("TWILIO_AUTH_TOKEN");
const twilioPhoneNumber = nconf.get("TWILIO_PHONE_NUMBER");

const client = new Twilio(accountSid, authToken);

//send sms
export const sendSMS = async (message: string, phoneNo: string) => {
  // Function to send SMS
  client.messages
    .create({
      body: message,
      from: twilioPhoneNumber,
      to: "+918879260966",
    })
    .then((message) => console.log(`OTP sent: ${message.sid}`))
    .catch((error) => console.error(`Error sending OTP: ${error.message}`));
};

export const userSignIn = async (req: Request, res: Response) => {
  const { phoneNo }: any = req.body;
  try {
    //validate phone number
    const indianPhoneNumberRegex = /^\+91\d{10}$/;
    if (!indianPhoneNumberRegex.test(phoneNo)) {
      return res.status(400).json({ message: "invalid phone number" });
    }

    //generate otp
    const otp = Math.floor(100000 + Math.random() * 900000);
    const message = `Your OTP is ${otp}`;
    console.log("message", message);

    // await sendSMS(message, phoneNo);

    //find if user already exists
    const userExists = await User.findOne({ where: { phoneNo } });
    if (userExists) {
      userExists.otp = otp;
      await userExists.save();
      return res.status(200).json({ user: userExists });
    }

    //create user
    const user = await User.create({ phoneNo });
    user.otp = otp;
    await user.save();

    //verify otp
    const verifyOtpResult = await verifyOTP(phoneNo, otp);
    if (!verifyOtpResult.success) {
      return res.status(400).json({ message: verifyOtpResult.message });
    }

    return res.status(201).json({
      user,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//verify otp
export const verifyOTP = async (phoneNo: string, otp: number) => {
  try {
    const user = await User.findOne({ where: { phoneNo } });
    if (user?.otp === otp) {
      console.log("otp verified");
      const token = await generateJwt(user);
      user.jwt = token;
      await user.save();
      return { message: "otp verified", success: true };
    }
    return { message: "invalid otp", success: false };
  } catch (error: any) {
    return { message: error.message, success: false };
  }
};

export const setUserLocation = async (req: any, res: Response) => {
  const { locationId }: any = req.body;
  console.log("locationId", locationId);

  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ message: "user not found" });
    user.location = locationId;
    await user.save();
    return res.status(200).json({ user });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
