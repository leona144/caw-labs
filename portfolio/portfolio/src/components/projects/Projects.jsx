import React from "react";
import "./projects.css";
//import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/artville.jpg";
import IMG7 from "../../assets/portfolio7.png";
const projectsData = [
  {
    id: 1,
    image: IMG7,
    title: "Calulator",
    Description: "simple calculator , math and logic operations and graphical simulation ",
    Tech:"html , css , js",
    github: "https://github.com/leona144/",
    demo: "https://calculator-mini-projet.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "React kanban Project",
    Description: "A functional Kanban Board (like Trello) to manage tasks across different statuses (To Do, In Progress, Done)",
      Tech:"react , js , css",

    github: "https://github.com/leona144/caw-labs/tree/lab2-setup/lab7",
    demo: "https://lab7-kanbanproject.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Artville",
    Description: "full stack project , platform for craftsmen ",
        Tech:"MERN satck",

    github: "https://github.com/leona144/",
    demo: "",
  },

];

function Projects() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {projectsData.map(({ id, image, title,Description, github, demo,Tech }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <h3>{Description}</h3>
            <h3>{Tech}</h3>
            <div className="portfolio_item-cta">
              <a href={github} target="_blank" className="btn" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
