import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Heroine from "./components/Heroine/Heroine.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Tech from "./components/techstack/Tech.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/AboutMe/About.jsx";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Heroine />
      </section>
      <section id="About">
        <About />
      </section>
      <Sidebar />
      <section id="Contact">
        <Contact />
      </section>

      <section id="ProjectsParallax">
        <Parallax type="projects" />
      </section>
      <section id="Tech">
        <Tech />
      </section>

      <section id="PortfolioParallax">
        <Parallax type="portfolio" />
      </section>
      <section id="Portfolio">
        <Projects />
      </section>
    </div>
  );
};

export default App;
