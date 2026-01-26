"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import clsx from "clsx";

const navLinks = [
	{ name: "Home", href: "#intro" },
	{ name: "About", href: "#about" },
	{ name: "Portfolio", href: "#portfolio" },
	{ name: "Contact", href: "#contact" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useGSAP(() => {
		gsap.from(navRef.current, {
			y: -100,
			opacity: 0,
			duration: 1,
			ease: "power4.out",
			delay: 0.5,
		});
	}, []);

	return (
		<header
			ref={navRef}
			className={clsx(
				"fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 py-4",
				scrolled ? "py-2" : "py-4",
			)}
		>
			<div
				className={clsx(
					"max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300",
					scrolled || isOpen
						? "glass-panel bg-black/60 shadow-lg backdrop-blur-md"
						: "bg-transparent",
				)}
			>
				{/* Logo */}
				<Link
					href="/"
					className="text-2xl font-bold font-orbitron tracking-wider text-white group"
				>
					MOSES
					<span className="text-cyan-400 group-hover:animate-pulse">.</span>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="relative text-sm uppercase tracking-widest text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium group"
						>
							{link.name}
							<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
						</a>
					))}
					<a
						href="mailto:karanim594@gmail.com"
						className="px-5 py-2 text-xs font-bold uppercase tracking-widest border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300"
					>
						Hire Me
					</a>
				</nav>

				{/* Mobile Menu Toggle */}
				<button
					className="md:hidden text-2xl text-white hover:text-cyan-400 transition-colors"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <HiX /> : <HiMenuAlt4 />}
				</button>
			</div>

			{/* Mobile Nav Overlay */}
			<div
				className={clsx(
					"fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out",
					isOpen ? "translate-y-0" : "-translate-y-full",
				)}
			>
				{navLinks.map((link) => (
					<a
						key={link.name}
						href={link.href}
						onClick={() => setIsOpen(false)}
						className="text-2xl font-rajdhani font-bold text-white hover:text-cyan-400 tracking-widest transition-colors"
					>
						{link.name}
					</a>
				))}
			</div>
		</header>
	);
};

export default Navbar;
