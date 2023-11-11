import akan from "../assets/portfolio/akan.png";
import awards from "../assets/portfolio/awards.png";
import burger from "../assets/portfolio/burger.png";
import github from "../assets/portfolio/github.png";
import homepage from "../assets/portfolio/homepage.png";
import mkombozi from "../assets/portfolio/mkombozi.png";
import tulia from "../assets/portfolio/tulia.png";
import todo from "../assets/portfolio/todo.png";
import cart from "../assets/portfolio/cart.png";
import hood from "../assets/portfolio/hood.png";

export const portfolioData = [
  {
    id: 109,
    img: todo,
    title: "To Do App",
    description:
      "This is a To-Do App that helps you write down tasks to be done on a certain day.",
    techStack: ["HTML", "React JS", "CSS"],
    liveLink: "https://morcestodolist.netlify.app",
    repoLink: "https://github.com/Morces/todo.git",
    ariaLabel: "To Do App",
  },
  {
    id: 115,
    img: cart,
    title: "Add to cart",
    description:
      "This is a App that allows you to add items to your virtual cart, assuming you are doing shopping",
    techStack: ["HTML", "CSS", "JS"],
    liveLink: "https://github.com/Morces/to-cart.git",
    repoLink: "https://github.com/Morces/to-cart.git",
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
    repoLink: "https://github.com/Morces/akan-name-generator.git",
    ariaLabel: "Akan Name Generator",
  },
  {
    id: 107,
    img: burger,
    title: "Burger Palace Restaurant",
    description: "This is a landing page of a burger restaurant.",
    techStack: ["HTML", "CSS", "JS"],
    liveLink: "https://burger-pa-la-ce.netlify.app/",
    repoLink: "https://github.com/Morces/burger-palace-project.git",
    ariaLabel: "Burger Palace Restaurant",
  },
  {
    id: 113,
    img: hood,
    title: "The Neighborhood",
    description:
      "This is a web application that allows you to be in the loop about everything happening in your neighborhood. From contact information of different handyman to meeting announcements or even alerts.",
    techStack: ["HTML", "CSS", "JS", "Django"],
    liveLink: "",
    repoLink: "https://github.com/Morces/the-neighborhood.git",
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
    repoLink: "https://github.com/Morces/github-search.git",
    ariaLabel: "Github Search",
  },

  {
    id: 108,
    img: tulia,
    title: "Property management website",
    description:
      "This website is built using Tailwind CSS with a beautiful UI. It is the landing page of a property management system",
    techStack: ["HTML", "React JS", "Tailwind CSS"],
    liveLink: "",
    repoLink: "",
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
    repoLink: "https://github.com/Morces/mi-awwards.git",
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
