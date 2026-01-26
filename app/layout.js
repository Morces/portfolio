import { Inter, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import { ToastContainer, Bounce } from "react-toastify";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-rajdhani",
});

export const metadata = {
	title: "Moses Karani | Creative Technologist",
	description:
		"A futuristic portfolio showcasing advanced technical skills and creativity.",
};

import SmoothScroll from "./components/SmoothScroll";

// ... imports

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${inter.variable} ${orbitron.variable} ${rajdhani.variable} antialiased bg-black text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden`}
			>
				<SmoothScroll />
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
					transition={Bounce}
				/>
				{children}
			</body>
		</html>
	);
}
