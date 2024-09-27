import React from 'react';
import { motion } from 'framer-motion';
import Game from './components/Game';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Chatbot from './components/Chatbot'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="landing-page"><LandingPage /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <section id="game"><Game /></section>
      <section id="chatbot"><Chatbot /></section>
    </div>
  );
}

export default App;
