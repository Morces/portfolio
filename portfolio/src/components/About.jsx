import React from "react";
import skills from "../data/skills";
import resume from "../assets/Moses Karani.pdf";

const About = () => {
  return (
    <div id="about" className="containter pt-[10%] mb-[10%] ">
      <h3 className="text-3xl md:text-xl sm:text-xl uppercase font-medium text-center text-[#08A7E8]">
        About Me
      </h3>
      <h4 className="text-4xl font-medium text-center mt-6 md:text-xl sm:text-xl">
        Let me Introduce myself
      </h4>
      <p className="myself mt-10 w-3/5 max-md:w-4/5 max-sm:w-4/5 m-auto text-xl text-[#888888] text-justify leading-10">
        I am a passionate, self driven and ambitious software engineer with an
        addiction to solving problems. My hobbies are coding, photography and
        hiking. While I'm not doing the above, you will find me watching tech
        documentaries or doing research on different technologies.
      </p>
      <div className="w-3/5 m-auto mt-10 max-md:w-4/5 max-sm:w-4/5 space-y-5">
        <h3 className="uppercase font-semibold text-xl ">My tech stack</h3>
        <p className="mt-4 text-[#888888] text-xl">
          Over the years I have managed to master the following technical skills
        </p>
        <div className="about__skills_grid">
          {skills.map((skill) => (
            <div key={skill.id} className="about__skill">
              <div className="skill_img">
                <img src={skill.img} alt="skill-img" />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <div className="w-3/5 m-auto max-md:w-4/5 max-sm:w-4/5">
          <div className="max-md:11/12 max-sm:w-11/12 m-auto flex justify-between max-sm:flex-col max-md:flex-col gap-4 mt-10">
            <a
              href="mailto:karanim594@mail.com"
              className="flex justify-center items-center font-medium text-white py-3 px-4 bg-[#08A7E8] rounded-[30px]"
            >
              Hire Me
            </a>
            <a
              href={resume}
              target="_blank"
              className="flex justify-center text-white font-medium items-center py-3 px-4 bg-[#08A7E8] rounded-[30px]"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
