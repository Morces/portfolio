import React from "react";

const Hero = () => {
  return (
    <section
      id="intro"
      className="bg-cover bg-fixed min-h-screen w-full flex items-center justify-center relative text-center"
    >
      <div className="intro-overlay absolute top-0 left-0 w-full h-full"></div>
      <div className="intro-content text-white">
        <div className="container">
          <h5 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase mb-4">
            Hello, World.
          </h5>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium leading-tight mb-8">
            I'm Moses Karani.
          </h1>
          <p className="text-lg sm:text-xl uppercase mb-12">
            Software Engineer
          </p>
          <a
            href="#about"
            className="btn btn-primary text-lg sm:text-xl font-semibold py-4 px-6"
          >
            More About Me
          </a>
        </div>
      </div>
      <ul className="intro-social absolute bottom-16 left-0 w-full text-4xl">
        <li className="inline mx-4">
          <a
            href="https://github.com/Morces"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="inline mx-4">
          <a
            href="https://www.linkedin.com/in/moseskarani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="inline mx-4">
          <a
            href="https://twitter.com/morces_c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
