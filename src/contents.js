import avatar from "./assets/images/avatar.jpg";
import kaggle from "./assets/images/Projects/kaggle.png";
import paperYolo from "./assets/images/Projects/paper-yolo.png";
import chatbot from "./assets/images/Projects/chatbot.png";

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
		second: "Ready for new challenges",
		third: "My dream is working as a Machine learning engineer",
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
		date: "08/2023 - 07/2024",
		technicalStack: "Javascript, MySQL, FontmaticUI",
		description: [
			"• Implemented various macro programms in JavaScript to enhance functionality and efficiency.",
			"• Developed programs to interact with a MySQL database using JavaScript for seamless data management",
			"• Designed and created a frontend UI to enable intuitive interaction with the database"
		]
			
	},
	{
		jobtitle: "Internship",
		where: "Continental AG",
		date: "10/2024 - 03/2025",
		technicalStack: "Javascript, Python, Rust, HTML, CSS",
		description: [
			"• Developed a full-stack web application to interact with CANcases using Rust, Python and Vanilla JavaScript and designed the program to operate based on MQTT and WebSocket protocols. Implenet also an optimal solution using ReactJS and TailwindCSS.",
			"• Integrated external libraries, including .dll and .lib files, into the Rust environment and use Rust to transmit MQTT data to Frontend.",
  			"• Implemented a Python Program to simulate a CAN Node which transmits and receives data in CAN Network and authored comprehensive documentation to ensure the program's maintainability and ease of use"
		]
	},
	{
		jobtitle: "Bachelor Thesis",
		where: "Fraunhofer IGD",
		date: "07/2024 - 09/2025",
		technicalStack: "PyTorch, Python, TensorRT, Jetson Orin Nano",
		description: [
			"Comparison of CNN and Vision Transformer models for strawberry disease detection (Grade: 1.9)",
			"• Fine-tuning of YOLOX and D-FINE on a domain-specific dataset; training on GPU clusters using PyTorch",
			"• Evaluation using COCO metrics, FPS, and latency components",
			"• Optimization with TensorRT and deployment on NVIDIA Jetson Orin for edge devices"
		]
	},
	{
		jobtitle: "Working Student",
		where: "Cheil Germany GmbH",
		date: "07/2025 - 12/2025",
		technicalStack: "Snowflake, Amazon S3, SQL, Python",
		description: [
			"• Development of ETL processes in Snowflake and Python for cleaning, transforming, and loading large-scale marketing datasets from multiple sources",
			"• Development, maintenance, and automation of manual data workflows using Amazon S3 and Airflow for processing Samsung Group data for daily, monthly, and yearly reports",
			"• Execution of data migrations, including extraction, transformation, and transfer of data from legacy systems to new databases",
			"• Collaboration with the analytics and data science teams to ensure data integrity and quality"
		]
	},
];

const skills = [
	{
		ProgrammingLanguages: [
			"Javascript",
			"Typescript",
			"Python",
			"Java",
			"Rust",
			"HTML",
			"CSS",
			"Rust",
			"C++",
		],
	},
	{
		Framework: ["ReactJS", "NodeJS", "PyTorch", "Springboot"],
	},
	{
		Database: ["Snowflake", "MongoDB", "PostgreSQL", "MySQL", "OracleXE", "MSSQL"],
	},
	{
		Libraries: ["Matplotlib", "Scitkit - Learn", "Numpy", "Pandas", "OpenCV", "Tailwindcss"],
	},
	{
		VersionControl: ["Git", "Github"],
	},
	{
		Others: ["Postman", "Docker", "Jupyter Notebook"],
	},
	{
		Languages: ["German (C1)", "English (C1)", "Vietnamese(Native Language)"],
	},
];

const dataportfolio = [
	{
		name: "Spam Email Classifier",
		linkGithub: "https://huggingface.co/spaces/dangminh214/Spam-Email-Classifier/tree/main",
		description: "Using ReactJS and Typescript to implement frontend client, which connected to the AI models",
		description0: "Training models using scikit-learn using NLP techniques to classify messages"
	},
	{
		name: "SecureBot: Eine KI-basierte Lernplattform für nachhaltige Security Awareness",
		linkGithub: "Hochschule Darmstadt Project",
		description: "Development of AI-based learning platform with Vue.js, Spring Boot and Keycloak",
		description0: "Implementation of both Frontend and Backend (APIs, Database) features.",
		description1: "Intergration of AI functions to enhance the learning interaction",
	},
	{
		name: "Knowledge Test Game",
		description: "Development of a Java-based quiz and knowledge game platform with server and database logic using JPA, PostgreSQL, and PgAdmin4",
    	description0: "Design and implementation of the database schema (questions, categories, difficulty levels, scores)",
    	description1: "Development of a modular architecture enabling easy extension with new question types and game modes",
		linkGithub: "https://github.com/dangminh214/WissenTest-KnowledgeTest-Game",
	},
	{
		name: "Kaggle Machine Learning Projects",
		img: kaggle,
		description: "Different solved problems in Kaggle",
		description0: "MNIST Fashion Recognition",
		description1: "Bike Sharing Demand, ",
		description2: "Diabetes Prediction",
		description3:
			"Digits Recognition, MNIST Fashion Recognition, PaperRockScissor Recognition",
		description4: "House Price Prediction",
		description5: "Rohlik Order Forecasting Challenge",
		description6: "Titanic Prediction, Titanic Spaceship Prediction",
		description7:
			"Use of various machine learning algorithms such as Multi-Layer Perceptron (MLP) and Random Forest Regression, Linear Regression, Binary Classification for pattern recognition and prediction.",
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
		linkGithub:
			"https://github.com/dangminh214/Scissors-Paper-Rock-Gestures-Detection-YOLO",
	},
];

const contactConfig = {
	YOUR_EMAIL: "dangminh214@gmail.com",
	YOUR_FONE: "+49 155 634 15964",
	description: "Always ready for your messages",
};

const socialprofils = {
	github: "https://github.com/dangminh214",
	linkedin: "https://www.linkedin.com/in/dang-minh-nguyen-b61892155/",
	kaggle: "https://www.kaggle.com/dangminh214",
	email:
		"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnSlSmfVbdGlGhDmHmDtCPGRcgNhcrwFmhhQZzBcNhdqwDWpbWwPDrhdktNBJjClJFvKn",
	huggingface: "https://huggingface.co/dangminh214"
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
