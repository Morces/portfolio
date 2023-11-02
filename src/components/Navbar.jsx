import React, { useState } from "react";
import "../App.css";
import useScroll from "../hooks/useScroll";

const Navbar = () => {
  const scrollPostion = useScroll();
  const [activeLink, setActiveLink] = useState("home");
  return (
    <div>
      <nav className={`navbar active ${scrollPostion > 200 ? "scroll" : ""}`}>
        <ul className="nav_list">
          <li>
            <a
              href="/"
              className={`nav__link ${activeLink === "home" ? "active" : ""} scroll-smooth`}
              onClick={() => setActiveLink("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav__link ${activeLink === "about" ? "active" : ""} scroll-smooth`}
              onClick={() => setActiveLink("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={`nav__link ${
                activeLink === "portfolio" ? "active" : ""
              } scroll-smooth`}
              onClick={() => setActiveLink("portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav__link ${
                activeLink === "contact" ? "active" : ""
              } scroll-smooth`}
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
