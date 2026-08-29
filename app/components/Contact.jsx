"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import {
	Mail,
	Send,
	Github,
	Linkedin,
	Twitter,
	Instagram,
	ExternalLink,
	CheckCircle2,
	Copy,
	MapPin,
	MessageSquare,
	ArrowRight,
} from "lucide-react";
import { profile } from "../data/portfolioData";

const profileIcon = (platform) => {
	switch (platform) {
		case "github":
			return <Github className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
		case "linkedin":
			return <Linkedin className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
		case "twitter":
			return <Twitter className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
		case "instagram":
			return <Instagram className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
		default:
			return <ExternalLink className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
	}
};

const SUBJECTS = [
	"Full-time role",
	"Contract / freelance project",
	"Collaboration",
	"General enquiry",
];

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: SUBJECTS[0],
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [copiedEmail, setCopiedEmail] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.message) {
			toast.error("Please fill in your name, email, and a message.");
			return;
		}

		setIsSubmitting(true);
		try {
			const res = await fetch("/api/send-mail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (!res.ok) throw new Error("Request failed");
			toast.success("Message sent — thanks, I'll be in touch soon.");
			setSubmitted(true);
			setFormData({ name: "", email: "", subject: SUBJECTS[0], message: "" });
		} catch {
			toast.error("Something went wrong sending that. Please email me directly.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleCopyEmail = () => {
		navigator.clipboard?.writeText(profile.email);
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2000);
	};

	return (
		<section id="contact" className="py-20 border-b border-slate-200 dark:border-slate-900 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-start space-y-2 mb-12">
					<div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
						<Mail className="w-4 h-4" />
						<span>Let&apos;s Connect</span>
					</div>
					<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
						Get in touch
					</h2>
					<p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
						Have a role, a project, or just want to talk shop? Send a note below or reach me directly — my inbox is open.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					{/* Left column */}
					<div className="lg:col-span-5 space-y-6">
						<div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 dark:from-indigo-950/40 dark:via-slate-900/60 dark:to-slate-950 border border-indigo-200/80 dark:border-indigo-900/50 shadow-sm dark:shadow-md space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2.5">
									<div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400">
										<Mail className="w-5 h-5" />
									</div>
									<div>
										<h3 className="text-sm font-bold text-slate-900 dark:text-white">Direct email</h3>
										<p className="text-xs text-slate-500 dark:text-slate-400">Usually a reply within a day</p>
									</div>
								</div>
								<button
									onClick={handleCopyEmail}
									className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 shadow-sm dark:shadow-none"
									title="Copy email address"
								>
									{copiedEmail ? (
										<>
											<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
											<span className="text-[11px] text-emerald-600 dark:text-emerald-300 font-medium">Copied</span>
										</>
									) : (
										<>
											<Copy className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
											<span className="text-[11px]">Copy</span>
										</>
									)}
								</button>
							</div>
							<a
								href={`mailto:${profile.email}`}
								className="block text-sm sm:text-base font-mono font-semibold text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200 transition-colors break-all"
							>
								{profile.email}
							</a>
						</div>

						<div className="space-y-3">
							<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
								Around the web
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								{profile.socials.map((social) => (
									<a
										key={social.id}
										href={social.url}
										target="_blank"
										rel="noreferrer"
										className="group p-4 rounded-xl bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex items-center justify-between shadow-sm dark:shadow-none"
									>
										<div className="flex items-center gap-3">
											<div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
												{profileIcon(social.platform)}
											</div>
											<div>
												<h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
													{social.label}
												</h4>
												<p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{social.handle}</p>
											</div>
										</div>
										<ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
									</a>
								))}
							</div>
						</div>

						<div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none space-y-2 text-xs">
							<div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
								<span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
									<MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
									{profile.location}
								</span>
								<span className="font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
									<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
									Online
								</span>
							</div>
							<p className="text-slate-600 dark:text-slate-400 leading-relaxed pt-1">{profile.statusText}.</p>
						</div>
					</div>

					{/* Form */}
					<div className="lg:col-span-7">
						<div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/90 shadow-sm dark:shadow-xl">
							<div className="flex items-center justify-between mb-6">
								<div>
									<h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
										<MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
										<span>Send a message</span>
									</h3>
									<p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
										This routes straight to my inbox.
									</p>
								</div>
							</div>

							{submitted ? (
								<div className="py-12 px-4 text-center space-y-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800">
									<div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
										<CheckCircle2 className="w-6 h-6" />
									</div>
									<div className="space-y-1">
										<h4 className="text-base font-bold text-slate-900 dark:text-white">Message sent</h4>
										<p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
											Thanks for reaching out — I&apos;ve got your note and will get back to you soon.
										</p>
									</div>
									<button
										onClick={() => setSubmitted(false)}
										className="px-4 py-2 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800/60 rounded-lg transition-colors"
									>
										Send another
									</button>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div className="space-y-1.5">
											<label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono">
												Your name *
											</label>
											<input
												id="contact-name"
												type="text"
												required
												placeholder="Jane Doe"
												value={formData.name}
												onChange={(e) => setFormData({ ...formData, name: e.target.value })}
												className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
											/>
										</div>
										<div className="space-y-1.5">
											<label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono">
												Your email *
											</label>
											<input
												id="contact-email"
												type="email"
												required
												placeholder="jane@example.com"
												value={formData.email}
												onChange={(e) => setFormData({ ...formData, email: e.target.value })}
												className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
											/>
										</div>
									</div>

									<div className="space-y-1.5">
										<label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono">
											What&apos;s it about?
										</label>
										<select
											id="contact-subject"
											value={formData.subject}
											onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
											className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
										>
											{SUBJECTS.map((s) => (
												<option key={s} value={s}>
													{s}
												</option>
											))}
										</select>
									</div>

									<div className="space-y-1.5">
										<label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono">
											Message *
										</label>
										<textarea
											id="contact-message"
											rows={5}
											required
											placeholder="Hi Moses, I came across your portfolio and wanted to discuss..."
											value={formData.message}
											onChange={(e) => setFormData({ ...formData, message: e.target.value })}
											className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
										/>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50 disabled:opacity-50"
									>
										{isSubmitting ? (
											<span>Sending...</span>
										) : (
											<>
												<Send className="w-4 h-4" />
												<span>Send message</span>
											</>
										)}
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
