"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Mail, Code2, ExternalLink } from "lucide-react";
import { profile } from "../data/portfolioData";

const icon = (platform) => {
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

export const Footer = () => {
	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
	const initials = profile.name
		.split(" ")
		.map((n) => n[0])
		.join("");

	return (
		<footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-900">
					<div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
						<div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center font-mono font-bold text-indigo-600 dark:text-indigo-300">
							{initials}
						</div>
						<div>
							<span className="font-semibold text-slate-900 dark:text-slate-200 text-sm">{profile.name}</span>
							<p className="text-slate-500 dark:text-slate-400 text-xs">{profile.roleTitle}</p>
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
						<a href="#about" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">About</a>
						<a href="#projects" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Projects</a>
						<a href="#skills" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Skills</a>
						<a href="#experience" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Experience</a>
						<a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Contact</a>
					</div>

					<div className="flex items-center gap-3">
						<div className="flex items-center gap-2">
							{profile.socials.map((s) => (
								<a
									key={s.id}
									href={s.url}
									target="_blank"
									rel="noreferrer"
									aria-label={s.label}
									className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors shadow-sm dark:shadow-none"
								>
									{icon(s.platform)}
								</a>
							))}
							<a
								href={`mailto:${profile.email}`}
								aria-label="Email"
								className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors shadow-sm dark:shadow-none"
							>
								<Mail className="w-4 h-4" />
							</a>
						</div>

						<button
							onClick={scrollToTop}
							aria-label="Back to top"
							className="p-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-white bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded-lg border border-indigo-200 dark:border-indigo-800/50 transition-colors shadow-sm dark:shadow-none"
						>
							<ArrowUp className="w-4 h-4" />
						</button>
					</div>
				</div>

				<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 dark:text-slate-400 text-[11px] font-mono">
					<p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
					<div className="flex items-center gap-2">
						<Code2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
						<span>Built with Next.js, React &amp; Tailwind CSS</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
