import React from "react";
import "./AboutMe.scss"; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <div className="responsive-container-block leftSide">
          <p className="text-blk heading">Wanna know more About Me</p>
          <p className="text-blk subHeading">
            Hello! I'm Aarthi, a Computer Science major at ABV-IIITM with a
            strong passion for Full Stack Web Development, particularly FrontEnd
            design. My journey in tech is fueled by curiosity and a commitment
            to continuous learning—whether it's mastering Data Structures and
            Algorithms or exploring Cloud Computing through Google JAM Sessions.
            I'm currently diving into Data Science, eager to expand my skill
            set. Being a student excites me because it's all about growth: we
            make mistakes, learn, and evolve. An extrovert at heart, I thrive on
            connection, journaling, traveling, and discovering new ideas through
            reading. I'm eager to bring my skills and enthusiasm to innovative
            startups, so feel free to reach out—let's create something amazing
            together!
          </p>
        </div>
        <div className="responsive-container-block rightSide">
          <img
            className="number1img"
            src="/Travel.jpeg"
            alt="Creative Team"
          />
          <img
            className="number2img"
            src="/cloud.jpeg"
            alt="Creative Team"
          />
          <img
            className="number3img"
            src="/photo.jpeg"
            alt="Creative Team"
          />
          <img
            className="number5img"
            src="/flower.jpeg"
            alt="Creative Team"
          />
          <img
            className="number4vid"
            src="/burger.jpeg"
            alt="Creative Team"
          ></img>
          <img
            className="number7img"
            src="/Read.jpeg"
            alt="Creative Team"
          />
          <video
            className="number6img"
            src="/gif.mp4"
            alt="Creative Team"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default About;
