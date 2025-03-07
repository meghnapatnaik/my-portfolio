import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons'; // Update with faCode for Django
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const skills = [
    { name: "JavaScript", level: 90, icon: faJs, description: "2+ years of experience with frontend & backend." },
    { name: "Python", level: 85, icon: faPython, description: "2+ years working with data analysis and backend systems." },
    { name: "React", level: 90, icon: faReact, description: "Built interactive, dynamic web applications." },
    { name: "Node.js", level: 85, icon: faNodeJs, description: "Backend experience with REST APIs." },
    { name: "SQL", level: 85, icon: faDatabase, description: "Worked with relational databases for large data sets." },
    { name: "MongoDB", level: 85, icon: faDatabase, description: "Experience with NoSQL databases." },
    { name: "Django", level: 65, icon: faCode, description: "Developed secure and scalable web applications." },
    { name: "Express.js", level: 85, icon: faNodeJs, description: "Created backend systems with Node.js." },
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-item"
            key={index}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="circular-progress">
              <svg className="progress-ring" width="120" height="120">
                <circle className="progress-ring__circle" stroke="#e0e0e0" strokeWidth="8" fill="transparent" r="54" cx="60" cy="60" />
                <circle
                  className="progress-ring__circle"
                  stroke="#42a5f5"
                  strokeWidth="8"
                  fill="transparent"
                  r="54"
                  cx="60"
                  cy="60"
                  strokeDasharray="339.292"
                  strokeDashoffset={inView ? `${339.292 - (339.292 * skill.level) / 100}` : 339.292}
                  style={{ transition: 'stroke-dashoffset 1.5s ease' }}
                />
              </svg>
              <div className="icon-container">
                <FontAwesomeIcon icon={skill.icon} size="2x" />
              </div>
            </div>
            <h3>{skill.name}</h3>
            {hoveredSkill === index && (
              <div className="description">{skill.description}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;