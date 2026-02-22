import { Component } from 'react';
import './About.css';
import pic from './headshot.jpg'

const skills = {
  "Programming Languages": ["Python", "R", "SQL", "C", "C#", "Bash", "Java", "Excel Power Query"],
};

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="about-title">About Me</h1>

        <div className="about-section">

          <div className="image-container">
            <img src={pic} alt="image" className="image" />
          </div>

          <div className="about-description">
            <p>Hi, I'm Allan Breslov, a Data Science student at NJIT with a strong passion for AI and its applications. My goal is to become an AI Scientist, leveraging machine learning and data-driven insights to solve complex problems. I’m particularly interested in how AI intersects with real-world industries like automotive technology, fashion analytics, and audio processing. Currently, I’m developing my expertise in machine learning, data engineering, and computational modeling.</p>

            <p>Outside of academics, I have a keen interest in cars, sneakers, and music, always looking for ways to apply data science to my passions. I'm eager to connect with like-minded professionals and explore opportunities in AI research and industry applications.</p>

            <p>Skills & Technologies:</p>
            <div className="skills-categories">
              {/* Skills Section */}
              <div className="skill-list">
                {skills["Programming Languages"].map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;