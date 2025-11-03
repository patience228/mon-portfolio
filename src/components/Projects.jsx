import React from 'react';

const professionalProjects = [
  {
    name: 'SDSExtractor & LabIA',
    description: "Extraction automatique de données techniques à partir des fiches de sécurité et développement d’un module d’évaluation des résultats avec LLM.",
    tech: ['Python', 'LLM', 'NLP', 'Computer vision', 'OpenCV'],
    image: '/labia.png'
  },
  {
    name: 'Hindex-Remind',
    description: "Application web développée pour la sélection optimale de matériaux dans le cadre du projet R&I chez BASSETTI, intégrant visualisation des données et algorithmes de Machine Learning.",
    tech: ['Angular', 'Python', 'MongoDB', 'Scikit-learn', 'Dataviz'],
    image: '/remind.png'
  },  
  {
    name: 'GEVISCO & Cantine Management',
    description: "Développement d’une plateforme complète de gestion scolaire et de cantine : authentification, gestion des utilisateurs, emplois du temps, suivi des paiements et génération de rapports administratifs.",
    tech: ['Java', 'Spring Boot', 'AngularJS', 'PostgreSQL'],
    image: '/gevisco.png' 
  },
  {
    name: 'Ge-stock',
    description: "Système de gestion de stocks développé pour suivre les flux, gérer l’interface utilisateur et générer des rapports. Comprend tests fonctionnels, documentation et formation des utilisateurs.",
    tech: ['PHP', 'Laravel', 'MySQL'],
    image: '/gestock.png' 
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
    tech: ['Python', 'TensorFlow', 'Computer Vision', 'OpenCV'],
    link: 'https://github.com/patience228/emotion-recognition',
    image: '/emotion.png'
  },
  {
    name: 'Portfolio personnel',
    description: 'Site personnel développé avec React pour présenter mes projets, compétences et expériences.',
    tech: ['React', 'CSS', 'JavaScript'],
    link: 'https://github.com/patience228/mon-portfolio',
    image: '/portfolio.png'
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
