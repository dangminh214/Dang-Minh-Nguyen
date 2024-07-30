import avatar from "./assets/images/avatar.jpg";
import steamFlipCalcImg from "./assets/images/Projects/steamflipcalc.png";
import projectMangamentImg from "./assets/images/Projects/projectmanagment.png";
import countDownChanllengeImg from "./assets/images/Projects/countdownchallenge.png";
import tourImg from "./assets/images/Projects/tours.png";
const logotext = "NGUYEN";
const meta = {
  title: "Dang Minh Nguyen",
  description:
    "I’m Dang Minh Nguyen - Computer Science Student, currently studying in Darmstadt University of applied science, Germany",
};

const introdata = {
  title: "I’m Dang Minh Nguyen",
  animated: {
    first: "I love coding",
    second: "I am trying to create awesomes websites",
    third: "My dream is working as a fullstack developer",
  },
  description:
    "A passionate computer science student at Darmstadt University of Applied Science",
  your_img_url: avatar,
};

const dataabout = {
  title: "Some words about me ",
  aboutme:
    "I am a passionate student with coding. I always want to learn new techniques which can be applied in my projects. In my free time I also practice with Machine Learning in Kaggle and develope some personal machine learning and fullstack projects as well. In summary, I am a willing student who is passionate about machine learning and web development. ",
};
const worktimeline = [
  {
    jobtitle: "Working Student Frontend",
    where: "ALTER | HTV Gmbh",
    date: "2023 - 2024",
    technicalStack: "Javascript, MySQL, FontmaticUI",
    description:
      "As a working student, I have responsibilities to competently perform the role of a developer, specializing in database administration and the development of macros and front-end business logic.",
  },
];

const skills = [
  {
    ProgrammingLanguages: ["Javascript", "Typescript", "Python", "Java"],
  },
  {
    Framework: ["ReactJS", "NodeJS", "TensorFlow"],
  },
  {
    Database: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    Libraries: ["Matplotlib", "Scitkit - Learn", "Numpy", "Pandas"],
  },
  {
    VersionControl: ["Git", "Github"],
  },
  {
    Others: ["Postman", "Docker", "Jupyter Notebook"],
  },
  {
    Languages: ["English", "German (C1)"],
  },
];

const dataportfolio = [
  {
    img: tourImg,
    description:
      "A project in module Advanced Web Developement at HDa. Development of a tour website with destination search function and CRUD system.",
    link: "#",
    technicalStack:
      "Technical Stack: ReactJS, NodeJS, TypeScript, MongoDB, Docker, HTML, CSS",
  },
  {
    img: [steamFlipCalcImg],
    description: "A Fullstack 4 people group project at HDa.",
    link: "http://steamflip.fyi/",
    technicalStack:
      "Technical Stack: HTML, CSS,Typescript, ReactJS, NodeJS, MongoDB",
  },
  {
    img: projectMangamentImg,
    description:
      "Efficient project management as well as the assignment and tracking of corresponding tasks.",
    link: "https://project-management-app-smoky.vercel.app/",
    technicalStack: "Technical stack: Javascript, ReactJS, TailwindCSS, Vite",
  },
  {
    img: countDownChanllengeImg,
    description:
      "Heausforderung innerhalb einer exakten Zeitspanne den Countdown zu stoppen.",
    link: "https://countdown-challenge-website-using-react-refs-and-portal.vercel.app/",
    technicalStack: " Technical Stack: ReactJS, HTML, CSS, Vite",
  },
];

const contactConfig = {
  YOUR_EMAIL: "dangminh214@gmail.com",
  YOUR_FONE: "+491786175110",
  description: "Always ready for your messages",
};

const socialprofils = {
  github: "https://github.com/dangminh214",
  linkedin: "https://www.linkedin.com/in/dang-minh-nguyen-b61892155/",
  kaggle: "https://www.kaggle.com/dangminh214",
  email:
    "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnSlSmfVbdGlGhDmHmDtCPGRcgNhcrwFmhhQZzBcNhdqwDWpbWwPDrhdktNBJjClJFvKn",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
