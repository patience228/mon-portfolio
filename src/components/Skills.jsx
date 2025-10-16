import React from 'react';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Angular', level: 70 },
  { name: 'MongoDB', level: 60 },
  { name: 'IA', level: 75 }
];

const Skills = () => {
  return (
    <section id="skills" className="section-skills">
      <h2>Compétences</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
