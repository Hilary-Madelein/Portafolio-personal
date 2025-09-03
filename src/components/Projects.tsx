'use client';

import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  details?: string;
};

type ProjectsProps = {
  language: 'es' | 'en';
  id?: string;
};

const projects: Project[] = [
  {
    title: 'Portafolio Web',
    description:
      'Portafolio personal minimalista y responsivo con buenas prácticas de accesibilidad.',
    image: '/projects/portfolio.png',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com/tuusuario/portfolio',
    details: '/projects/portfolio',
  },
  {
    title: 'E-commerce',
    description:
      'Tienda online con carrito, pagos integrados y panel administrativo.',
    image: '/projects/ecommerce.png',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/tuusuario/ecommerce',
    details: '/projects/ecommerce',
  },
];

export default function Projects({ language, id = 'projects' }: ProjectsProps) {
  const t = (es: string, en: string) => (language === 'es' ? es : en);

  return (
    <section
      id={id}
      className="min-h-screen hero"
      aria-label={t('Sección Proyectos', 'Projects section')}
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-hero-primary">
          {t('Proyectos', 'Projects')}
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
            key={project.title}
            className="
              rounded-2xl overflow-hidden flex flex-col
              bg-card dark:bg-card     /* CLARO: blanco | OSCURO: neutralDark */
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              hover:shadow-[0_14px_36px_rgba(209,77,114,0.15)]
              transition
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.45)]
              dark:hover:shadow-[0_16px_40px_rgba(255,157,180,0.2)]
            "
          >          
              {/* Imagen */}
              <div className="relative w-full h-56 sm:h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Contenido */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-hero-primary">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-hero-body">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="mt-3 flex flex-wrap gap-2 justify-start">
                  {project.tech.map((tech) => (
                    <span
                    key={tech}
                    className="
                      px-3 py-1 rounded-full text-sm
                      bg-secondary text-primary border border-primary/10 shadow-sm
                      dark:bg-secondary dark:text-fontDark dark:border-white/10
                    "
                  >
                    {tech}
                  </span>
                  
                  ))}
                </div>

                {/* Acciones */}
                <div className="mt-5 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                        bg-card border border-primary/20 text-primary shadow-sm hover:shadow-md transition
                        dark:bg-transparent dark:border-white/20 dark:text-white
                        dark:hover:bg-white/5
                      "
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}

                  {project.details && (
                    <a
                      href={project.details}
                      className="
                        inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                        bg-primary text-background shadow-md hover:shadow-lg transition text-amber-50
                        dark:bg-primary dark:text-background
                      "
                    >
                      <ExternalLink size={16} />
                      {t('Detalles', 'Details')}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
