import {
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  sass,
  git,
  threejs,
  AnimationLoginForm,
  Bondi,
  CurdApp,
  GithupRepo,
  MemoryGame,
  Portfolio,
  QuizApp,
  specialDesignJs,
  todoList,
  Kasper,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: sass,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];


const projects = [
   {
    name: "Todo App",
    description:
      "you can add name and age of person and can delete it ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: todoList,
    source_code_link: "https://github.com/mohamed1-1137/todo-App",
    liveDemo_Link:"https://mohamed1-1137.github.io/todo-App/"
  },
  {
    name: "Course List",
    description:
      "Course Note you can add course ,edit and delete it.",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: CurdApp,
    source_code_link: "https://github.com/mohamed1-1137/Curd-App",
    liveDemo_Link:"https://mohamed1-1137.github.io/Curd-App/"
  },
  {
    name: "Portfolio",
    description:
      "It is a portfolio website for learn it responsive for all devices, it has part to the testimonials,video to the owner of the portfolio ,filter the projects",
    tags: [
      {
        name: "Sass",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/mohamed1-1137/protfolio-website-using-bootstrap-and-sass",
    liveDemo_Link:"https://mohamed1-1137.github.io/protfolio-website-using-bootstrap-and-sass/"
  },
  {
    name: "Bondi",
    description:
      "Simple theme responsive for all devices build it to learn how to user booststrap with html and css ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      
    ],
    image: Bondi,
    source_code_link: "https://github.com/mohamed1-1137/Bodi-",
    liveDemo_Link:"https://mohamed1-1137.github.io/Bodi-/"
  },
  {
    name: "Special Design",
    description:
      "Landing page all funcitons and animaiton in it creacted with pure javascript have dashbord to controrl the color ,font of the site ,dark and light theme...etc . Responsive of all devices ",
    tags: [
      {
        name: "Html",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: specialDesignJs,
    source_code_link: "https://github.com/mohamed1-1137/Special-Template-Js",
    liveDemo_Link:"https://mohamed1-1137.github.io/Special-Template-Js/#footer"
  },
  {
    name: "Kasper",
    description:
      "Attractive Design for landing page ",
    tags: [
      {
        name: "Html",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      
    ],
    image: Kasper,
    source_code_link: "https://github.com/mohamed1-1137/Kasper",
    liveDemo_Link:"https://mohamed1-1137.github.io/Kasper/html.html"
  },
  {
    name: "Github Repo",
    description:
      "Just write the githup user name you want to see the repoes of it mnumber of stars in the repo you cand visit it in the githup .the most store contain stars get it a red star,you can move between the githup usernames by left and right arrows ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },
    ],
    image: GithupRepo,
    source_code_link: "https://github.com/mohamed1-1137/github-repo",
    liveDemo_Link:"https://mohamed1-1137.github.io/github-repo/"
  },
  {
    name: "Memory Game",
    description:
      "simple memory game. just try it",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      
    ],
    image: MemoryGame,
    source_code_link: "https://github.com/mohamed1-1137/Memory-game",
    liveDemo_Link:"https://mohamed1-1137.github.io/Memory-game/"
  },
  {
    name: "Animation Login Form",
    description:
      "Animation login form have a extecive animation ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      
    ],
    image: AnimationLoginForm,
    source_code_link: "https://github.com/mohamed1-1137/Animation-login-form",
    liveDemo_Link:"https://mohamed1-1137.github.io/Animation-login-form/"
  },
  {
    name: "Quiz App",
    description:
      "simple quiz app to text your self in html have a timer and give you the result if you pass or faild ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      
    ],
    image: QuizApp,
    source_code_link: "https://github.com/mohamed1-1137/quiz-app",
    liveDemo_Link:"https://mohamed1-1137.github.io/quiz-app/"
  },

];

export { services, technologies, projects };
