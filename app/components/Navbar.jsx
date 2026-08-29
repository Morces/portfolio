"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileDown, Mail, Github, Linkedin, Circle } from "lucide-react";
import { profile } from "../data/portfolioData";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
	{ label: "About", href: "#about", id: "about" },
	{ label: "Projects", href: "#projects", id: "projects" },
	{ label: "Skills", href: "#skills", id: "skills" },
	{ label: "Experience", href: "#experience", id: "experience" },
	{ label: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	const github = profile.socials.find((s) => s.platform === "github");
	const linkedin = profile.socials.find((s) => s.platform === "linkedin");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
			const sections = ["hero", "about", "projects", "skills", "experience", "contact"];
			const scrollPosition = window.scrollY + 200;
			for (const sectionId of sections) {
				const el = document.getElementById(sectionId);
				if (el) {
					const top = el.offsetTop;
					const height = el.offsetHeight;
					if (scrollPosition >= top && scrollPosition < top + height) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (e, href) => {
		e.preventDefault();
		setMobileMenuOpen(false);
		const target = document.querySelector(href);
		if (target) target.scrollIntoView({ behavior: "smooth" });
	};

	const initials = profile.name
		.split(" ")
		.map((n) => n[0])
		.join("");

	return (
		<header
			id="main-navbar"
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-md shadow-slate-200/50 dark:shadow-black/20"
					: "bg-transparent py-5"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					{/* Logo / Personal Brand */}
					<a
						href="#hero"
						onClick={(e) => scrollToSection(e, "#hero")}
						className="group flex items-center gap-3 text-slate-900 dark:text-slate-100 transition-colors"
					>
						<div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 p-[1.5px] shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
							<div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center font-bold font-mono text-sm tracking-wider">
								{initials}
							</div>
						</div>
						<div className="flex flex-col">
							<span className="font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors text-sm sm:text-base leading-tight">
								{profile.name}
							</span>
							<span className="text-xs text-slate-500 dark:text-slate-400 font-normal hidden sm:inline-block">
								{profile.roleTitle}
							</span>
						</div>
					</a>

					{/* Desktop Navigation Links */}
					<nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm shadow-sm dark:shadow-none">
						{navLinks.map((link) => {
							const isActive = activeSection === link.id;
							return (
								<a
									key={link.id}
									href={link.href}
									onClick={(e) => scrollToSection(e, link.href)}
									className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
										isActive
											? "bg-indigo-600 text-white dark:bg-indigo-600/20 dark:text-indigo-300 dark:border dark:border-indigo-500/30 shadow-sm"
											: "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
									}`}
								>
									{link.label}
								</a>
							);
						})}
					</nav>

					{/* Desktop Right CTAs */}
					<div className="hidden lg:flex items-center gap-2.5">
						<ThemeToggle id="desktop-theme-toggle" />

						<div className="flex items-center gap-1 border-r border-slate-200 dark:border-slate-800 pr-2.5 ml-1">
							{github && (
								<a
									href={github.url}
									target="_blank"
									rel="noreferrer"
									aria-label="GitHub profile"
									className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors"
									title="GitHub"
								>
									<Github className="w-4 h-4" />
								</a>
							)}
							{linkedin && (
								<a
									href={linkedin.url}
									target="_blank"
									rel="noreferrer"
									aria-label="LinkedIn profile"
									className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors"
									title="LinkedIn"
								>
									<Linkedin className="w-4 h-4" />
								</a>
							)}
						</div>

						<a
							id="navbar-resume-btn"
							href={profile.resumeUrl}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800/50 rounded-lg transition-colors"
						>
							<FileDown className="w-3.5 h-3.5" />
							<span>Résumé</span>
						</a>

						<a
							id="navbar-contact-btn"
							href="#contact"
							onClick={(e) => scrollToSection(e, "#contact")}
							className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50"
						>
							<Mail className="w-3.5 h-3.5" />
							<span>Get in Touch</span>
						</a>
					</div>

					{/* Mobile toggle */}
					<div className="flex items-center gap-2 lg:hidden">
						<ThemeToggle id="mobile-theme-toggle" />
						<button
							id="mobile-menu-toggle"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label="Toggle navigation menu"
							className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900/80 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors"
						>
							{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile drawer */}
			{mobileMenuOpen && (
				<div className="lg:hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800/80 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl">
					<nav className="flex flex-col space-y-1">
						{navLinks.map((link) => (
							<a
								key={link.id}
								href={link.href}
								onClick={(e) => scrollToSection(e, link.href)}
								className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
									activeSection === link.id
										? "bg-indigo-600 text-white dark:bg-indigo-600/20 dark:text-indigo-300 dark:border dark:border-indigo-500/30"
										: "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900"
								}`}
							>
								{link.label}
							</a>
						))}
					</nav>

					<div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-col gap-2">
						<div className="flex items-center justify-between px-2 py-1">
							<span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
								<Circle className="w-2 h-2 fill-emerald-500 text-emerald-500 animate-pulse" />
								{profile.isAvailableForHire ? "Available for hire" : "Currently engaged"}
							</span>
							<div className="flex items-center gap-3">
								{github && (
									<a href={github.url} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200">
										<Github className="w-4 h-4" />
									</a>
								)}
								{linkedin && (
									<a href={linkedin.url} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200">
										<Linkedin className="w-4 h-4" />
									</a>
								)}
							</div>
						</div>

						<div className="grid grid-cols-2 gap-2 pt-1">
							<a
								href={profile.resumeUrl}
								target="_blank"
								rel="noreferrer"
								className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
							>
								<FileDown className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
								<span>Résumé</span>
							</a>
							<a
								href="#contact"
								onClick={(e) => scrollToSection(e, "#contact")}
								className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm"
							>
								<Mail className="w-3.5 h-3.5" />
								<span>Contact</span>
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
