import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Socials />
      <Contact />
      <Footer />
    </div>
  );
}
