'use client';

type SkillsProps = { language: 'es' | 'en'; id?: string };

/* Devicon (iconos oficiales con color).
   Si prefieres locales, guarda /public/icons/<slug>.svg y cambia el src. */
function Devicon({ slug, alt }: { slug: string; alt: string }) {
  const src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;
  return (
    <img
      src={src}
      alt={alt}
      className="w-10 h-10 object-contain"
      loading="lazy"
    />
  );
}

/* Mini-card: imagen arriba, nombre abajo (sin borde, sombra rosada, hover zoom) */
function TechTile({ label, slug }: { label: string; slug: string }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center gap-2
        rounded-xl bg-surface
        shadow-[0_8px_20px_rgba(209,77,114,0.10)]
        hover:shadow-[0_12px_28px_rgba(209,77,114,0.18)]
        transition transform hover:scale-105
        px-3 py-4
      "
      title={label}
    >
      <Devicon slug={slug} alt={label} />
      <span className="text-xs sm:text-sm font-medium text-primary">{label}</span>
    </div>
  );
}

export default function Skills({ language, id = 'skills' }: SkillsProps) {
  const t = (es: string, en: string) => (language === 'es' ? es : en);

  const groups: { title: string; items: Array<{ label: string; slug: string }> }[] = [
    {
      title: t('Lenguajes & Frameworks', 'Languages & Frameworks'),
      items: [
        { label: 'Java', slug: 'java' },
        { label: 'Python', slug: 'python' },
        { label: 'JavaScript', slug: 'javascript' },
        { label: 'TypeScript', slug: 'typescript' },
        { label: 'Dart', slug: 'dart' },
        { label: 'Flutter', slug: 'flutter' },
        { label: 'Node.js', slug: 'nodejs' },
        { label: 'React', slug: 'react' },
        { label: 'Next.js', slug: 'nextjs' },
        { label: 'TailwindCSS', slug: 'tailwindcss' },
      ],
    },
    {
      title: t('Bases de Datos', 'Databases'),
      items: [
        { label: 'MySQL', slug: 'mysql' },
        { label: 'PostgreSQL', slug: 'postgresql' },
        { label: 'MongoDB', slug: 'mongodb' },
        { label: 'MariaDB', slug: 'mariadb' },
      ],
    },
    {
      title: t('Herramientas & Plataformas', 'Tools & Platforms'),
      items: [
        { label: 'Arduino', slug: 'arduino' },
        { label: 'Cisco', slug: 'cisco' },
        { label: 'Azure', slug: 'azure' },
        { label: 'Canva', slug: 'canva' },
        { label: 'CSS3', slug: 'css3' },
        { label: 'HTML5', slug: 'html5' },
        { label: 'StarUML', slug: 'staruml' },
        { label: 'Docker', slug: 'docker' },
        { label: 'NGINX', slug: 'nginx' },
        { label: 'Insomnia', slug: 'insomnia' },
      ],
    },
    {
      title: t('Proyecto & Control de Versiones', 'Project & Version Control'),
      items: [
        { label: 'Git', slug: 'git' },
        { label: 'GitHub', slug: 'github' },
        { label: 'GitLab', slug: 'gitlab' },
        { label: 'Trello', slug: 'trello' },
        { label: 'Jira', slug: 'jira' },
        { label: 'Taiga', slug: 'taiga' },
        { label: 'Monday', slug: 'monday' },
      ],
    },
  ];

  return (
    <section id={id} className="hero bg-transparent min-h-screen">
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-hero-primary">
          {t('Habilidades', 'Skills')}
        </h2>

        {/* Tarjetas de categoría SIN borde */}
        <div className="mt-10 space-y-10">
          {groups.map((g) => (
            <article
              key={g.title}
              className="
                rounded-2xl bg-card dark:bg-card
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                p-6 sm:p-7
              "
            >
              <h3 className="text-lg sm:text-xl font-bold text-hero-primary mb-5">
                {g.title}
              </h3>

              {/* Grid de mini-cards */}
              <div
                className="
                  grid gap-3 sm:gap-4
                  grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
                "
              >
                {g.items.map((it) => (
                  <TechTile key={it.label} label={it.label} slug={it.slug} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
