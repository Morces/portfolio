"use client";

import React, { useState, useMemo } from "react";
import { Wrench, Layout, Server, Database, Cloud, Cpu, Code2, Search } from "lucide-react";
import { skillCategories } from "../data/portfolioData";
import { AnimatedSection } from "./AnimatedSection";

const categoryIcon = (name) => {
	switch (name) {
		case "Layout":
			return <Layout className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
		case "Server":
			return <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
		case "Database":
			return <Database className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
		case "Cloud":
			return <Cloud className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
		case "Cpu":
			return <Cpu className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
		case "Code":
			return <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
		default:
			return <Wrench className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
	}
};

export const Skills = () => {
	const [activeCategoryId, setActiveCategoryId] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");

	const filteredCategories = useMemo(() => {
		const query = searchQuery.toLowerCase().trim();
		return skillCategories
			.filter((cat) => activeCategoryId === "all" || cat.id === activeCategoryId)
			.map((cat) => {
				if (!query) return cat;
				return {
					...cat,
					skills: cat.skills.filter(
						(s) =>
							s.name.toLowerCase().includes(query) ||
							s.levelLabel.toLowerCase().includes(query),
					),
				};
			})
			.filter((cat) => cat.skills.length > 0);
	}, [activeCategoryId, searchQuery]);

	return (
		<section id="skills" className="py-20 border-b border-slate-200 dark:border-slate-900 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
					<div className="flex flex-col items-start space-y-2">
						<div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
							<Wrench className="w-4 h-4" />
							<span>Technical Toolkit</span>
						</div>
						<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
							Skills &amp; engineering stack
						</h2>
						<p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
							The languages, frameworks, and tools I work with — proficiency is a personal estimate to give a sense of depth.
						</p>
					</div>

					<div className="relative min-w-[220px] self-start md:self-auto">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
						<input
							type="text"
							placeholder="Search a skill (e.g. React, Node, Docker)..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-9 pr-3 py-1.5 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm dark:shadow-none transition-colors"
						/>
					</div>
				</div>

				<div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
					<button
						onClick={() => setActiveCategoryId("all")}
						className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
							activeCategoryId === "all"
								? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
								: "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none"
						}`}
					>
						All
					</button>
					{skillCategories.map((cat) => (
						<button
							key={cat.id}
							onClick={() => setActiveCategoryId(cat.id)}
							className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
								activeCategoryId === cat.id
									? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
									: "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none"
							}`}
						>
							{categoryIcon(cat.icon)}
							<span>{cat.title}</span>
						</button>
					))}
				</div>

				{filteredCategories.length === 0 ? (
					<div className="py-12 text-center bg-white dark:bg-slate-900/30 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
						<p className="text-xs text-slate-500 dark:text-slate-400">No skills matching &ldquo;{searchQuery}&rdquo;.</p>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{filteredCategories.map((category, idx) => (
							<AnimatedSection
								key={category.id}
								delayMs={(idx % 2) * 100}
								threshold={0.06}
								className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-sm dark:shadow-none transition-all duration-200 flex flex-col"
							>
								<div className="flex items-start justify-between gap-3 mb-2">
									<div className="flex items-center gap-2.5">
										<div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
											{categoryIcon(category.icon)}
										</div>
										<div>
											<h3 className="font-bold text-base text-slate-900 dark:text-white">{category.title}</h3>
											<span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
												{category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
											</span>
										</div>
									</div>
								</div>

								<p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">{category.description}</p>

								<div className="space-y-3.5">
									{category.skills.map((skill) => (
										<div key={skill.name} className="space-y-1.5">
											<div className="flex items-center justify-between text-xs">
												<div className="flex items-center gap-1.5">
													<span className="font-medium text-slate-800 dark:text-slate-200 font-mono">{skill.name}</span>
													{skill.featured && (
														<span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
															Primary
														</span>
													)}
												</div>
												<div className="flex items-center gap-2 text-[11px] font-mono">
													<span className="text-slate-500 dark:text-slate-400">{skill.years} yr{skill.years === 1 ? "" : "s"}</span>
													<span
														className={`px-1.5 py-0.5 rounded text-[10px] ${
															skill.levelLabel === "Expert"
																? "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60"
																: skill.levelLabel === "Advanced"
																	? "bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60"
																	: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent"
														}`}
													>
														{skill.levelLabel}
													</span>
												</div>
											</div>
											<div className="h-1.5 w-full bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800/80">
												<div
													className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full transition-all duration-500"
													style={{ width: `${skill.level}%` }}
												/>
											</div>
										</div>
									))}
								</div>
							</AnimatedSection>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Skills;
