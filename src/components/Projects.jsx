import React from 'react';

const projectList = [
  {
    name: 'REMIND',
    description: 'IA pour la sélection de matériaux',
    tech: ['Angular', 'Python', 'MongoDB'],
    link: 'https://github.com/ton-compte/REMIND',
    image: '/remind.png'
  },
  {
    name: 'LabIA',
    description: 'SDSExtractor - Extraction de données scientifiques',
    tech: ['Python', 'LLM'],
    link: 'https://github.com/ton-compte/LabIA',
    image: '/labia.png'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-projects">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <a href={project.link}>Voir sur GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
