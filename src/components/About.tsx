'use client';

type AboutProps = {
  language: 'es' | 'en';
  id?: string;
};

export default function About({ language, id = 'about' }: AboutProps) {
  const t = (es: string, en: string) => (language === 'es' ? es : en);

  const education = [
    {
      title: t('Ingeniería en Computación', 'B.S. in Computer Engineering'),
      org: t('Universidad XYZ', 'XYZ University'),
      time: '2019 — 2023',
      detail: t(
        'Énfasis en desarrollo web, algorítmica y sistemas. Graduación con honores.',
        'Focus on web development, algorithms, and systems. Graduated with honors.'
      ),
    },
  ];

  const projects = [
    {
      name: t('Plataforma de Reservas', 'Booking Platform'),
      role: t('Full-Stack Dev', 'Full-Stack Dev'),
      stack: 'Next.js · Node.js · PostgreSQL · Tailwind',
      result: t(
        'Optimización del flujo de reservas y panel administrativo en tiempo real.',
        'Optimized booking flow and shipped a real-time admin panel.'
      ),
    },
    {
      name: t('E-commerce Minimal', 'Minimal E-commerce'),
      role: t('Frontend', 'Frontend'),
      stack: 'React · Stripe · Zustand',
      result: t(
        'Checkout seguro y diseño limpio adaptado a móviles.',
        'Secure checkout and clean, mobile-first design.'
      ),
    },
  ];

  return (
    <section
      id={id}
      className="min-h-screen hero"
      aria-label={t('Sección Sobre mí', 'About Me section')}
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20">
        {/* Título e intro */}
        <div className="text-center max-w-[860px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hero-primary">
            {t('Sobre mí', 'About Me')}
          </h2>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-hero-body">
            {t(
              'Desarrolladora Full Stack enfocada en construir experiencias accesibles y con un diseño delicado. Me gusta trabajar end-to-end y colaborar con equipos para lanzar productos de calidad.',
              'Full-Stack developer focused on accessible, delightful experiences. I enjoy working end-to-end and collaborating with teams to ship quality products.'
            )}
          </p>
        </div>

        {/* Grid principal */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Educación */}
          <article className="bg-card rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-hero-primary mb-4">
              {t('Educación', 'Education')}
            </h3>
            {education.map((e, i) => (
              <div
                key={i}
                className="rounded-xl bg-surface px-4 py-5 shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
              >
                <div className="font-semibold">{e.title}</div>
                <div className="text-sm text-hero-body/80">
                  {e.org} · {e.time}
                </div>
                <p className="mt-2 text-hero-body">{e.detail}</p>
              </div>
            ))}
          </article>

          {/* Proyectos */}
          <article className="bg-card rounded-2xl shadow-md p-6 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-hero-primary">
                {t('Experiencia en Proyectos', 'Project Experience')}
              </h3>
              <a
                href="#projects"
                className="text-sm font-semibold text-primary hover:underline"
              >
                {t('Ver más →', 'See more →')}
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-surface px-5 py-6 shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
                >
                  <h4 className="text-lg font-semibold">{p.name}</h4>
                  <div className="mt-1 text-sm text-hero-body/80">
                    {p.role} · {p.stack}
                  </div>
                  <p className="mt-3 text-hero-body">{p.result}</p>
                </div>
              ))}
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
