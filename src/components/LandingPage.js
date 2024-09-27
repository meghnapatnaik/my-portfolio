import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>
          Hey, I'm{' '}
          <TypeAnimation
            sequence={[
              'Meghna.',
              1000,
              'a Software Engineer.',
              1000,
              'a Code Magician.',
              1000,
              'a Tech Enthusiast.',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '3.5rem', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        <p>Software engineer, code magician, and tech enthusiast.</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </div>
  );
};

export default LandingPage;
