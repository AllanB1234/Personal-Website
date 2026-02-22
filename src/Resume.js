import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Data Science",
      school: "New Jersey Institute of Technology",
      year: "2023-2027",
      gpa: "3.338/4.0"
    },
  ];

  const experience = [
    {
      title: "Undergraduate Research Assistant",
      company: "Machine Intelligence and XR Research Lab - Department of Informatics, Department of Data Science, New Jersey Institute of Technology",
      period: "June 2024-Present",
      responsibilities: [
        "-Virtual Reality Ontology Object Manipulation (VROOM):",
        "Developed Unity C# modules for ontology object manipulation, improving interaction accuracy and usability",      
        "Collected feedback from over 50 participants to inform hardware/software redesign",
        "Co-authored a usability-focused research paper",
        "-VR Treadmill Usability Study",
        "Led a group of 3 developers and experimenters to design and conduct usability tests for a VR treadmill",
        "Collaborated with group members to solve problems such as VR cable tangling, menu navigation, and treadmill connectivity issues",
        "-Driving Simulator",
        "Directed a team of 4 to test VR driver–pedestrian interactions using a driving simulator",
        "Preparing a user study on VR-based driver and pedestrian safety, focusing on interaction and risk analysis",

      ]
    },
    {
      title: "Data Services Intern",
      company: "NikoHealth",
      period: "May 2025-September 2025",
      responsibilities: [
        "Developed Python scripts that automated patient record processing, reducing manual effort and increasing efficiency, cutting down a 3-hour task to just over a minute",
        "Built Power Query pipelines to clean patient data, reducing errors and improving consistency"
      ]
    },
    {
      title: "Medical Equipment Coordinator",
      company: "SavvyMed",
      period: "June 2023-August 2023, May 2024-August 2024",
      responsibilities: [
        "Assisted in refurbishing, testing, and logging equipment issues, such as error codes or faults",
		    "Redesigned office layout in collaboration with supervisor, improving workflow and storage efficiency"
      ]
    },
    {
      title: "Data Science Student Representative",
      company: "NJIT Student Senate",
      period: "May 2025-Present",
      responsibilities: [
        "Collected and presented feedback from 50+ Data Science students to faculty, contributing to curriculum discussions"
      ]
    },
    {
      title: "Vice President and Co-Founder",
      company: "Highlander Motorsports Club",
      period: "January 2025-Present",
      responsibilities: [
        "Managed communications and event planning for 250+ members, increasing attendance at weekly meetings",
        "Planned racetrack event with 50+ attendees, fostering industry connections and raising funds for future events",
        "Coordinated with other staff members to organize events, as well as maintenance for the club "
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C", "C#", "R"],
    "Frameworks & Libraries": ["Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "Excel Power Query"],
    "Tools & Technologies": ["Git", "VS Code", "Microsoft Office", "Google Workspace", "Unity"],
    "Languages": ["English (Fluent)", "Russian (Conversational and reading)"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;