'use client';

import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

type ProjectsProps = {
  language: 'es' | 'en';
  id?: string;
};

const projects: Project[] = [
  {
    title: 'Portafolio Web',
    description: 'Un portafolio personal desarrollado con Next.js y TailwindCSS.',
    image: '/projects/portfolio.png',
    link: '#',
  },
  {
    title: 'E-commerce',
    description: 'Tienda online con carrito de compras y pasarela de pago.',
    image: '/projects/ecommerce.png',
    link: '#',
  },
];

export default function Projects({ language }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 sm:px-20 py-20 bg-background dark:bg-background text-primary dark:text-primary transition-colors duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        {language === 'es' ? 'Proyectos' : 'Projects'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg overflow-hidden shadow-md dark:shadow-white/20 bg-primary dark:bg-primary transition-transform transform hover:scale-105"
          >
            <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover w-full h-64"/>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-accent dark:text-accent">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 rounded bg-accent dark:bg-accent text-primary dark:text-primary font-medium hover:opacity-90 transition"
                >
                  {language === 'es' ? 'Ver proyecto' : 'View Project'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
