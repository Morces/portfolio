import akan from "../assets/portfolio/akan.png";
import awards from "../assets/portfolio/awards.png";
import jobs from "../assets/portfolio/mobile.png";
import github from "../assets/portfolio/github.png";
import homepage from "../assets/portfolio/homepage.png";
import mkombozi from "../assets/portfolio/mkombozi.png";
import tulia from "../assets/portfolio/tulia.png";
import todo from "../assets/portfolio/todo.png";
import cart from "../assets/portfolio/cart.png";
import hood from "../assets/portfolio/hood.png";
import sms from "../assets/portfolio/schoolarprime.png";

export const portfolioData = [
  {
    id: 100,
    img: sms,
    title: "SMS - Schoolar Prime",
    description:
      "This is a School Management System. It incorporates all the school activites, eg Administration, Student management, finance, e.t.c",
    techStack: ["HTML", "React JS", "CSS", "Django"],
    liveLink: "https://schoolarprime.netlify.app/",
    repoLink: "https://github.com/Morces/sms",
    ariaLabel: "Schoolar Prime",
  },
  {
    id: 109,
    img: todo,
    title: "To Do App",
    description:
      "This is a To-Do App that helps you write down tasks to be done on a certain day.",
    techStack: ["HTML", "React JS", "CSS"],
    liveLink: "https://morcestodolist.netlify.app",
    repoLink: "https://github.com/Morces/todo",
    ariaLabel: "To Do App",
  },

  {
    id: 115,
    img: cart,
    title: "Add to cart",
    description:
      "This is a App that allows you to add items to your virtual cart, assuming you are doing shopping",
    techStack: ["HTML", "CSS", "JS"],
    liveLink: "https://add-t0-car7.netlify.app",
    repoLink: "https://github.com/Morces/to-cart",
    ariaLabel: "Add to cart",
  },
  {
    id: 102,
    img: akan,
    title: "Akan Name Generator",
    description:
      "This web application allows users to view their Akan names by inputting their dates of birth. Akan names are Ghanian names that are given to people depending on the day of the week they were born.",
    techStack: ["HTML", "CSS", "JS"],
    liveLink: "https://morces.netlify.app/",
    repoLink: "https://github.com/Morces/akan-name-generator",
    ariaLabel: "Akan Name Generator",
  },
  {
    id: 107,
    img: jobs,
    title: "Jobs",
    description:
      "This is a mobile application that enables people seeking employment to come and search for the job.",
    techStack: ["React Native", "Axios", "Expo"],
    liveLink: "",
    repoLink: "https://github.com/Morces/jobs",
    ariaLabel: "Jobs",
  },
  {
    id: 113,
    img: hood,
    title: "The Neighborhood",
    description:
      "This is a web application that allows you to be in the loop about everything happening in your neighborhood. From contact information of different handyman to meeting announcements or even alerts.",
    techStack: ["HTML", "CSS", "JS", "Django"],
    liveLink: "",
    repoLink: "https://github.com/Morces/the-neighborhood",
    ariaLabel: "The Neighborhood",
  },
  {
    id: 111,
    img: github,
    title: "Github Search",
    description:
      "This project was generated with Angular CLI version 13.3.0. The purpose of this website is to enable users to search for their github usernames and repositories and it displays the for them.",
    techStack: ["HTML", "CSS", "JS", "Angular"],
    liveLink: "https://morces.github.io/github-search/",
    repoLink: "https://github.com/Morces/github-search",
    ariaLabel: "Github Search",
  },

  {
    id: 108,
    img: tulia,
    title: "Property management website",
    description:
      "This website is built using Tailwind CSS with a beautiful UI. It is the landing page of a property management system",
    techStack: ["HTML", "React JS", "Tailwind CSS"],
    liveLink: "https://tuliaresidency.netlify.app",
    repoLink: "https://github.com/Morces/tuliav2",
    ariaLabel: "Property management website",
  },
  {
    id: 101,
    img: awards,
    title: "Awwwards Website Clone",
    description:
      "This is a clone of Awwward Webiste. I cloned the UI with some amazing features.",
    techStack: ["HTML", "CSS", "JS"],
    liveLink: "",
    repoLink: "https://github.com/Morces/mi-awwards",
    ariaLabel: "Awwwards Website Clone",
  },

  {
    id: 104,
    img: mkombozi,
    title: "Mkombozi Healthcare Website",
    description: "This is the landing page of a Tanzanian hospital.",
    techStack: ["HTML", "CSS", "React JS"],
    liveLink: "https://mkombozihealthcare.co.tz",
    repoLink: "",
    ariaLabel: "Mkombozi Healthcare Website",
  },
];
