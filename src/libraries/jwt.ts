import nconf from "nconf";
import jwt from "jsonwebtoken";
import { UserInstance } from "../database/models/user";

const jwtSecret = nconf.get("JWT_SECRET");

export const generateJwt = (user: UserInstance) => {
  const expiry = Date.now() + 86400 * 1000 * 7;
  return jwt.sign({ _id: user.id, expiry }, jwtSecret);
};
