import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
	return (
		<>
			<div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40">
				<a
					href="https://github.com/Morces"
					target="_blank"
					className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
				>
					<FaGithub size={20} />
				</a>
				<a
					href="https://www.linkedin.com/in/moseskarani/"
					target="_blank"
					className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
				>
					<FaLinkedin size={20} />
				</a>
				<a
					href="https://twitter.com/morces_c"
					target="_blank"
					className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
				>
					<FaXTwitter size={20} />
				</a>
				<a
					href="https://www.instagram.com/morces_k/"
					target="_blank"
					className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
				>
					<FaInstagram size={20} />
				</a>
				<div className="w-[1px] h-20 bg-gradient-to-b from-cyan-400 to-transparent" />
			</div>

			<div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40">
				<a
					href="mailto:karanim594@gmail.com"
					className="vertical-text font-rajdhani text-sm tracking-widest text-gray-400 hover:text-cyan-400 transition-colors duration-300"
					style={{ writingMode: "vertical-rl" }}
				>
					karanim594@gmail.com
				</a>
				<div className="w-[1px] h-20 bg-gradient-to-b from-cyan-400 to-transparent" />
			</div>
		</>
	);
};

export default Socials;
