'use client';

type SkillsProps = {
  language: 'es' | 'en';
  id?: string;
};

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'TailwindCSS', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
];

export default function Skills({ language }: SkillsProps) {
  return (
    <section
      id="skills"
      className="min-h-screen px-8 sm:px-20 py-20 bg-background dark:bg-background text-primary dark:text-primary transition-colors duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        {language === 'es' ? 'Habilidades' : 'Skills'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 rounded-lg shadow-md dark:shadow-white/20 bg-primary dark:bg-primary transition-transform transform hover:scale-105"
          >
            <h3 className="font-semibold text-xl mb-2">{skill.name}</h3>
            <p className="text-accent dark:text-accent">{language === 'es' ? skill.level : skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
