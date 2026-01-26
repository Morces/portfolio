import React from "react";
import clsx from "clsx";

const GlassCard = ({ children, className, hoverEffect = true }) => {
	return (
		<div
			className={clsx(
				"glass-panel rounded-xl p-6 relative overflow-hidden transition-all duration-300",
				hoverEffect &&
					"hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] group",
				className,
			)}
		>
			{hoverEffect && (
				<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			)}
			<div className="relative z-10">{children}</div>
		</div>
	);
};

export default GlassCard;
