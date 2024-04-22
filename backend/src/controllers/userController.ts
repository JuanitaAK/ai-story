import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import * as dotenv from "dotenv";
dotenv.config();

import {
  userForm,
  postSignUpFormInput,
  getUserByMail,
  postResetPasswordToken,
  getUserByResetToken,
} from "../models/userFormModel";
import { sendEmail } from "../services/email";

const JWT_SECRET = process.env.JWT_SECRET || "";
const AUTH_TOKEN_EXPIRY_IN_SECONDS = 86400;
const RESET_TOKEN_EXPIRY_IN_SECONDS = 600;

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

const encryptResetPasswordToken = (token: string) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { user_mail } = req.body;
  const user = await getUserByMail(user_mail);

  try {
    if (!user) {
      return res
        .status(404)
        .json({ message: "Invalid credentials or user not found" });
    }
    const token = crypto.randomBytes(20).toString("hex");
    const encryptedToken = encryptResetPasswordToken(token);
    const registerResetPasswordToken = await postResetPasswordToken(
      encryptedToken,
      user_mail
    );

    const resetUrl = `${req.protocol}://${req.get(
      "host"
    )}/auth/reset-password/${token}`;

    const html = `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p> \n \n <p>This link will expire in 10 minutes.</p>`;

    try {
      await sendEmail(user_mail, html);
      return res
        .status(200)
        .json({ status: "succes", message: "Reset token sent successfully" });
    } catch (error) {
      console.error(error, "Error sending email for password reset");
      return res
        .status(500)
        .json({ error: "Internal Server Error when reseting password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { token } = req.params;
  const encryptedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const isTokenExpired = new Date(
    new Date().getTime() + 10 * 60 * 1000
  ).toISOString();

  try {
    const user = await getUserByResetToken(encryptedToken, isTokenExpired);

    if (!user) {
      return res
        .status(404)
        .json({ message: "Token has expired or is invalid" });
    }

    const token = jwt.sign({ userId: user.user_id }, JWT_SECRET, {
      expiresIn: AUTH_TOKEN_EXPIRY_IN_SECONDS,
    });

    res.header(
      "set-cookie",
      `Auth-Token=${token}; SameSite=Lax; Secure; path=/; expires=${
        new Date().getTime() + AUTH_TOKEN_EXPIRY_IN_SECONDS * 1000
      } `
    );
    return res.status(200).json({ userId: user.user_id });
  } catch (error) {
    console.error(error, "Problem while reseting password");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
