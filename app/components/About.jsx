"use client";

import React from "react";
import {
	Layers,
	ShieldCheck,
	Zap,
	Activity,
	Code2,
	Terminal,
	Sparkles,
	Award,
	Globe,
	Compass,
} from "lucide-react";
import { profile } from "../data/portfolioData";

const principleIcon = (name) => {
	switch (name) {
		case "Layers":
			return <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
		case "ShieldCheck":
			return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
		case "Zap":
			return <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
		case "Activity":
			return <Activity className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
		default:
			return <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
	}
};

const factIcon = [Terminal, Globe, Award];
const factTint = [
	"bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400",
	"bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400",
	"bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800/40 text-sky-600 dark:text-sky-400",
];

export const About = () => {
	return (
		<section id="about" className="py-20 border-b border-slate-200 dark:border-slate-900 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-start space-y-2 mb-12">
					<div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
						<Compass className="w-4 h-4" />
						<span>Biography &amp; Background</span>
					</div>
					<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
						Engineering with intent &amp; craft
					</h2>
					<p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
						A look at how I work, what I care about, and the path that got me here.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					<div className="lg:col-span-7 space-y-6">
						<div className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/90 shadow-sm space-y-4">
							<p className="text-slate-900 dark:text-white font-medium text-lg sm:text-xl leading-snug">
								&ldquo;{profile.bioIntro}&rdquo;
							</p>
							{profile.bioParagraphs.map((para, idx) => (
								<p key={idx} className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
									{para}
								</p>
							))}
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							{profile.quickFacts.map((fact, idx) => {
								const Icon = factIcon[idx % factIcon.length];
								return (
									<div
										key={fact.label}
										className="p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex items-start gap-3"
									>
										<div className={`p-2 rounded-lg border mt-0.5 ${factTint[idx % factTint.length]}`}>
											<Icon className="w-4 h-4" />
										</div>
										<div>
											<h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200">{fact.label}</h4>
											<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{fact.value}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className="lg:col-span-5 space-y-4">
						<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-2 flex items-center gap-2">
							<Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
							<span>How I Approach the Work</span>
						</h3>
						<div className="space-y-3.5">
							{profile.engineeringPrinciples.map((principle, idx) => (
								<div
									key={idx}
									className="p-4 rounded-xl bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none transition-all duration-200"
								>
									<div className="flex items-center gap-3 mb-1.5">
										<div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
											{principleIcon(principle.icon)}
										</div>
										<h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">{principle.title}</h4>
									</div>
									<p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-9">
										{principle.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
