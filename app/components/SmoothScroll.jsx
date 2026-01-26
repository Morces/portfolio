"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: "vertical",
			gestureDirection: "vertical",
			smooth: true,
			smoothTouch: false,
			touchMultiplier: 2,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		const handleAnchorClick = (e) => {
			const target = e.target.closest("a");
			if (!target) return;

			const href = target.getAttribute("href");
			if (href?.startsWith("#")) {
				e.preventDefault();
				const element = document.querySelector(href);
				if (element) {
					lenis.scrollTo(element, {
						offset: 0,
						duration: 1.5,
						easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
						immediate: false,
					});
				}
			}
		};

		document.addEventListener("click", handleAnchorClick);

		return () => {
			lenis.destroy();
			document.removeEventListener("click", handleAnchorClick);
		};
	}, []);

	return null;
};

export default SmoothScroll;
