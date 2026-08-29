import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatedSection } from "./components/AnimatedSection";

export default function Home() {
	return (
		<ThemeProvider>
			<div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
				<Navbar />
				<main>
					<Hero />
					<AnimatedSection>
						<About />
					</AnimatedSection>
					<AnimatedSection>
						<Projects />
					</AnimatedSection>
					<AnimatedSection>
						<Skills />
					</AnimatedSection>
					<AnimatedSection>
						<Experience />
					</AnimatedSection>
					<AnimatedSection>
						<Contact />
					</AnimatedSection>
				</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
}
