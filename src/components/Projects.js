import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faFileAlt, faCogs } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: 'Advanced Health Care System',
    description: 'Ranked 3rd in the Smart Slash Hackathon. Developed using web technologies to assist hospitals with real-time patient data tracking and appointment scheduling.',
    details: 'Built a secure and scalable platform to manage patient records, integrated hospital workflows, and optimized data tracking.',
    technologies: 'HTML, CSS, JavaScript, MySQL, Node.js, REST APIs, Bootstrap',
    icon: faHeartbeat,  
    animationClass: 'pulse-animation', 
  },
  {
    title: 'AI-Powered Resume Analyzer',
    description: 'An AI tool designed to analyze resumes for keyword optimization.',
    details: 'Implemented Natural Language Processing (NLP) techniques to extract key details and improve candidate-job matching accuracy.',
    technologies: 'Python, NLP, Django, Scikit-learn, HTML, CSS, Bootstrap, PostgreSQL',
    icon: faFileAlt,
    animationClass: 'rotate-animation',
  },
  {
    title: 'Machine Learning Model Evaluator',
    description: 'A project to train and test datasets using various machine learning algorithms.',
    details: 'Applied algorithms like logistic regression and decision trees to evaluate performance on datasets, with detailed performance metrics and accuracy reports.',
    technologies: 'Python, Scikit-learn, Pandas, Matplotlib, Jupyter Notebook, NumPy, Git',
    icon: faCogs,
    animationClass: 'gear-animation',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Key Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className={`project-card ${project.animationClass}`} key={index}>
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <FontAwesomeIcon icon={project.icon} size="3x" className="project-icon" />
              </div>
              <div className="project-card-back">
                <h3>{project.title}</h3>
                <p>{project.details}</p>
                <p><strong>Technologies Used:</strong> {project.technologies}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
