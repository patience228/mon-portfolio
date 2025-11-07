import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-about">
      <h2>À propos de moi</h2>
      <div className="about-content">
        <img src="/photo_profil.jpg" alt="Profil" />
        <div>
          <p>
          Salut ! Je suis <strong>Akou SIABI</strong>, ingénieure informatique passionnée par l’IA, la Data et le développement full-stack.
          J’ai travaillé sur des projets professionnels et personnels mêlant développement web, NLP, LLM, IA générative, ainsi que l’exploitation et la visualisation de données.
          </p>
          <p>
            Mes spécialités incluent l'Intelligence Artificielle, la Data Science, le Machine Learning, l'Analyse de Données, la Data Visualisation, le Développement full-stack et pipelines de données
            Mon objectif est de créer des solutions efficaces et élégantes qui résolvent de vrais problèmes.
          </p>
          <a
          href="/CV_Siabi_Patience.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cv"
          >
            Télécharger mon CV
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;
