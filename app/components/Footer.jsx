import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="w-full py-8 border-t border-white/5 bg-black flex flex-col items-center justify-center gap-2">
			<p className="font-rajdhani text-gray-500 text-sm">
				© {year} Moses Karani. System Status:{" "}
				<span className="text-green-500">Online</span>
			</p>
		</footer>
	);
};

export default Footer;
