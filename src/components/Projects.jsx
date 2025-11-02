import React from 'react';

const professionalProjects = [
  {
    name: 'REMIND',
    description: 'IA pour la sélection de matériaux — Projet R&I chez BASSETTI.',
    tech: ['Angular', 'Python', 'MongoDB'],
    image: '/remind.png'
  },
  {
    name: 'LabIA',
    description: 'SDSExtractor — Extraction automatique de données scientifiques (LLM, NLP).',
    tech: ['Python', 'LLM', 'NLP'],
    image: '/labia.png'
  }
];

const personalProjects = [
  {
    name: 'Prédiction des prix Airbnb',
    description: 'Modèle prédictif pour estimer les prix des logements selon leurs caractéristiques.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/patience228/airbnb-price-prediction',
    image: '/airbnb.png'
  },
  {
    name: 'Reconnaissance des émotions faciales',
    description: 'Détection et classification d’émotions à partir d’images via deep learning.',
    tech: ['Python', 'TensorFlow', 'Computer Vision'],
    link: 'https://github.com/patience228/emotion-recognition',
    image: '/emotion.png'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-projects">
      <h2>Projets</h2>

      {/* Projets professionnels */}
      <div className="projects-section">
        <h3>Projets professionnels</h3>
        <div className="projects-grid">
          {professionalProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.name} />
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              {/* Pas de lien GitHub pour les projets pro */}
            </div>
          ))}
        </div>
      </div>

      {/* Projets personnels */}
      <div className="projects-section">
        <h3>Projets personnels</h3>
        <div className="projects-grid">
          {personalProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.name} />
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  Voir sur GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
