import React from 'react';
import './Home.css';
import PROFILE_PIC from './my_img.jpg';

export default function Home() {
  return (
    <main className="home">

      <section className="section section--hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Alekya Duvvuri</h1>
            <p className="hero-tagline">
              Student · AI ML Enthusiast · Problem Solver
            </p>
            <p className="hero-bio">
              Hi there! I'm a passionate student with a deep interest in artificial intelligence and machine learning. I love exploring new technologies and solving complex problems. Welcome to my portfolio!
            </p>
          </div>
          <div className="hero-photo-wrap">
            <img
              src={PROFILE_PIC}
              alt="Profile"
              className="hero-photo"
            />
            <div className="hero-photo-ring" />
          </div>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="6" y="2" width="4" height="8" rx="2" fill="currentColor" opacity="0.5"/>
            <path d="M8 16 L4 20 L8 24 L12 20 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      <section className="section section--research">
        <div className="section-inner">
          <h2 className="section-title">Interests</h2>
          <div className="research-grid">
            {[
              { icon: '🧠', title: 'Artificial Intelligence and Machine Learning', desc: 'Deep learning architectures, model interpretability, and efficient training methods.' },
              { icon: '🔗', title: 'Natural Language Processing', desc: 'Transformers, language modeling, and text generation techniques.' },
              { icon: '📊', title: 'Data Science', desc: 'Statistical modelling, causal inference, and large-scale data analysis.' },
            ].map(r => (
              <div className="research-card" key={r.title}>
                <span className="research-icon">{r.icon}</span>
                <h3 className="research-card-title">{r.title}</h3>
                <p className="research-card-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--skills">
        <div className="section-inner">
          <h2 className="section-title">Skills</h2>
          <div className="skills-groups">
            {[
              {
                category: 'Languages',
                items: ['Python', 'JavaScript', 'Java', 'C', 'SQL'],
              },
              {
                category: 'Frameworks & Libraries',
                items: ['React', 'Node.js', 'PyTorch', 'TensorFlow', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
              },
              {
                category: 'Tools & Platforms',
                items: ['Git', 'Docker', 'PostgreSQL', 'MySQL', 'VS Code'],
              },
            ].map(group => (
              <div className="skills-group" key={group.category}>
                <h3 className="skills-group-title">{group.category}</h3>
                <div className="skills-pills">
                  {group.items.map(skill => (
                    <span className="skill-pill" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--details">
        <div className="section-inner">
          <h2 className="section-title section-title--light">Personal Details</h2>
          <div className="details-card">
            <div className="details-row">
              <span className="details-label">Name</span>
              <span className="details-value">Alekya Duvvuri</span>
            </div>
            <div className="details-row">
              <span className="details-label">Phone</span>
              <span className="details-value">+91 79890 44963</span>
            </div>
            <div className="details-row">
              <span className="details-label">Personal Email</span>
              <a className="details-value details-link" href="mailto:alekya.duvvuri17@gmail.com">alekya.duvvuri17@gmail.com</a>
            </div>
            <div className="details-row">
              <span className="details-label">College Email</span>
              <a className="details-value details-link" href="mailto:se23ucse014@mahindrauniversity.edu.in">se23ucse014@mahindrauniversity.edu.in</a>
            </div>
            <div className="details-row">
              <span className="details-label">Location</span>
              <span className="details-value">Hyderabad, India</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/alekya-06" target="_blank" rel="noreferrer" className="social-btn">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/alekya-duvvuri/" target="_blank" rel="noreferrer" className="social-btn social-btn--outline">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
