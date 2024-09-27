import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      {!submitted ? (
        <>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Tell me your name 😄" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="How can I reach you? 📧" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="4" placeholder="What's up? 🤔" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message 🚀</button>
          </form>

          {}
          <div className="social-links animated-text">
            <p>Or connect with me on LinkedIn:</p>
            <a href="https://www.linkedin.com/in/meghnapatnaik" target="_blank" rel="noopener noreferrer" className="linkedin-link">
              <span>Connect on LinkedIn </span>💼
            </a>
          </div>
        </>
      ) : (
        <div className="submitted-message">
          <h3>Yay! 🎉</h3>
          <p>Thanks for reaching out! I'll get back to you faster than a cat chasing a laser! 😸</p>

          {}
          <div className="social-links">
            <p>Meanwhile, feel free to connect with me on LinkedIn:</p>
            <a href="https://www.linkedin.com/in/meghnapatnaik" target="_blank" rel="noopener noreferrer" className="linkedin-link">
              <span>Connect on LinkedIn </span>💼
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
