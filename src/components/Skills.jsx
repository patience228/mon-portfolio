import React from 'react';

const skills = [
  {
    category: 'Langages',
    items: [
      { name: 'Python', logo: '/logos/python.svg' },
      { name: 'Java', logo: '/logos/java.svg' },
      { name: 'JavaScript / TypeScript', logo: '/logos/javascript.svg' },
      { name: 'PHP', logo: '/logos/php.svg' },
      { name: 'HTML / CSS', logo: '/logos/html5.svg' },
      { name: 'SQL', logo: '/logos/sql.svg' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Angular', logo: '/logos/angular.svg' },
      { name: 'React', logo: '/logos/react.svg' },
      { name: 'Django', logo: '/logos/django.svg' },
      { name: 'Spring Boot', logo: '/logos/spring.svg' },
      { name: 'Laravel', logo: '/logos/laravel.svg' },
      { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
    ],
  },
  {
    category: 'Bases de données',
    items: [
      { name: 'MongoDB', logo: '/logos/mongodb.svg' },
      { name: 'MySQL', logo: '/logos/mysql.svg' },
      { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
      { name: 'Oracle', logo: '/logos/oracle.svg' },
      { name: 'SQL Server', logo: '/logos/sqlserver.svg' },
    ],
  },
  {
    category: 'Data & IA',
    items: [
      { name: 'Machine Learning', logo: '/logos/machinelearning.svg' },
      { name: 'NLP', logo: '/logos/nlp.svg' },
      { name: 'Scikit-learn', logo: '/logos/scikitlearn.svg' },
      { name: 'Pandas', logo: '/logos/pandas.svg' },
      { name: 'NumPy', logo: '/logos/numpy.svg' },
      { name: 'Spark', logo: '/logos/apachespark.svg' },
      { name: 'Hadoop', logo: '/logos/apachehadoop.svg' },
      { name: 'Hive', logo: '/logos/apachehive.svg' },
      { name: 'Power BI', logo: '/logos/powerbi.svg' },
      { name: 'Dataviz', logo: '/logos/datavisualization.svg' },
    ],
  },
  {
    category: 'Outils',
    items: [
      { name: 'Git', logo: '/logos/git.svg' },
      { name: 'Jenkins', logo: '/logos/jenkins.svg' },
      { name: 'SonarQube', logo: '/logos/sonarqubecloud.svg' },
      { name: 'Postman', logo: '/logos/postman.svg' },
      { name: 'Gantt', logo: '/logos/gantt.svg' },
      { name: 'Linux', logo: '/logos/linux.svg' },
      { name: 'Windows', logo: '/logos/windows.svg' },
    ],
  },
  {
    category: 'Méthodologies',
    items: [
      { name: 'Agile/Scrum', logo: '/logos/scrum.svg' },
      { name: 'UML', logo: '/logos/uml.svg' },
      { name: 'Merise', logo: '/logos/gestion.svg' },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Rigueur', logo: '/logos/soft.svg' },
      { name: 'Autonomie', logo: '/logos/soft.svg' },
      { name: 'Adaptabilité', logo: '/logos/soft.svg' },
      { name: 'Curiosité', logo: '/logos/soft.svg' },
      { name: 'Communication', logo: '/logos/soft.svg' },
      { name: 'Travail en équipe', logo: '/logos/soft.svg' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-skills">
      <h2 className="skills-title">Compétences</h2>
      <div className="skills-container">
        {skills.map((group, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{group.category}</h3>
            <ul className="skills-list">
              {group.items.map((item, i) => (
                <li key={i} className="skill-item">
                  <img src={item.logo} alt={item.name} className="skill-logo" />
                  <span className="skill-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;