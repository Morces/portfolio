import { NextResponse } from "next/server";
import { sendMail } from "../sendMail";

export async function POST(req, res) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      throw {
        custom: true,
        message: "All fields are required.",
      };
    }

    const mailOptions = {
      from: email,
      to: "karanim594@gmail.com",
      subject: `Message from ${name}`,
      text: message,
    };

    await sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
