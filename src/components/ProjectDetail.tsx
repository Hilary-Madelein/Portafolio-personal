'use client';

import Image from 'next/image';

type ProjectDetailProps = {
  language: 'es' | 'en';
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    repoUrl?: string;
  };
};

export default function ProjectDetail({ language, project }: ProjectDetailProps) {
  return (
    <section
      id="project-detail"
      className="min-h-screen px-8 sm:px-20 py-20 bg-neutralLight dark:bg-neutralDark text-primary dark:text-primary transition-colors duration-300"
    >
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        {project.title}
      </h2>

      {/* Imagen del proyecto */}
      <div className="flex justify-center mb-8">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="rounded-2xl shadow-lg dark:shadow-white/25 transition-transform transform hover:scale-105"
        />
      </div>

      {/* Descripción */}
      <p className="text-lg sm:text-xl text-accent dark:text-accent mb-6 text-center max-w-3xl mx-auto">
        {project.description}
      </p>

      {/* Tecnologías usadas */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-4 py-2 rounded-lg bg-accentLight dark:bg-accentDark text-neutralLight dark:text-neutralDark font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Enlaces */}
      <div className="flex justify-center gap-6">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold bg-primaryLight dark:bg-primaryDark text-accentLight dark:text-accentDark hover:opacity-90 transition"
          >
            {language === 'es' ? 'Ver Proyecto' : 'View Project'}
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold border border-accentLight dark:border-accentDark text-primary dark:text-primary hover:bg-accentLight dark:hover:bg-accentDark hover:text-neutralLight dark:hover:text-neutralLight transition"
          >
            {language === 'es' ? 'Repositorio' : 'Repository'}
          </a>
        )}
      </div>
    </section>
  );
}
