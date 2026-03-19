import { useState, useEffect } from 'react';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleNav(id) {
    scrollToSection(id);
    setMenuOpen(false);
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a className="navbar-logo" onClick={() => handleNav('hero')} href="#hero">
          Caleb Varghese
        </a>

        <ul className="navbar-links">
          <li><a onClick={() => handleNav('about')} href="#about">About</a></li>
          <li><a onClick={() => handleNav('experience')} href="#experience">Experience</a></li>
          <li><a onClick={() => handleNav('certifications')} href="#certifications">Certifications</a></li>
        </ul>

        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}>
        <a onClick={() => handleNav('about')} href="#about">About</a>
        <a onClick={() => handleNav('experience')} href="#experience">Experience</a>
        <a onClick={() => handleNav('certifications')} href="#certifications">Certifications</a>
      </div>
    </nav>
  );
}
