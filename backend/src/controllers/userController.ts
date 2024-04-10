import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

import {
  userForm,
  postSignUpFormInput,
  getUserByMail,
} from "../models/userFormModel";

const JWT_SECRET = process.env.JWT_SECRET || "";
const AUTH_TOKEN_EXPIRY_IN_SECONDS = 86400;

export const signup = async (req: Request, res: Response) => {
  const { user_name, user_lastname, user_mail, password } = req.body;
  const user_password = await bcrypt.hash(password, 10);
  const user: userForm = {
    user_name,
    user_lastname,
    user_mail,
    user_password,
  };

  try {
    const fields = [user_name, user_lastname, user_mail, user_password];
    if (fields.some((field) => field === undefined)) {
      return res
        .status(400)
        .json({ message: "One or more form values are undefined" });
    }

    const existingUser = await getUserByMail(user_mail);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    await postSignUpFormInput(user);
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const login = async (req: Request, res: Response) => {
  const { user_mail, password } = req.body;

  try {
    const user = await getUserByMail(user_mail);
    if (user) {
      const isValid = await bcrypt.compare(password, user.user_password);
      if (!isValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign({ userId: user.user_id }, JWT_SECRET, {
        expiresIn: AUTH_TOKEN_EXPIRY_IN_SECONDS,
      });
      const result = { userId: user.user_id, token: token };
      res.header(
        "set-cookie",
        `Auth-Token=${token}; SameSite=Lax; Secure; path=/; expires=${
          new Date().getTime() + AUTH_TOKEN_EXPIRY_IN_SECONDS * 1000
        } `
      );
      res.status(200).json({ userId: user.user_id });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      console.log("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("Auth-Token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // Set to true when using HTTPS
    path: "/",
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};
