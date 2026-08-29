import { Urbanist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer, Bounce } from "react-toastify";

const sans = Urbanist({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-urbanist",
});

const mono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600"],
	variable: "--font-jetbrains",
});

export const metadata = {
	metadataBase: new URL("https://moseskarani.dev"),
	title: "Moses Karani | Software Engineer",
	description:
		"Full-stack software engineer with 3+ years building responsive web interfaces, RESTful services, and production-ready products across React, Next.js, and Node.js.",
	openGraph: {
		title: "Moses Karani | Software Engineer",
		description:
			"Full-stack software engineer building responsive web interfaces, RESTful services, and production-ready products.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Moses Karani | Software Engineer",
		description:
			"Full-stack software engineer building responsive web interfaces, RESTful services, and production-ready products.",
	},
};

const themeScript = `(function(){try{var s=localStorage.getItem('portfolio_theme');var d=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&d)||!s){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`;

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`scroll-smooth ${sans.variable} ${mono.variable}`}
			suppressHydrationWarning
		>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body
				className="font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200 transition-colors duration-200"
				suppressHydrationWarning
			>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
					transition={Bounce}
				/>
				{children}
			</body>
		</html>
	);
}
