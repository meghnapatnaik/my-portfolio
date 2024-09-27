import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons'; 
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const skills = [
    { name: "JavaScript", level: 90, icon: faJs, description: "2+ years of experience with frontend & backend." },
    { name: "Python", level: 85, icon: faPython, description: "2+ years working with data analysis and backend systems." },
    { name: "React", level: 90, icon: faReact, description: "Built interactive, dynamic web applications." },
    { name: "Node.js", level: 75, icon: faNodeJs, description: "Backend experience with REST APIs." },
    { name: "SQL", level: 85, icon: faDatabase, description: "Worked with relational databases for large data sets." },
    { name: "MongoDB", level: 78, icon: faServer, description: "Experience with NoSQL databases." },
    { name: "Django", level: 65, icon: faServer, description: "Developed secure and scalable web applications." },
    { name: "Express.js", level: 75, icon: faNodeJs, description: "Created backend systems with Node.js." },
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
            <h3>
              <FontAwesomeIcon icon={skill.icon} /> {skill.name}
            </h3>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: inView ? `${skill.level}%` : '0%',
                  transition: 'width 1.5s ease'
                }}
              ></div>
            </div>
            {hoveredSkill === index && (
              <div className="tooltip">{skill.description}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
