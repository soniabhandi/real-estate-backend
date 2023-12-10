import nconf from "nconf";
import jwt from "jsonwebtoken";
import InvalidJWTError from "../errors/InvalidJWTError";
import User from "../database/models/user";

//@ts-ignore
export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const jwtHeader = req.headers["x-jwt"];

  const token = jwtHeader
    ? jwtHeader
    : authHeader
    ? authHeader.split(" ")[1]
    : null;
  if (token) {
    //@ts-ignore
    jwt.verify(token, nconf.get("JWT_SECRET"), (err, user) => {
      if (err) return next(new InvalidJWTError());
      User.findByPk(user._id)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch(next);
    });
  } else next();
};
