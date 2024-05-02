import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import specific icons

function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Top left image */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/ProPic.jpeg"
          alt="Profile"
          style={{ width: '100px', borderRadius: '50%' }}
        />
      </div>

      {/* Social media icons */}
      <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
        <a href="https://github.com/calebvarghese" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/caleb-varghese/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href="mailto:rougher-earners-02@icloud.com">
          <FaEnvelope size={24} /> Email
        </a>
      </div>

      {/* Work Experience Section */}
      <div style={{ marginTop: '20px' }}>

        <h2>Work Experience</h2>

        <p>DevOps Engineer II</p>
        <p>Sep 2023 - Present</p>
        <p>BTI360, Herndon, VA</p>
        <br></br>
        
        <p>Associate DevOps Engineer</p>
        <p>April 2022 - Sep 2023</p>
        <p>Dark Wolf Solutions LLC, Herndon, VA</p>
        <p>Responsibilities: Working on government contracts for DoD. Building out infrastructure using Terraform and AWS cloud resources. Writing GitLab CI/CD pipeline scripts for React Native project.</p>
        <br></br>
        
        <p>DevOps and SWE Intern</p>
        <p>June 2021 - April 2022</p>
        <p>Hunter Strategy LLC, Washington D.C.</p>
        <p>Responsibilities: Worked on internal security clearance portal applicaiton. Wrote front end in HTML, SCSS, AngularJS, Angular Material Library. Wrote backend using AWS CDK in typescript.</p>
        <br></br>
        
        <p>Support Analyst</p>
        <p>March 2019-September 2019</p>
        <p>EvoTech LLC, College Park, MD</p>
        <p>Responsibilities: Formatted and worked on coworker resumes. Routed issues to tier three IT support if needed. Supported coding efforts.</p>

      </div>

      {/* Certifications Section */}
      <div style={{ marginTop: '20px' }}>
        <h2>Certifications</h2>
        <p>AWS Certified Cloud Practioner (June 2021)</p>
        <p>Hashicorp Terraform Certification (June 2022)</p>
        <p>CompTIA Security Plus CE (Feb 2023)</p>
        <p>AWS Certified Solutions Architect - Associate (Feb 2024)</p>
      </div>
    </div>
  );
}

export default HomePage;
