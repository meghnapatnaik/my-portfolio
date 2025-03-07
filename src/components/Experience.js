import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [inView, setInView] = useState(false);

  const experiences = [
    {
      role: 'Software Developer',
      company: 'Data Economy',
      description: 'Developing scalable web solutions, enhancing security, and optimizing application performance.',
      details: [
        'Integrated Keycloak SSO for secure authentication and authorization, improving user management and platform security.',
        'Configured Vite for rapid development, optimizing builds for improved application performance.',
        'Developed RESTful APIs using Python Flask, enhancing backend efficiency and data exchange.',
        'Architected microservices using Java and Spring Boot for scalable backend solutions.',
        'Designed GraphQL queries to reduce network latency by 40%, improving data fetching efficiency.',
        'Built dynamic and responsive UI components using React, enhancing user experience.',
        'Implemented and optimized Redux for state management, ensuring smooth data flow and frontend architecture.'
      ],
      period: 'May 2024 - Present',
      icon: faBriefcase
    },
    {
      role: 'Instructional Assistant (TA)',
      company: 'University of North Carolina at Charlotte',
      description: 'Assisted students with AI and computer vision concepts, grading, and mentoring.',
      details: [
        'Supported students in "Advanced Computer Vision" and "Artificial Intelligence for Games."',
        'Graded assignments, held office hours, and provided debugging support in ML & AI concepts.',
        'Designed instructional materials, quizzes, and tutorials for enhanced student learning.'
      ],
      period: 'January 2024 - May 2024',
      icon: faGraduationCap
    },
    {
      role: 'Software Engineer',
      company: 'Epam Systems',
      description: 'Developed scalable applications and optimized backend systems for global clients.',
      details: [
        'Led the development of an escalation management platform for Google using React, Node.js, Express.js, and MongoDB, improving efficiency and response times.',
        'Implemented Jest for automated testing, reducing execution times by 30%, and utilized Jenkins for continuous integration.',
        'Developed automated case prioritization, real-time notifications, and improved filtering, boosting user satisfaction by 20%.',
        'Analyzed load times and API response times, implementing Angular optimizations like AOT compilation and lazy loading, resulting in a 40% improvement in application performance.',
        'Streamlined deployment using Jenkins for continuous integration, increasing feature release frequency by 30%.',
        'Improved data retrieval speed by optimizing queries and indexing in RDMS.',
        'Utilized Python Flask for automating data processing workflows, increasing productivity by 30%.'
      ],
      period: 'August 2020 - August 2023',
      icon: faLaptopCode
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleScroll = () => {
    const experienceSection = document.getElementById('experience');
    const sectionPosition = experienceSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 10;

    if (sectionPosition < screenPosition) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${activeIndex === index ? 'active' : ''} ${inView ? (index % 2 === 0 ? 'animate-left' : 'animate-right') : ''}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="timeline-icon">
              <FontAwesomeIcon icon={exp.icon} />
            </div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
              <span className="timeline-period">{exp.period}</span>
              {activeIndex === index && (
                <ul className="details-list">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
