import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(true);
  const messagesEndRef = useRef(null);

  const options = [
    { label: 'What projects have you worked on?', answer: 'I have worked on AI resume analyzers, Machine Learning models, and web development projects like Netflix Roulette.' },
    { label: 'How can I contact you?', answer: 'You can contact me via email at meghnapatnaikneelayavalasa@gmail.com or via LinkedIn.' },
    { label: 'What skills do you have?', answer: 'I am skilled in JavaScript, Python, React, Angular, Databases, ML algorithms and more!' },
    { label: 'Tell me about your experience.', answer: 'I have experience working as a Software Engineer at Epam Systems and as an Instructional Assistant at UNC Charlotte.' },
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      simulateTyping('Thanks for your response! I will get back to you soon.');
    }
  };

  const simulateTyping = (response) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
      setIsTyping(false);
      setOptionsVisible(true); 
      scrollToBottom();
    }, 1500);
  };

  const handleOptionClick = (option) => {
    setMessages([...messages, { text: option.label, sender: 'user' }]);
    setOptionsVisible(false);
    simulateTyping(option.answer);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {

    setMessages([{ text: 'Hi, What can I help you with today?', sender: 'bot' }]);
  }, []);

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <div className="chatbot-icon" onClick={toggleChat}>
          💬
        </div>
      )}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h4>Chatbot</h4>
            <button className="close-btn" onClick={toggleChat}>✖</button>
          </div>

         
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-typing-symbol">
                <span></span><span></span><span></span>
              </div>
            )}
            
          
            {optionsVisible && (
              <div className="chatbot-options">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className="option-btn"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>

          
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} 
              placeholder="Ask a question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
