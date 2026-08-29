"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, Github, CheckCircle2, Layers, BarChart3, UserCheck } from "lucide-react";

export const ProjectModal = ({ project, onClose }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		if (project) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [project, onClose]);

	if (!project || !mounted) return null;

	// Portal to <body> so the fixed overlay escapes the transformed
	// AnimatedSection ancestor and stays viewport-centered.
	return createPortal(
		<div
			role="dialog"
			aria-modal="true"
			aria-label={`${project.title} details`}
			className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/70 dark:bg-slate-950/85 backdrop-blur-md"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl shadow-slate-900/20 dark:shadow-black/80 flex flex-col overflow-hidden"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shrink-0">
					<div className="flex items-center gap-3">
						<span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
							{project.category}
						</span>
						<span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{project.year}</span>
					</div>
					<button
						onClick={onClose}
						aria-label="Close project details"
						className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700/60 transition-colors"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				<div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1">
					<div className="space-y-2">
						<h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{project.title}</h3>
						<p className="text-base sm:text-lg text-indigo-600 dark:text-indigo-300 font-medium">{project.tagline}</p>
					</div>

					{project.image && (
						<div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={project.image} alt={project.title} className="w-full h-full object-cover" />
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
							{project.role && (
								<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-100 font-mono bg-slate-950/80 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-800">
									<span className="flex items-center gap-1.5">
										<UserCheck className="w-3.5 h-3.5 text-indigo-400" />
										Role: {project.role}
									</span>
									<span>{project.year}</span>
								</div>
							)}
						</div>
					)}

					<div className="flex flex-wrap items-center gap-3">
						{project.liveDemoUrl && (
							<a
								href={project.liveDemoUrl}
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow-sm shadow-indigo-600/30 transition-colors"
							>
								<ExternalLink className="w-3.5 h-3.5" />
								<span>Visit live site</span>
							</a>
						)}
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
							>
								<Github className="w-3.5 h-3.5" />
								<span>Source repository</span>
							</a>
						)}
						{!project.image && project.role && (
							<span className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/60 rounded-lg border border-slate-200 dark:border-slate-800">
								<UserCheck className="w-3.5 h-3.5 text-indigo-500" />
								{project.role}
							</span>
						)}
					</div>

					{project.metrics && project.metrics.length > 0 && (
						<div className="space-y-3">
							<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
								<BarChart3 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
								<span>Impact &amp; benchmarks</span>
							</h4>
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
								{project.metrics.map((m, idx) => (
									<div
										key={idx}
										className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex flex-col"
									>
										<span className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-300">{m.value}</span>
										<span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{m.label}</span>
									</div>
								))}
							</div>
						</div>
					)}

					<div className="space-y-3">
						<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
							Overview
						</h4>
						<p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
							{project.fullDescription || project.description}
						</p>
					</div>

					{project.highlights && project.highlights.length > 0 && (
						<div className="space-y-3">
							<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
								<span>What I did</span>
							</h4>
							<ul className="space-y-2">
								{project.highlights.map((h, idx) => (
									<li
										key={idx}
										className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950/40 p-3 rounded-lg border border-slate-200 dark:border-slate-800/60"
									>
										<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-1.5 shrink-0" />
										<span>{h}</span>
									</li>
								))}
							</ul>
						</div>
					)}

					{project.architecture && project.architecture.length > 0 && (
						<div className="space-y-3">
							<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
								<Layers className="w-4 h-4 text-sky-600 dark:text-sky-400" />
								<span>Architecture notes</span>
							</h4>
							<div className="space-y-2">
								{project.architecture.map((arch, idx) => (
									<div
										key={idx}
										className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-mono bg-slate-50 dark:bg-slate-950 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800"
									>
										<span className="text-indigo-600 dark:text-indigo-400 font-bold">0{idx + 1}.</span>
										<span>{arch}</span>
									</div>
								))}
							</div>
						</div>
					)}

					<div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
						<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
							Stack &amp; tooling
						</h4>
						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.body,
	);
};

export default ProjectModal;
