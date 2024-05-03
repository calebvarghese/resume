import React from 'react';
import ProPic from '../src/ProPic.jpeg'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function HomePage() {
  return (
    <div className='homepage-container'>

      <div className='profile-section'>
        <img
          src={ProPic}
          alt="Profile"
          style={{ width: '100px', borderRadius: '50%' }}
        />

        <div className='social-wrapper'>
            <a href="https://github.com/calebvarghese" class="icon github">
            <FaGithub size={24} />
            </a>

            <a href="https://www.linkedin.com/in/caleb-varghese/" class="icon linkedin">
            <FaLinkedin size={24} />
            </a>
            <a href="mailto:rougher-earners-02@icloud.com" class="icon email">
            <FaEnvelope size={24} />
            </a>
        </div>

        <p>Not a front end engineer. #HTTR</p>
      </div>
      
      {/* Work Experience Section */}
      <div className='main-content'>

        <h2 className='header'>Work Experience</h2>

        <div>
            <span class="jobTime">DevOps Engineer II<b>Sep 2023 - Present</b></span>
            <p><b>BTI360, Herndon, VA</b></p>
        </div>

        <div>
            <span class="jobTime">Associate DevOps Engineer<b>April 2022 - Sep 2023</b></span>
            <p><b>Dark Wolf Solutions LLC, Herndon, VA</b></p>
            <p>Working on government contracts for DoD. Building out infrastructure using Terraform and AWS cloud resources. Writing GitLab CI/CD pipeline scripts for React Native project.</p>
        </div>

        <div>
            <span class="jobTime">DevOps and SWE Intern<b>June 2021 - April 2022</b></span>
            <p><b>Hunter Strategy LLC, Washington D.C.</b></p>
            <p>Worked on internal security clearance portal applicaiton. Wrote front end in HTML, SCSS, AngularJS, Angular Material Library. Wrote backend using AWS CDK in typescript.</p>
        </div>

        <div>
            <span class="jobTime">Support Analyst<b>March 2019 - September 2019</b></span>
            <p><b>EvoTech LLC, College Park, MD</b></p>
            <p>Formatted and worked on coworker resumes. Routed issues to tier three IT support if needed. Supported coding efforts.</p>
        </div>

        {/* Certifications Section */}
        <div>
            <h2 className='header'>Certifications</h2> 
            <p>AWS Certified Cloud Practioner (June 2021)</p>
            <p>Hashicorp Terraform Certification (June 2022)</p>
            <p>CompTIA Security Plus CE (Feb 2023)</p>
            <p>AWS Certified Solutions Architect - Associate (Feb 2024)</p>
        </div>
      </div>

      
    </div>
  );
}

export default HomePage;
