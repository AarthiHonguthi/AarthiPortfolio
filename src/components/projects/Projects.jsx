// Projects.jsx
import React, { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Carbon FootPrint",
    description:
      "Welcome to the Carbon Footprint Tracker! My web application empowers users to monitor and reduce their daily carbon emissions actively. Using Flask, HTML, Python, SQL, Jinja, and Matplotlib, we've developed a platform that calculates carbon footprints and encourages users to reflect on their environmental impact. With tool, users can make informed decisions to contribute positively to the planet.",
    sourceCode: "https://github.com/An-Aeonic-Ant/Carbon_Footprint",
    buttonText: "Source Code",
  },
  {
    id: 2,
    title: "NAYSA",
    description:
      "My project, titled NaysaChatBot, seeks to transform the digital ordering process for Fresh and Delicious Foods by incorporating an intelligent chat system into their website. By utilizing cutting-edge technologies like Dialogflow for natural language processing (NLP), FastAPI for backend development, and MySQL for database management, the chatbot streamlines interactions for users. This enables them to seamlessly place orders and effortlessly track them using conversational interfaces.",
    sourceCode: "https://github.com/AarthiHonguthi/NaysaChatBot",
    buttonText: "Source Code",
  },
  {
    id: 3,
    title: "PayTM Clone",
    description:
      "This project replicates the Paytm landing page using React, HTML, CSS, and JavaScript. It features a modular design with 10 React components: one Navigation, eight Section components, and one Footer. The use of React ensures easy updates and maintenance, while CSS handles all styling to closely mimic the original page's look and feel. The clone highlights key features of the Paytm app and is designed to be fully responsive, showcasing skills in component-based architecture and responsive web design.",
    liveCode: "https://aarthihonguthi.github.io/Paytm/",
    buttonText: "Live Website",
  },
  {
    id: 4,
    title: "MEDICO",
    description:
      "Medico is our innovative Medical Automation System designed for the college PHC center, streamlining medical services for students and staff. It features an intuitive web interface for easy appointment scheduling, medical record management, and access to essential healthcare services, ensuring efficient and effective healthcare delivery. Medico aims to enhance the quality of care while reducing administrative burdens.",
    sourceCode: "https://github.com/SlayZ121/Medico",
    buttonText: "Source Code",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <section ref={ref} className="projectSection">
      <div className="container">
        <div className="wrapper">
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a
              href={item.sourceCode || item.liveCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>{item.buttonText}</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
