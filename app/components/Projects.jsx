"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
	FolderGit2,
	ExternalLink,
	Github,
	Search,
	SlidersHorizontal,
	ArrowUpRight,
	TrendingUp,
	Sparkles,
	Plus,
	ChevronUp,
} from "lucide-react";
import { projects } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import { AnimatedSection } from "./AnimatedSection";

const ProjectThumb = ({ project }) => {
	if (project.image) {
		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img
				src={project.image}
				alt={project.title}
				className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
			/>
		);
	}
	return (
		<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/15 via-slate-500/10 to-sky-400/15 dark:from-indigo-600/20 dark:via-slate-800/30 dark:to-sky-500/20">
			<span className="font-mono text-4xl font-bold text-slate-400 dark:text-slate-600 group-hover:scale-105 transition-transform duration-500">
				{project.title
					.split(" ")
					.map((w) => w[0])
					.join("")
					.slice(0, 3)}
			</span>
		</div>
	);
};

const INITIAL_COUNT = 6;
const STEP = 6;

export const Projects = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const [activeProject, setActiveProject] = useState(null);
	const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

	const categories = useMemo(
		() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
		[],
	);

	const filteredProjects = useMemo(() => {
		const query = searchQuery.toLowerCase().trim();
		return projects.filter((project) => {
			const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
			const matchesQuery =
				!query ||
				project.title.toLowerCase().includes(query) ||
				project.tagline.toLowerCase().includes(query) ||
				project.description.toLowerCase().includes(query) ||
				project.tags.some((t) => t.toLowerCase().includes(query));
			return matchesCategory && matchesQuery;
		});
	}, [selectedCategory, searchQuery]);

	// Collapse back to the initial set whenever the filter changes.
	useEffect(() => {
		setVisibleCount(INITIAL_COUNT);
	}, [selectedCategory, searchQuery]);

	const shownProjects = filteredProjects.slice(0, visibleCount);
	const canExpand = visibleCount < filteredProjects.length;
	const canCollapse = !canExpand && filteredProjects.length > INITIAL_COUNT;

	const handleViewMore = () =>
		setVisibleCount((c) => Math.min(c + STEP, filteredProjects.length));

	const handleViewLess = () => {
		setVisibleCount(INITIAL_COUNT);
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section id="projects" className="py-20 border-b border-slate-200 dark:border-slate-900 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
					<div className="flex flex-col items-start space-y-2">
						<div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
							<FolderGit2 className="w-4 h-4" />
							<span>Selected Work</span>
						</div>
						<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
							Projects &amp; products shipped
						</h2>
						<p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
							A selection of client platforms and products — several taken end to end, from architecture through to production.
						</p>
					</div>

					<div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none self-start md:self-auto">
						<span className="text-indigo-600 dark:text-indigo-400 font-bold">{shownProjects.length}</span>
						<span>of</span>
						<span className="text-slate-500 dark:text-slate-400">
							{filteredProjects.length}
							{selectedCategory === "All" && !searchQuery ? " projects" : " matches"}
						</span>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
					<div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
									selectedCategory === category
										? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
										: "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none"
								}`}
							>
								{category}
							</button>
						))}
					</div>

					<div className="relative min-w-[240px] sm:w-64">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
						<input
							type="text"
							placeholder="Search tech, stack, name..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-9 pr-3 py-1.5 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm dark:shadow-none transition-colors"
						/>
						{searchQuery && (
							<button
								onClick={() => setSearchQuery("")}
								className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-mono"
							>
								✕
							</button>
						)}
					</div>
				</div>

				{filteredProjects.length === 0 ? (
					<div className="py-16 text-center bg-white dark:bg-slate-900/30 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none">
						<SlidersHorizontal className="w-8 h-8 text-slate-400 mx-auto mb-3" />
						<h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">No projects found</h3>
						<p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
							Nothing matched your filters. Try clearing the search or choosing another category.
						</p>
						<button
							onClick={() => {
								setSelectedCategory("All");
								setSearchQuery("");
							}}
							className="mt-4 px-3.5 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
						>
							Reset filters
						</button>
					</div>
				) : (
				  <>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{shownProjects.map((project, idx) => (
							<AnimatedSection
								key={project.id}
								delayMs={(idx % 3) * 90}
								threshold={0.05}
								className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 shadow-sm dark:shadow-none overflow-hidden"
							>
								<div
									className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950 cursor-pointer"
									onClick={() => setActiveProject(project)}
								>
									<ProjectThumb project={project} />
									<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 dark:from-slate-950/90 via-slate-950/10 to-transparent" />

									<div className="absolute top-3 left-3 flex items-center gap-2">
										<span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-950/80 text-indigo-300 border border-slate-800 backdrop-blur-md">
											{project.category}
										</span>
										{project.featured && (
											<span className="px-2 py-1 rounded-md text-[11px] font-mono font-medium bg-amber-950/80 text-amber-300 border border-amber-800/60 backdrop-blur-md flex items-center gap-1">
												<Sparkles className="w-2.5 h-2.5" />
												Featured
											</span>
										)}
									</div>

									{/* <span className="absolute top-3 right-3 px-2 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-950/80 border border-slate-800 backdrop-blur-md">
										{project.year}
									</span> */}

									{project.metrics && project.metrics.length > 0 && (
										<div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-slate-950/85 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-slate-800">
											<span className="text-slate-400 flex items-center gap-1">
												<TrendingUp className="w-3 h-3 text-indigo-400" />
												{project.metrics[0].label}
											</span>
											<span className="font-bold text-indigo-300">{project.metrics[0].value}</span>
										</div>
									)}
								</div>

								<div className="p-5 flex-1 flex flex-col justify-between space-y-4">
									<div className="space-y-2">
										<h3
											onClick={() => setActiveProject(project)}
											className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors cursor-pointer flex items-center justify-between"
										>
											<span>{project.title}</span>
											<ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
										</h3>
										<p className="text-xs font-medium text-indigo-600 dark:text-indigo-300/80 line-clamp-1">{project.tagline}</p>
										<p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">{project.description}</p>
									</div>

									<div className="space-y-3 pt-2">
										<div className="flex flex-wrap gap-1.5">
											{project.tags.slice(0, 4).map((tag) => (
												<span
													key={tag}
													className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800"
												>
													{tag}
												</span>
											))}
											{project.tags.length > 4 && (
												<span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
													+{project.tags.length - 4}
												</span>
											)}
										</div>

										<div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800/80 text-xs">
											<button
												onClick={() => setActiveProject(project)}
												className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
											>
												View details →
											</button>

											<div className="flex items-center gap-2">
												{project.liveDemoUrl && (
													<a
														href={project.liveDemoUrl}
														target="_blank"
														rel="noreferrer"
														className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-800 rounded border border-slate-200 dark:border-slate-800 transition-colors"
														title="Live site"
													>
														<ExternalLink className="w-3.5 h-3.5" />
													</a>
												)}
												{project.githubUrl && (
													<a
														href={project.githubUrl}
														target="_blank"
														rel="noreferrer"
														className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-800 rounded border border-slate-200 dark:border-slate-800 transition-colors"
														title="Source code"
													>
														<Github className="w-3.5 h-3.5" />
													</a>
												)}
											</div>
										</div>
									</div>
								</div>
							</AnimatedSection>
						))}
					</div>

					{(canExpand || canCollapse) && (
						<div className="flex justify-center mt-10">
							<button
								onClick={canExpand ? handleViewMore : handleViewLess}
								className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none transition-all duration-200 hover:-translate-y-0.5"
							>
								{canExpand ? (
									<>
										<Plus className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
										<span>
											View more
											<span className="text-slate-400 dark:text-slate-500 font-mono ml-1.5">
												+{Math.min(STEP, filteredProjects.length - visibleCount)}
											</span>
										</span>
									</>
								) : (
									<>
										<ChevronUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:-translate-y-0.5 transition-transform" />
										<span>View less</span>
									</>
								)}
							</button>
						</div>
					)}
				  </>
				)}
			</div>

			<ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
		</section>
	);
};

export default Projects;
