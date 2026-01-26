"use client";

import React, { useRef, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import clsx from "clsx";

const PorfolioCard = ({ itemData }) => {
	const { img, title, description, liveLink, repoLink, techStack, ariaLabel } =
		itemData;
	const cardRef = useRef(null);
	const [rotation, setRotation] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		// Calculate rotation (-10 to 10 degrees)
		const rotX = ((y - rect.height / 2) / rect.height) * -20;
		const rotY = ((x - rect.width / 2) / rect.width) * 20;

		setRotation({ x: rotX, y: rotY });
	};

	const handleMouseLeave = () => {
		setRotation({ x: 0, y: 0 });
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative w-full h-full perspective-1000 group"
			style={{ perspective: "1000px" }}
		>
			<div
				className="relative w-full h-full bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-200 ease-out"
				style={{
					transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
					transformStyle: "preserve-3d",
				}}
			>
				{/* Glow Gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-colors duration-500 pointer-events-none" />

				{/* Image */}
				<div className="h-48 w-full overflow-hidden relative border-b border-white/5">
					<img
						src={img}
						alt={title}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

					{/* Tech Stack Overlay (On Hover) */}
					<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm p-4">
						<div className="flex flex-wrap justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
							{techStack.map((tech) => (
								<span
									key={tech}
									className="text-[10px] font-bold font-rajdhani uppercase tracking-widest px-2 py-1 bg-cyan-900/50 text-cyan-400 border border-cyan-400/30 rounded"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Content */}
				<div
					className="p-6 space-y-4 relative z-10 bg-black/40"
					style={{ transform: "translateZ(20px)" }}
				>
					<h3 className="text-xl font-orbitron font-bold text-white group-hover:text-cyan-400 transition-colors">
						{title}
					</h3>
					<p className="text-sm text-gray-400 font-rajdhani line-clamp-3 leading-relaxed">
						{description}
					</p>

					<div className="flex items-center gap-4 pt-4 border-t border-white/5">
						{repoLink && (
							<a
								href={repoLink}
								target="_blank"
								rel="noreferrer"
								aria-label={`${ariaLabel} Repository`}
								className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
							>
								<AiFillGithub size={24} />
							</a>
						)}
						{liveLink && (
							<a
								href={liveLink}
								target="_blank"
								rel="noreferrer"
								aria-label={`${ariaLabel} Live Demo`}
								className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
							>
								<BiLinkExternal size={24} />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PorfolioCard;
