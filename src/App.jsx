import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Socials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
