import { Request, Response } from "express";

import User from "../database/models/user";

export const testing = (req: any, res: any) => {
  console.log(req.body);
  res.status(201).json({
    message: "Thing created successfully!",
  });
};

export const addUser = async (req: Request, res: Response) => {
  console.log(req.body);

  const newUser = await User.create({
    name: req.body.username,
    phoneNo: req.body.phoneNo,
  });

  console.log(newUser);
  res.json(newUser);
};
