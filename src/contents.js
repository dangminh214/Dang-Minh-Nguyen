import avatar from "./assets/images/avatar.jpg";
import kaggle from "./assets/images/Projects/kaggle.png";
/* import steamFlipCalcImg from "./assets/images/Projects/steamflipcalc.png";
import projectMangamentImg from "./assets/images/Projects/projectmanagment.png";
import countDownChanllengeImg from "./assets/images/Projects/countdownchallenge.png";
import tourImg from "./assets/images/Projects/tours.png"; */
const logotext = "NGUYEN";
const meta = {
  title: "Dang Minh Nguyen",
  description:
    "I’m Dang Minh Nguyen - Computer Science Student, currently studying in Darmstadt University of applied science, Germany",
};

const introdata = {
  title: "I’m Dang Minh Nguyen",
  animated: {
    first: "Always ready to learn",
    second: "I am ready for new challenges",
    third:
      "My dream is working as a Machine learning engineer",
  },
  description:
    "A passionate computer science student at Darmstadt University of Applied Science",
  your_img_url: avatar,
};

const dataabout = {
  title: "Some words about me ",
  aboutme:
    "I am a passionate student with coding. I always want to learn new techniques which can be applied in my projects. In my free time I also practice with Machine Learning in Kaggle and develope some personal machine learning. In summary, I am a willing student who is passionate about machine learning. ",
};
const worktimeline = [
  {
    jobtitle: "Working Student Software Engineer",
    where: "ALTER | HTV Gmbh",
    date: "2023 - 2024",
    technicalStack: "Javascript, MySQL, FontmaticUI",
    description:
      "As a working student, I have responsibilities to competently perform the role of a developer, specializing in database administration and the development of macros and front-end business logic.",
  },
  {
    jobtitle: "Internship",
    where: "Continental Engineering Service - Continental AG",
    date: "10/2024 - 03/2025",
    technicalStack: "Javascript, Python, Rust, HTML, CSS",
    description:
      "I have responsibilities to implement a full stack single web application, which demonstrates data from CANcase (Control Area Network), a device in Automation Field. I also implement a python script to simulate the Daten in CANcase",
  },
];

const skills = [
  {
    ProgrammingLanguages: ["Javascript", "Typescript", "Python", "Java", "Rust", "HTML", "CSS", "Rust"],
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
    Languages: ["German (C1)", "English"],
  },
];

const dataportfolio = [
  {
    name: "Kaggle Projects",
    img: kaggle,
    description:
      "Different solved problems in Kaggle",
    /* link: "http://steamflip.fyi/", */
    description1: "Bike Sharing Demand, ", 
    description2: "Diabetes Prediction", 
    description3: "Digits Recognition, MNIST Fashion Recognition, PaperRockScissor Recognition",
    description4: "House Price Prediction", 
    description5: "Rohlik Order Forecasting Challenge",
    description6: "Titanic Prediction, Titanic Spaceship Prediction",
    description7: "Use of various machine learning algorithms such as Multi-Layer Perceptron (MLP) and Random Forest Regression, Linear Regression, Binary Classification for pattern recognition and prediction.",
    technicalStack:
      "Technical Stack: MLP, Pandas, Tensorflow, CNN, Numpy, Jupyter Notebook, Scikit-learn",
    linkGithub: "https://github.com/dangminh214/Kaggle-Projects",
  },
  /* {
    name: "SteamFlipCalc",
    img: steamFlipCalcImg,
    description:
      "A fullstack group project of 4 at the university. Build a price comparison website so users can find the right game items ",
    link: "http://steamflip.fyi/",
    technicalStack:
      "Technical Stack: HTML, CSS, Typescript, ReactJS, NodeJS, MongoDB",
    linkGithub: "https://github.com/quantanhoi/SteamFlipCalc",
  },
  {
    name: "Tour Website",
    img: tourImg,
    description:
      "My fullstack project in module Advanced Web Developement at HDa. Development of a tour website with destination search function and CRUD system.",
    link: "#",
    technicalStack:
      "Technical Stack: ReactJS, NodeJS, TypeScript, MongoDB, Docker, HTML, CSS",
    linkGithub: "https://github.com/dangminh214/Tour-Website-Fullstack",
  },
  {
    name: "Project Managment App",
    img: projectMangamentImg,
    description:
      "Efficient project management as well as the assignment and tracking of corresponding tasks.",
    link: "https://project-management-app-smoky.vercel.app/",
    technicalStack: "Technical Stack: Javascript, ReactJS, TailwindCSS, Vite",
    linkGithub: "https://github.com/dangminh214/Project-Management-App",
  },
  {
    name: "Count Down Challenge",
    img: countDownChanllengeImg,
    description: "Challenge to stop the countdown within an exact time period.",
    link: "https://countdown-challenge-website-using-react-refs-and-portal.vercel.app/",
    technicalStack: " Technical Stack: ReactJS, HTML, CSS, Vite",
    linkGithub:
      "https://github.com/dangminh214/Countdown-Challenge-Website-using-React-Refs-and-Portal-",
  }, */
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
