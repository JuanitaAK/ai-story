import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

// Send email to the user test with mailtrap.io
export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_SUPPORT,
    to: to,
    subject: "Reset your password",
    text: "Reset your password please. You have 10 minutes to do so.",
    html: html,
  });
};
