import { NextResponse } from "next/server";
import { sendMail, CONTACT_ADDRESS } from "../sendMail";

export async function POST(req) {
	try {
		const { name, email, subject, message } = await req.json();

		if (!name || !email || !message) {
			return NextResponse.json(
				{ message: "Name, email, and message are required." },
				{ status: 400 },
			);
		}

		const label = subject ? `${subject} — ${name}` : `Message from ${name}`;

		await sendMail({
			from: CONTACT_ADDRESS,
			replyTo: email,
			to: CONTACT_ADDRESS,
			subject: `Portfolio: ${label}`,
			text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\n${message}`,
		});

		return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: error?.message || "Internal server error" },
			{ status: 500 },
		);
	}
}
