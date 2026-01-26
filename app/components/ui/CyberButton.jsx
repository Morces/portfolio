"use client";
import React from "react";
import clsx from "clsx";

const CyberButton = ({
	children,
	onClick,
	href,
	className,
	variant = "primary",
}) => {
	const baseStyles =
		"relative px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all duration-300 group overflow-hidden border";

	const variants = {
		primary:
			"bg-transparent text-cyan-400 border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:border-cyan-400",
		secondary:
			"bg-transparent text-purple-400 border-purple-400/50 hover:bg-purple-400/10 hover:shadow-[0_0_20px_rgba(188,19,254,0.4)] hover:border-purple-400",
	};

	const Component = href ? "a" : "button";

	return (
		<Component
			href={href}
			onClick={onClick}
			className={clsx(baseStyles, variants[variant], className)}
		>
			<span className="relative z-10">{children}</span>
			<div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />

			{/* Corner Accents */}
			<span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-70" />
			<span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-70" />
		</Component>
	);
};

export default CyberButton;
