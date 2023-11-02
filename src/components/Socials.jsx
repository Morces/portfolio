import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div>
      <div className="social__links">
        <a href="https://github.com/Morces" target="_blank" aria-label="Github">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/moseskarani/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/morces_c"
          target="_blank"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.instagram.com/morces_c/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <span></span>
      </div>
      <div className="email_id">
        <a target="_blank" href="mailto:karanim594@gmail.com">
          karanim594@gmail.com
        </a>
        <span></span>
      </div>
    </div>
  );
};

export default Socials;
