import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const jobs = [
  {
    role: 'DevOps Engineer II',
    company: 'BTI360',
    location: 'Herndon, VA',
    dates: 'Sep 2023 – Present',
    description: '',
  },
  {
    role: 'Associate DevOps Engineer',
    company: 'Dark Wolf Solutions LLC',
    location: 'Herndon, VA',
    dates: 'April 2022 – Sep 2023',
    description:
      'Working on government contracts for DoD. Building out infrastructure using Terraform and AWS cloud resources. Writing GitLab CI/CD pipeline scripts for React Native project.',
  },
  {
    role: 'DevOps and SWE Intern',
    company: 'Hunter Strategy LLC',
    location: 'Washington D.C.',
    dates: 'June 2021 – April 2022',
    description:
      'Worked on internal security clearance portal application. Wrote front end in HTML, SCSS, AngularJS, Angular Material Library. Wrote backend using AWS CDK in TypeScript.',
  },
  {
    role: 'Support Analyst',
    company: 'EvoTech LLC',
    location: 'College Park, MD',
    dates: 'March 2019 – September 2019',
    description:
      'Formatted and worked on coworker resumes. Routed issues to tier three IT support if needed. Supported coding efforts.',
  },
];

function JobCard({ job, index }) {
  const ref = useScrollReveal();
  return (
    <div
      className="timeline-item slide-in-right"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="job-card">
        <div className="job-header">
          <p className="job-company">{job.company} — {job.location}</p>
          <span className="job-dates">{job.dates}</span>
        </div>
        <p className="job-role">{job.role}</p>
        {job.description && <p className="job-desc">{job.description}</p>}
      </div>
    </div>
  );
}

export default function Experience() {
  const titleRef = useScrollReveal();

  return (
    <section className="experience-section" id="experience">
      <div className="section-inner">
        <h2 className="section-title fade-in-up" ref={titleRef}>
          Work Experience
        </h2>
        <div className="timeline">
          {jobs.map((job, i) => (
            <JobCard key={i} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
