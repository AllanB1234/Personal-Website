import { Component } from 'react';
import './Portfolio.css';
import temppic from './temp.jpg'

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: temppic,
          title: "E-commerce Website",
          description: "A full-stack e-commerce platform built with React and Node.js",
          technologies: ["React", "Node.js", "MongoDB", "CSS3"],
        },
        {
          project_image: temppic, //can easily change i just decided to make it the same
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
      ],
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        {
          //Use this section to list your projects dynamically from state using the map function
          this.state.projects.map((project, index) => (
            <div className="project-box" key={index}>
              <img src={project.project_image} className="project-image" />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {/* Skills Section */}
              <div className="skill-list">
                {project.technologies.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
              <div className="buttons">
                <button>Live Demo</button>
                <button>View Code</button>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

// I DONT HAVE ANY OF MY OWN PROJECTS TO LIST SO I KEPT THE DEFAULT

export default Portfolio;