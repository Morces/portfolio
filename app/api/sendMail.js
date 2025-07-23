import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "karanim594@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendMail = async (mailOptions) => {
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", result.messageId);
    return result;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error;
  }
};
