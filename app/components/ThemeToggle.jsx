"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = ({ className = "", id = "theme-toggle-btn" }) => {
	const { theme, toggleTheme, mounted } = useTheme();
	const isDark = theme === "dark";

	return (
		<button
			id={id}
			type="button"
			onClick={toggleTheme}
			aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
			title={isDark ? "Switch to light theme" : "Switch to dark theme"}
			className={`relative p-2 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
				isDark
					? "bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-amber-400 hover:text-amber-300"
					: "bg-white hover:bg-slate-100 border-slate-200 text-indigo-600 hover:text-indigo-700 shadow-sm"
			} ${className}`}
		>
			<span className="relative w-4 h-4 flex items-center justify-center">
				{/* Render a stable icon until mounted to avoid hydration mismatch */}
				{!mounted ? (
					<Moon className="w-4 h-4 opacity-0" />
				) : isDark ? (
					<Sun className="w-4 h-4" />
				) : (
					<Moon className="w-4 h-4" />
				)}
			</span>
			<span className="sr-only">{isDark ? "Activate light mode" : "Activate dark mode"}</span>
		</button>
	);
};

export default ThemeToggle;
