import { Request, Response } from "express";
import { Twilio } from "twilio";
import nconf from "nconf";

// Twilio credentials
const accountSid = nconf.get("TWILIO_ACCOUNT_SID");
const authToken = nconf.get("TWILIO_AUTH_TOKEN");
const twilioPhoneNumber = nconf.get("TWILIO_PHONE_NUMBER");
console.log("accountSid", accountSid);

const client = new Twilio(accountSid, authToken);

import User from "../database/models/user";

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

export const createUser = async (req: Request, res: Response) => {
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
    if (userExists) return res.status(200).json({ user: userExists });

    //create user
    const user = await User.create({ phoneNo });
    return res.status(201).json({
      user,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
