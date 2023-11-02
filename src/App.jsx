import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Socials from "./components/Socials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Socials />
    </>
  );
}

export default App;
