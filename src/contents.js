import avatar from "./assets/images/avatar.jpg";
import kaggle from "./assets/images/Projects/kaggle.png";
import paperYolo from "./assets/images/Projects/paper-yolo.png"
import chatbot from "./assets/images/Projects/chatbot.png"

const logotext = "NGUYEN";
const meta = {
  title: "Dang Minh Nguyen",
  description:
    "I’m Dang Minh Nguyen - Computer Science Student, currently studying in Technical University Darmstadt, Germany",
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
    "A passionate computer science student at Technical University Darmstadt, Germany",
  your_img_url: avatar,
};

const dataabout = {
  title: "Some words about me ",
  aboutme:
    "I am a passionate student with coding. I always want to learn new techniques which can be applied in my projects. In my free time I also practice with Machine Learning in Kaggle and implement some personal machine learning projects. In summary, I am a willing student who is passionate about machine learning, specially computer vision. ",
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
      "I have responsibilities to implement a full stack single web application, which demonstrates data from CANcase (Control Area Network), a device in Automation Field. I also implement a python script to simulate the Daten in CANcase. I also implement a python script to simulate the CAN Data for the website",
  },
];

const skills = [
  {
    ProgrammingLanguages: ["Javascript", "Typescript", "Python", "Java", "Rust", "HTML", "CSS", "Rust", "C++"],
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
    Languages: ["German (C1)", "English", "Vietnamese(Native Language)"],
  },
];

const dataportfolio = [
  {
    name: "Kaggle Machine Learning Projects",
    img: kaggle,
    description:
      "Different solved problems in Kaggle",
    description0: "MNIST Fashion Recognition", 
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
  {
    name: "Rock Paper Scissor Hand Gesture Recognition",
    img: paperYolo,
    description:
      "Real Time Hand Gesture Recognition using YOLOv11 to detect and classify hand gestures in Rock Paper Scissor using OpenCV and Webcam",
    description0: "Detects hand gestures on real time", 
    description1: "Training and apply YOLOv11 on specific dataset", 
    technicalStack:
      "Technical Stack: Python, OpenCV2, YOLOv11, Jupyter Notebook",
    linkGithub: "https://github.com/dangminh214/Scissors-Paper-Rock-Gestures-Detection-YOLO",
  },
  {
    name: "Ollama Chatbot",
    img: chatbot,
    description:
      "A Chatbot using RAG (Reinforcement Agents) and Langchain Splitter to answer questions about a given context.",
    description0: "Application of AI technologies to create a chatbot based on input data", 
    description1: "Application of RAG, Langchain Splitter and Embedding for data processing for NLP", 
    technicalStack:
      "Python, Ollama, RAG, Langchain, Streamlit",
    linkGithub: "https://github.com/dangminh214/RAG-Ollama-simple",
  },
];

const contactConfig = {
  YOUR_EMAIL: "dangminh214@gmail.com",
  YOUR_FONE: "+4915563415964",
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
