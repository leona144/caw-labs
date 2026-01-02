import React from "react";
import "./about.css";
import ImageMe from "../../assets/girl.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import AnimatedButton from "../animatedButton/AnimatedButton";
import {
  SmoothScroll,
  VerticalSection,
  HorizontalSection,
} from "../SmoothScroll";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ImageMe} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 year working</small>
            </div>
            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>clients</h5>
              <small>0</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </div>
          </div>
          <p>I am a passionate and solutions-driven developer with a knack for transforming complex problems into elegant, efficient code. My approach blends a strong foundation in modern technologies like [Mention 1-2 key tech stacks, e.g., JavaScript/React, Python/Django, or cloud platforms] with a keen eye for user-centric design. I thrive in collaborative environments where I can contribute to the full development lifecycle—from concept and architecture to implementation and iterative refinement. Whether building scalable backend systems, crafting intuitive front-end interfaces, or architecting full-stack applications, my goal is always to create robust, maintainable software that delivers tangible value and an exceptional end-user experience.</p>
          <AnimatedButton>  <a href="#contact">Let's Talk</a></AnimatedButton>
         
        </div>
      </div>

    </section>
  );
};

export default About;
