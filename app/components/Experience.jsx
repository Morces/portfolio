"use client";

import React from "react";
import {
	Briefcase,
	GraduationCap,
	Calendar,
	MapPin,
	Building2,
	CheckCircle2,
	Award,
	BadgeCheck,
} from "lucide-react";
import { experiences, education, certificates } from "../data/portfolioData";
import { AnimatedSection } from "./AnimatedSection";

export const Experience = () => {
	return (
		<section id="experience" className="py-20 border-b border-slate-200 dark:border-slate-900 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-start space-y-2 mb-12">
					<div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
						<Briefcase className="w-4 h-4" />
						<span>Track Record</span>
					</div>
					<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
						Experience &amp; education
					</h2>
					<p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
						Roles across agencies and product teams, and the training that started it.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Timeline */}
					<div className="lg:col-span-8 space-y-8">
						<div className="relative pl-6 sm:pl-8 border-l border-slate-300 dark:border-slate-800 space-y-10">
							{experiences.map((exp, idx) => (
								<AnimatedSection key={exp.id} delayMs={idx * 80} threshold={0.08} className="relative group">
									<div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-indigo-500 group-hover:border-indigo-600 dark:group-hover:border-indigo-400 group-hover:scale-110 transition-all duration-200 shadow-sm" />

									<div className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-sm dark:shadow-none transition-all duration-200 space-y-4">
										<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
											<div>
												<h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
												<div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-300 font-medium mt-0.5">
													<Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
													<span>{exp.company}</span>
													<span className="text-slate-400 dark:text-slate-500">•</span>
													<span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{exp.type}</span>
												</div>
											</div>

											<div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400 font-mono self-start sm:self-auto bg-slate-50 dark:bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
												<div className="flex items-center gap-1.5">
													<Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
													<span>{exp.period}</span>
												</div>
												<span className="text-slate-300 dark:text-slate-600">|</span>
												<div className="flex items-center gap-1.5">
													<MapPin className="w-3.5 h-3.5 text-slate-400" />
													<span>{exp.location}</span>
												</div>
											</div>
										</div>

										<p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>

										{exp.achievements.length > 0 && (
											<div className="space-y-2 pt-1">
												<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
													Key contributions
												</h4>
												<ul className="space-y-2">
													{exp.achievements.map((ach, aIdx) => (
														<li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
															<CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
															<span className="leading-snug">{ach}</span>
														</li>
													))}
												</ul>
											</div>
										)}

										{exp.technologies.length > 0 && (
											<div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800/80">
												{exp.technologies.map((tech) => (
													<span
														key={tech}
														className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
													>
														{tech}
													</span>
												))}
											</div>
										)}
									</div>
								</AnimatedSection>
							))}
						</div>
					</div>

					{/* Education + Certificates */}
					<div className="lg:col-span-4 space-y-6">
						<div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
							<GraduationCap className="w-4 h-4" />
							<span>Education</span>
						</div>

						<div className="space-y-4">
							{education.map((edu, idx) => (
								<AnimatedSection
									key={edu.id}
									delayMs={idx * 100}
									threshold={0.08}
									className="p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-3"
								>
									<div className="space-y-1">
										<span className="text-xs font-mono text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800/60 inline-block">
											{edu.period}
										</span>
										<h4 className="text-base font-bold text-slate-900 dark:text-white pt-1">{edu.degree}</h4>
										<p className="text-xs text-slate-600 dark:text-slate-300 font-medium flex flex-wrap items-center gap-1.5">
											<span>{edu.institution}</span>
											<span className="text-slate-400 dark:text-slate-500">•</span>
											<span className="text-slate-500 dark:text-slate-400">{edu.location}</span>
										</p>
									</div>

									{edu.honors && (
										<div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-mono bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800/40">
											<Award className="w-3.5 h-3.5" />
											<span>{edu.honors}</span>
										</div>
									)}

									{edu.activities && edu.activities.length > 0 && (
										<ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800/80">
											{edu.activities.map((act, i) => (
												<li key={i} className="flex items-start gap-1.5">
													<span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
													<span>{act}</span>
												</li>
											))}
										</ul>
									)}
								</AnimatedSection>
							))}

							{certificates.length > 0 && (
								<div className="p-5 rounded-2xl bg-gradient-to-b from-indigo-50 to-slate-50 dark:from-indigo-950/30 dark:to-slate-900/40 border border-indigo-200 dark:border-indigo-900/40 shadow-sm dark:shadow-none space-y-3">
									<h4 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
										<BadgeCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
										Certificates
									</h4>
									<ul className="space-y-2.5">
										{certificates.map((cert) => (
											<li key={cert.id} className="text-xs text-slate-600 dark:text-slate-300">
												<span className="font-medium text-slate-800 dark:text-slate-200">{cert.title}</span>
												<span className="block text-[11px] font-mono text-slate-500 dark:text-slate-400">
													{cert.issuer} · {cert.period}
												</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
