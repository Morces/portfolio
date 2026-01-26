"use client";

import React, { useRef } from "react";
import skills from "../data/skills";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import CyberButton from "./ui/CyberButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const containerRef = useRef(null);
	const titleRef = useRef(null);
	const skillsRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
			},
		});

		tl.from(titleRef.current, {
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
		})
			.from(
				".about-text",
				{
					y: 20,
					opacity: 0,
					duration: 0.8,
				},
				"-=0.4",
			)
			.from(
				skillsRef.current.children,
				{
					scale: 0.8,
					opacity: 0,
					duration: 0.5,
					stagger: 0.1,
					ease: "back.out(1.7)",
				},
				"-=0.4",
			);
	}, []);

	return (
		<Section id="about" className="overflow-hidden">
			<div ref={containerRef} className="flex flex-col gap-16">
				{/* Header */}
				<div ref={titleRef} className="text-center space-y-4">
					<h3 className="text-cyan-400 font-rajdhani font-bold text-xl uppercase tracking-[0.3em]">
						// Operator Profile
					</h3>
					<h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
						About{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
							Me
						</span>
					</h2>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Bio Text */}
					<div className="about-text space-y-6">
						<GlassCard className="h-full">
							<h4 className="text-2xl font-orbitron font-bold text-white mb-4">
								Mission Directive
							</h4>
							<p className="text-gray-300 font-rajdhani text-lg leading-relaxed text-justify">
								I am a passionate, self-driven, and ambitious software engineer
								with an addiction to solving complex problems. My operational
								downtime involves coding, photography, and hiking. When offline,
								I engage in research on emerging technologies and analyzing tech
								documentaries.
							</p>

							<div className="flex flex-wrap gap-4 mt-8">
								<CyberButton
									href="mailto:karanim594@mail.com"
									variant="primary"
								>
									Initialize Contact
								</CyberButton>
								<CyberButton
									href="/Moses Karani.pdf"
									variant="secondary"
									onClick={() => {}}
								>
									Download Data Log (CV)
								</CyberButton>
							</div>
						</GlassCard>
					</div>

					{/* Tech Stack Grid */}
					<div className="space-y-6">
						<h3 className="text-2xl font-orbitron font-bold text-white mb-4 pl-2 border-l-4 border-cyan-400">
							Tech Matrix
						</h3>
						<div
							ref={skillsRef}
							className="grid grid-cols-3 sm:grid-cols-4 gap-4"
						>
							{skills.map((skill) => (
								<div
									key={skill.id}
									className="group relative flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-900/10 transition-all duration-300 cursor-default"
								>
									<div className="w-12 h-12 relative flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110">
										<img
											src={skill.img}
											alt={skill.title}
											className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
										/>
									</div>
									<p className="text-xs font-rajdhani font-bold text-gray-400 group-hover:text-cyan-400 uppercase tracking-wider text-center">
										{skill.title}
									</p>

									{/* Glow Effect */}
									<div className="absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default About;
