import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import ProPic from '../ProPic.jpeg';

export default function Hero() {
  return (
    <section className="hero" id="about">
      <img src={ProPic} alt="Caleb Varghese" className="hero-photo fade-in-up revealed" />

      <h1 className="hero-name fade-in-up revealed">Caleb Varghese</h1>
      <p className="hero-title fade-in-up revealed">DevOps Engineer</p>

      <div className="hero-social fade-in revealed">
        <a
          href="https://github.com/calebvarghese"
          className="github"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/caleb-varghese/"
          className="linkedin"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rougher-earners-02@icloud.com"
          className="email"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="hero-tagline">Not a front end engineer. #HTTR #HTTC</p>

      <a
        className="hero-scroll-indicator"
        href="#experience"
        aria-label="Scroll to experience"
      >
        <span>Scroll</span>
        <FaChevronDown />
      </a>
    </section>
  );
}
