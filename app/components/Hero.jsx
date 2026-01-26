"use client";

import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroBackground from "./3d/HeroBackground";
import CyberButton from "./ui/CyberButton";
import { BsChevronDown } from "react-icons/bs";

const Hero = () => {
	const containerRef = useRef(null);
	const textRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

		tl.fromTo(
			textRef.current.children,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 },
		);
	}, []);

	return (
		<section
			id="intro"
			className="relative w-full h-screen flex items-center justify-center overflow-hidden"
		>
			{/* 3D Background */}
			<HeroBackground />

			{/* Overlay Gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10 pointer-events-none" />

			{/* Content */}
			<div
				ref={containerRef}
				className="relative z-20 container mx-auto px-6 text-center"
			>
				<div ref={textRef} className="flex flex-col items-center gap-6">
					<h2 className="text-cyan-400 font-rajdhani font-bold text-xl sm:text-2xl uppercase tracking-[0.2em] border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-900/10 backdrop-blur-sm">
						Welcome to the Future
					</h2>

					<h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-orbitron text-white leading-tight">
						I'M{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
							MOSES
						</span>
						<br />
						KARANI
					</h1>

					<div className="text-2xl sm:text-3xl lg:text-4xl font-rajdhani font-semibold text-gray-300 h-[50px] sm:h-[60px]">
						<span className="text-cyan-400 mr-2">{">"}</span>
						<Typewriter
							words={[
								"Software Engineer",
								"Full Stack Developer",
								"Creative Technologist",
								"Problem Solver",
							]}
							loop={0}
							cursor
							cursorStyle="_"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</div>

					<p className="max-w-2xl text-gray-400 text-lg sm:text-xl font-rajdhani mt-4 leading-relaxed">
						Crafting immersive digital experiences with modern web technologies.
						Specializing in high-performance applications and futuristic UI/UX.
					</p>

					<div className="flex gap-6 mt-8">
						<CyberButton href="#portfolio" variant="primary">
							View Projects
						</CyberButton>
						<CyberButton href="#contact" variant="secondary">
							Contact Me
						</CyberButton>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<a
				href="#about"
				className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-cyan-400 animate-bounce cursor-pointer p-4 transition-colors hover:text-white"
			>
				<BsChevronDown size={30} />
			</a>
		</section>
	);
};

export default Hero;
