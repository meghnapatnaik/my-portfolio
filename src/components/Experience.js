import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [inView, setInView] = useState(false);

  const experiences = [
    {
      role: 'Instructional Assistant',
      company: 'University of North Carolina',
      description: 'Assisted students with key AI concepts and helped in grading assignments.',
      details: ['Instructional Assistant for "ITCS 4236/5236: Artificial Intelligence for Computer Games" and "ITCS 6010: Advanced Computer Vision," supporting 75 students. Assisted with grading, administrative tasks, and proctoring exams.',
      'Established a structured tutoring program that integrated advanced teaching techniques; supported over 50 students throughout the semester, resulting in notable improvements in understanding of challenging subject matter.'
      ],
      period: 'Aug 2023 - Present',
      icon: faGraduationCap
    },
    {
      role: 'Software Engineer',
      company: 'Epam Systems',
      description: 'Worked as a Full Stack Developer and developed scalable applications and collaborated with the team to optimize backend systems.',
      details: ['Led the development of a full-stack escalation management application using React, Node.js, Express.js, and MongoDB, improving efficiency and response times for Google support teams.' ,
    'Integrated Jest for automated testing, reducing execution times by 30%, and Jenkins for continuous integration.',
       'Developed automated case prioritization, real-time notifications, and improved filtering, boosting user satisfaction by 20%. ' ,
     ' Ensured high stability by optimizing MongoDB queries, conducting thorough testing, and proactively resolving bugs.'],
      period: 'Jan 2022 - July 2023',
      icon: faBriefcase
    },
    {
      role: 'Developer Intern',
      company: 'Epam Systems',
      description: 'Contributed to building the Netflix Roulette project using Angular and API integrations.',
      details: ['Led front-end development and helped integrate APIs. Achieved 30% performance improvement.',
    'Implemented a continuous integration system using Jenkins for the Netflix Roulette application that streamlined deployment and improved release frequency, leading to a 30% increase in feature delivery timelines.',
    'Analyzed performance metrics such as load times and API response times, and implemented Angular optimizations like AOT compilation and lazy loading, resulting in a 40% improvement in application performance.',
    'Optimized data retrieval speed by indexing and query optimization with RDMS.'],
      period: 'August 2021 - Dec 2021',
      icon: faLaptopCode
    },
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
