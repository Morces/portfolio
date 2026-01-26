"use client";

import React, { useState, useRef } from "react";
import PortfolioCard from "./PorfolioCard";
import { portfolioData } from "../data/portfolioData";
import Section from "./ui/Section";
import CyberButton from "./ui/CyberButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
	const [itemsCount, setItemsCount] = useState(6);
	const containerRef = useRef(null);
	const gridRef = useRef(null);

	const updateItemsCount = () => {
		if (itemsCount < portfolioData.length) {
			setItemsCount((prev) => prev + 3);
		} else {
			setItemsCount(6);
			// Optional: Scroll back to top of portfolio
			const element = document.getElementById("portfolio");
			if (element) element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useGSAP(() => {
		ScrollTrigger.batch(gridRef.current.children, {
			onEnter: (elements) => {
				gsap.from(elements, {
					y: 60,
					opacity: 0,
					stagger: 0.15,
					duration: 0.8,
					ease: "power2.out",
					overwrite: true,
				});
			},
			once: true,
		});
	}, [itemsCount]); // Re-run when items change

	return (
		<Section
			id="portfolio"
			className="border-t border-b border-white/5 bg-black/20"
		>
			<div ref={containerRef} className="space-y-12">
				<div className="text-center space-y-4">
					<h3 className="text-cyan-400 font-rajdhani font-bold text-xl uppercase tracking-[0.3em]">
						// Project Archives
					</h3>
					<h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
						Selected{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
							Works
						</span>
					</h2>
				</div>

				<div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{portfolioData.slice(0, itemsCount).map((item) => (
						<div key={item.id} className="h-[400px]">
							<PortfolioCard itemData={item} />
						</div>
					))}
				</div>

				<div className="flex justify-center mt-12">
					<CyberButton onClick={updateItemsCount} variant="primary">
						{itemsCount < portfolioData.length
							? "Load More Data"
							: "Collapse Archives"}
					</CyberButton>
				</div>
			</div>
		</Section>
	);
};

export default Portfolio;
