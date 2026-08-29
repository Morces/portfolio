"use client";

import React, { useState } from "react";
import {
	ArrowRight,
	FileDown,
	Mail,
	Github,
	Linkedin,
	Twitter,
	Instagram,
	MapPin,
	Clock,
	Sparkles,
	CheckCircle2,
	Copy,
	ExternalLink,
} from "lucide-react";
import { profile } from "../data/portfolioData";
import { AnimatedSection } from "./AnimatedSection";

const socialIcon = (platform) => {
	switch (platform) {
		case "github":
			return <Github className="w-4 h-4" />;
		case "linkedin":
			return <Linkedin className="w-4 h-4" />;
		case "twitter":
			return <Twitter className="w-4 h-4" />;
		case "instagram":
			return <Instagram className="w-4 h-4" />;
		default:
			return <ExternalLink className="w-4 h-4" />;
	}
};

export const Hero = () => {
	const [copiedEmail, setCopiedEmail] = useState(false);

	const handleCopyEmail = (e) => {
		e.stopPropagation();
		navigator.clipboard?.writeText(profile.email);
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2000);
	};

	const scrollTo = (e, id) => {
		e.preventDefault();
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="hero"
			className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-900"
		>
			{/* Ambient background */}
			<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse-glow" />
				<div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl" />
				<div
					className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
					style={{
						backgroundImage:
							"linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
						backgroundSize: "48px 48px",
					}}
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					{/* Copy */}
					<div className="lg:col-span-8 flex flex-col items-start space-y-6 text-left">
						<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 backdrop-blur-sm shadow-sm">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
							</span>
							<span>{profile.statusText}</span>
						</div>

						<div className="space-y-3">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
								Hi, I&apos;m{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-600 dark:from-white dark:via-slate-100 dark:to-indigo-300">
									{profile.name}
								</span>
							</h1>
							<p className="text-xl sm:text-2xl font-medium text-indigo-600 dark:text-indigo-300/90 tracking-tight">
								{profile.roleTitle}
							</p>
						</div>

						<p className="text-base sm:text-lg text-slate-600 dark:text-slate-300/90 max-w-2xl leading-relaxed">
							{profile.tagline}
						</p>

						<div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
							<div className="flex items-center gap-1.5 bg-white dark:bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none">
								<MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
								<span>{profile.location}</span>
							</div>
							<div className="flex items-center gap-1.5 bg-white dark:bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none">
								<Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
								<span>{profile.timezone}</span>
							</div>
						</div>

						<div className="flex flex-wrap items-center gap-3 pt-2">
							<a
								id="hero-explore-projects-btn"
								href="#projects"
								onClick={(e) => scrollTo(e, "projects")}
								className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
							>
								<span>View Projects</span>
								<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
							</a>

							<a
								id="hero-contact-btn"
								href="#contact"
								onClick={(e) => scrollTo(e, "contact")}
								className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 shadow-sm dark:shadow-none"
							>
								<Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
								<span>Get in Touch</span>
							</a>

							<a
								id="hero-resume-btn"
								href={profile.resumeUrl}
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-2 px-5 py-3 bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-800/80 transition-all duration-200 shadow-sm dark:shadow-none"
							>
								<FileDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
								<span>Résumé</span>
							</a>
						</div>

						<div className="pt-3 flex flex-wrap items-center gap-3">
							<span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
								Connect:
							</span>
							<div className="flex items-center gap-2 flex-wrap">
								{profile.socials.map((social) => (
									<a
										key={social.id}
										href={social.url}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm dark:shadow-none"
									>
										{socialIcon(social.platform)}
										<span>{social.label}</span>
									</a>
								))}

								<button
									id="hero-copy-email-btn"
									onClick={handleCopyEmail}
									className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-900/60 text-xs text-indigo-700 dark:text-indigo-300 transition-colors shadow-sm dark:shadow-none"
									title="Click to copy email address"
								>
									{copiedEmail ? (
										<>
											<CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
											<span className="text-emerald-600 dark:text-emerald-300 font-medium">Copied!</span>
										</>
									) : (
										<>
											<Copy className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
											<span className="font-mono">{profile.email}</span>
										</>
									)}
								</button>
							</div>
						</div>
					</div>

					{/* Avatar card */}
					<div className="lg:col-span-4 flex justify-center lg:justify-end">
						<div className="relative w-full max-w-sm">
							<div className="relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 p-4 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl dark:shadow-black/60 backdrop-blur-xl">
								<div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 group">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={profile.avatarUrl}
										alt={profile.name}
										className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
									<div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs shadow-md">
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
											<span className="font-mono text-slate-800 dark:text-slate-200 font-medium">Full-Stack Engineer</span>
										</div>
										<span className="text-slate-500 dark:text-slate-400 font-mono">EAT</span>
									</div>
								</div>

								<div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
									<div className="flex items-center justify-between text-xs mb-2">
										<span className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1.5">
											<Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
											Core Focus
										</span>
										<span className="text-indigo-600 dark:text-indigo-400 font-mono text-[11px]">
											TypeScript • React • Node.js
										</span>
									</div>
									<div className="grid grid-cols-3 gap-1.5 text-center text-[11px] font-mono text-slate-700 dark:text-slate-300">
										<span className="bg-slate-100 dark:bg-slate-900/90 py-1 rounded border border-slate-200 dark:border-slate-800">Full-Stack</span>
										<span className="bg-slate-100 dark:bg-slate-900/90 py-1 rounded border border-slate-200 dark:border-slate-800">React / Next</span>
										<span className="bg-slate-100 dark:bg-slate-900/90 py-1 rounded border border-slate-200 dark:border-slate-800">REST APIs</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Stats strip */}
				<AnimatedSection delayMs={100} className="mt-16">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
						{profile.stats.map((stat, idx) => (
							<div
								key={idx}
								className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700/80 shadow-sm dark:shadow-none transition-colors"
							>
								<div>
									<span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
										{stat.value}
									</span>
									<p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">{stat.label}</p>
								</div>
								{stat.subtext && (
									<p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{stat.subtext}</p>
								)}
							</div>
						))}
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
};

export default Hero;
