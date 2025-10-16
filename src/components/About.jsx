import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-about">
      <h2>À propos de moi</h2>
      <div className="about-content">
        <img src="/photo_profil.jpg" alt="Profil" />
        <div>
          <p>
            Salut ! Je suis développeur Python passionné par l'IA et le développement full-stack.
            J'ai travaillé sur des projets comme REMIND et LabIA pour l'extraction de données scientifiques.
          </p>
          <p>
            Mes spécialités incluent Python, Angular, MongoDB, IA et visualisation de données.
            Mon objectif est de créer des solutions efficaces et élégantes qui résolvent de vrais problèmes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
