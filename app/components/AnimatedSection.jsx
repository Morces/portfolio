"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Fade-and-rise wrapper triggered when the element scrolls into view.
 *
 * Renders visible during SSR and the first client paint (so content is never
 * hidden without JS and hydration matches). After mount:
 *   - reduced-motion or no IntersectionObserver  -> stays visible, no animation
 *   - already in / above the viewport            -> reveals immediately
 *   - genuinely below the fold                    -> hidden, then revealed on scroll
 * A timed fallback guarantees content is never left stuck hidden.
 */
export const AnimatedSection = ({
	children,
	className = "",
	delayMs = 0,
	rootMargin = "0px 0px -60px 0px",
	as: Component = "div",
	style,
	// absorbed for API compatibility — no longer used
	threshold,
	triggerOnce,
	...rest
}) => {
	const nodeRef = useRef(null);
	const [hydrated, setHydrated] = useState(false);
	const [revealed, setRevealed] = useState(false);

	useEffect(() => {
		setHydrated(true);
		const node = nodeRef.current;

		const prefersReduced =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (!node || prefersReduced || !("IntersectionObserver" in window)) {
			setRevealed(true);
			return;
		}

		// If it's already in or above the viewport at mount, reveal right away.
		if (node.getBoundingClientRect().top < window.innerHeight) {
			setRevealed(true);
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((e) => e.isIntersecting)) {
					setRevealed(true);
					observer.disconnect();
				}
			},
			{ threshold: 0, rootMargin },
		);
		observer.observe(node);

		// Safety net: never leave content hidden.
		const fallback = setTimeout(() => setRevealed(true), 1600);

		return () => {
			observer.disconnect();
			clearTimeout(fallback);
		};
	}, [rootMargin]);

	const show = !hydrated || revealed;
	const transitionDelay = delayMs > 0 ? `${delayMs}ms` : undefined;

	return (
		<Component
			ref={nodeRef}
			className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${
				show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			} ${className}`}
			style={{ ...style, ...(transitionDelay ? { transitionDelay } : {}) }}
			{...rest}
		>
			{children}
		</Component>
	);
};

export default AnimatedSection;
