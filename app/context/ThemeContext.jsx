"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/** @typedef {'light'|'dark'} Theme */

const ThemeContext = createContext(undefined);

const STORAGE_KEY = "portfolio_theme";

export const ThemeProvider = ({ children }) => {
	const [theme, setThemeState] = useState(/** @type {Theme} */ ("dark"));
	const [mounted, setMounted] = useState(false);

	// Sync from whatever the pre-hydration script already applied to <html>.
	useEffect(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored === "light" || stored === "dark") {
				setThemeState(stored);
			} else {
				setThemeState(
					document.documentElement.classList.contains("dark") ? "dark" : "light",
				);
			}
		} catch {
			// ignore — keep default
		}
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		const root = document.documentElement;
		root.classList.toggle("dark", theme === "dark");
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch {
			// ignore
		}
	}, [theme, mounted]);

	const value = {
		theme,
		mounted,
		setTheme: (next) => setThemeState(next),
		toggleTheme: () => setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
	return ctx;
};
