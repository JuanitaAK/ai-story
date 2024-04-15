import { Request, Response, NextFunction } from "express";

import * as dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "";

if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined in your environment variables");
  process.exit(1);
}
export interface CustomRequest extends Request {
  user?: { id: string };
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Access denied" });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    if (decoded.userId) {
      req.body.userId = decoded.userId;
      return next();
    }
    return res.status(401).json({ message: "Invalid token" });
  } catch (error) {
    console.error(error);
    return res.status(401).send("Please authenticate.");
  }
};
