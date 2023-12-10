import { UserAttributes } from "../database/models/user";
import { NextFunction, Request, Response } from "express";
import NotAuthorizedError from "../errors/NotAuthorizedError";

export default (request: any, _response: Response, next: NextFunction) => {
  const user = request.user as UserAttributes;
  if (!user) {
    throw new NotAuthorizedError();
  }
  next();
};
