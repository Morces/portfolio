import React from "react";
import { BsChevronDown, BsStars } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="intro"
      className="bg-cover bg-fixed min-h-screen w-full flex items-center justify-center relative text-center"
    >
      <div className="intro-overlay absolute top-0 left-0 w-full h-full"></div>
      <div className="intro-content text-white">
        <div className="container relative">
          <h5 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase mb-4">
            Hi! 👋
          </h5>
          <p className="absolute top-[38%] right-[9%] star1">
            <BsStars className="text-5xl text-[#08A7E8]" />
          </p>
          <p className="absolute top-[55%] left-[10%] star2">
            <BsStars className="text-5xl text-[#08A7E8]" />
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium leading-tight mb-8">
            <Typewriter
              words={["I'm Moses Karani."]}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={80}
              delaySpeed={5000}
              loop={true}
            />
          </h1>
          <p className="text-lg sm:text-xl uppercase mb-12">
            Software Engineer
          </p>
          <a
            href="#about"
            className="scroll-smooth absolute bottom-0 cursor-pointer text-lg text-center sm:text-xl font-semibold py-4 px-6"
          >
            {" "}
            <p className="rounded-full border p-4 bg-[#08A7E8] animate-pulse">
              <BsChevronDown />
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
