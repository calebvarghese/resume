import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Certifications from './components/Certifications';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Certifications />
    </>
  );
}

export default HomePage;
