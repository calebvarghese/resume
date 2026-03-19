import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const certs = [
  { name: 'AWS Certified Cloud Practitioner', date: 'June 2021', emoji: '☁️' },
  { name: 'HashiCorp Terraform Associate', date: 'June 2022', emoji: '🏗️' },
  { name: 'CompTIA Security+ CE', date: 'Feb 2023', emoji: '🔒' },
  { name: 'AWS Certified Solutions Architect – Associate', date: 'Feb 2024', emoji: '🏛️' },
  { name: 'Azure Fundamentals (AZ-900)', date: 'March 2025', emoji: '☁️' },
];

function CertCard({ cert, index }) {
  const ref = useScrollReveal();
  return (
    <div
      className="cert-card fade-in-up"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="cert-badge" role="img" aria-label={cert.name}>
        {cert.emoji}
      </div>
      <div className="cert-info">
        <p className="cert-name">{cert.name}</p>
        <p className="cert-date">{cert.date}</p>
      </div>
    </div>
  );
}

export default function Certifications() {
  const titleRef = useScrollReveal();

  return (
    <section className="certifications-section" id="certifications">
      <div className="section-inner">
        <h2 className="section-title fade-in-up" ref={titleRef}>
          Certifications
        </h2>
        <div className="certs-grid">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
