import React from 'react';
import './Projects.css';

const projects = [
  {
    emoji: '⚡',
    title: 'Time Series Electrical Load Forecasting',
    description:
      'Trained LSTM and GRU on 24 hour electrical load data to predict future demand. Used ML based methods to detect anomalies and forecast load spikes, part of the course work for Applied Time Series Analysis at MU.',
    repo: 'https://github.com/alekya-06/ata_opsd_project',
  },

  {
    emoji: '🌱',
    title: 'Evolutionary Algorithms',
    description:
      'Implemented genetic algorithms and fuzzy logic from scratch in Python. Applied them to benchmark optimization problems and compared performance against traditional methods. Part of the course work for Evolutionary Computation and Computational Intelligence (ECCI) as a team project at MU.',
    repo: 'https://github.com/alekya-06/Evol-Comp-Assignments',
  }
];

export default function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-header">
        <h1 className="projects-heading">Projects</h1>
        <p className="projects-sub">
          A collection of things I've built!
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={i}>
            <div className="project-card-top">
              <span className="project-emoji">{p.emoji}</span>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="github-badge"
                aria-label={`View ${p.title} on GitHub`}
              >
                <GithubIcon />
                <span>View Repo</span>
              </a>
            </div>
            <h2 className="project-title">{p.title}</h2>
            <p className="project-desc">{p.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
        0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
        1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
        0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0
        012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747
        0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
