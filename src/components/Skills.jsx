import React from 'react';

const skills = [
  {
    category: 'Langages',
    items: ['Python', 'Java', 'JavaScript / TypeScript', 'PHP', 'HTML / CSS', 'SQL'],
  },
  {
    category: 'Frameworks',
    items: ['Angular', 'Django', 'Spring Boot', 'Laravel', 'Bootstrap', 'React'],
  },
  {
    category: 'Bases de données',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle', 'SQL Server'],
  },
  {
    category: 'Data & IA',
    items: ['Machine Learning', 'NLP', 'LLM', 'Scikit-learn', 'Pandas', 'NumPy', 'Spark', 'Hadoop', 'Hive', 'Power BI', 'Dataviz'],
  },
  {
    category: 'Outils',
    items: ['Git', 'Jenkins', 'SonarQube', 'Postman', 'Gantt', 'Linux', 'Windows'],
  },
  {
    category: 'Méthodologies',
    items: ['Agile', 'Scrum', 'UML', 'Merise'],
  },
  {
    category: 'Soft Skills',
    items: ['Rigueur', 'Autonomie', 'Adaptabilité', 'Curiosité', 'Communication', 'Travail en équipe'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-skills">
      <h2>Compétences</h2>
      <div className="skills-container">
        {skills.map((group, index) => (
          <div key={index} className="skill-category">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
