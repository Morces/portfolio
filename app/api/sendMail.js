import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const CONTACT_ADDRESS = "morcescodex@gmail.com";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: CONTACT_ADDRESS,
		// Gmail App Password for morcescodex@gmail.com — set in .env.
		// App passwords are 16 chars; strip any display spacing.
		pass: (process.env.EMAIL_PASSWORD || "").replace(/\s+/g, ""),
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

export { CONTACT_ADDRESS };
