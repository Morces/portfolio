"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import CyberButton from "./ui/CyberButton";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [focused, setFocused] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		if (!formData.name || !formData.email || !formData.message) {
			toast.error("Please complete all fields.");
			return;
		}

		setLoading(true);
		try {
			const res = await fetch("/api/send-mail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (res.ok) {
				toast.success("Transmission Received.");
				setFormData({ name: "", email: "", message: "" });
			} else {
				throw new Error("Failed");
			}
		} catch (error) {
			toast.error("Transmission Failed. Retry later.");
		} finally {
			setLoading(false);
		}
	};

	const InputGroup = ({ icon: Icon, name, type = "text", placeholder }) => (
		<div className="relative group">
			<div
				className={`absolute inset-0 bg-cyan-400/20 blur-md transition-opacity duration-300 rounded-lg ${focused === name ? "opacity-100" : "opacity-0"}`}
			/>
			<div className="relative flex items-center bg-black/50 border border-white/10 rounded-lg overflow-hidden focus-within:border-cyan-400 transition-colors">
				<div className="pl-4 text-gray-400 group-focus-within:text-cyan-400 transition-colors">
					<Icon />
				</div>
				{type === "textarea" ? (
					<textarea
						name={name}
						value={formData[name]}
						onChange={handleChange}
						onFocus={() => setFocused(name)}
						onBlur={() => setFocused("")}
						placeholder={placeholder}
						className="w-full bg-transparent p-4 text-white outline-none font-rajdhani placeholder:text-gray-600 h-32 resize-none"
					/>
				) : (
					<input
						type={type}
						name={name}
						value={formData[name]}
						onChange={handleChange}
						onFocus={() => setFocused(name)}
						onBlur={() => setFocused("")}
						placeholder={placeholder}
						className="w-full bg-transparent p-4 text-white outline-none font-rajdhani placeholder:text-gray-600"
					/>
				)}
			</div>
		</div>
	);

	return (
		<Section id="contact" className="relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />

			<div className="max-w-3xl mx-auto space-y-12">
				<div className="text-center space-y-4">
					<h3 className="text-cyan-400 font-rajdhani font-bold text-xl uppercase tracking-[0.3em]">
						// Comms Link
					</h3>
					<h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
						Initialize{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
							Contact
						</span>
					</h2>
				</div>

				<GlassCard className="space-y-8">
					<div className="grid gap-6">
						<InputGroup
							icon={FaUser}
							name="name"
							placeholder="Identify Yourself (Name)"
						/>
						<InputGroup
							icon={FaEnvelope}
							name="email"
							type="email"
							placeholder="Return Address (Email)"
						/>
						<InputGroup
							icon={FaPaperPlane}
							name="message"
							type="textarea"
							placeholder="Transmission Content (Message)"
						/>
					</div>

					<div className="flex justify-end">
						<CyberButton
							onClick={handleSubmit}
							variant="secondary"
							className="w-full sm:w-auto"
						>
							{loading ? "Transmitting..." : "Send Transmission"}
						</CyberButton>
					</div>
				</GlassCard>
			</div>
		</Section>
	);
};

export default Contact;
