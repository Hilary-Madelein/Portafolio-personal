'use client';
import { useEffect, useState } from 'react';

type HeroProps = { language: 'es' | 'en' };

export default function Hero({ language }: HeroProps) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains('dark'));
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="relative z-10 w-full max-w-[980px] mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Avatar grande */}
          <div className="avatar-lg rounded-full p-[2px] bg-gradient-to-r from-primary to-accent shadow-xl">
            <img
              src="/img/FOTO_PERSONAL.jpeg"
              alt={language === 'es' ? 'Foto de Hilary' : 'Hilary photo'}
              className="w-full h-full rounded-full object-cover avatar-ring"
            />
          </div>

          {/* Título */}
          <h1 className="text-[42px] sm:text-6xl font-extrabold tracking-tight text-hero-primary">
            {language === 'es' ? 'Hola, soy Hilary' : 'Hi, I’m Hilary'}
          </h1>

          {/* Subtítulo */}
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[.18em] text-hero-body opacity-80">
            {language === 'es'
              ? 'Ingeniera en Computación | Full Stack Dev'
              : 'Software Engineer | Full-Stack Dev'}
          </p>

          {/* Descripción */}
          <p className="max-w-[860px] text-lg sm:text-xl leading-relaxed text-hero-body">
            {language === 'es'
              ? 'Apasionada por crear soluciones tecnológicas y diseñar experiencias digitales únicas.'
              : 'Passionate about building tech solutions and crafting delightful digital experiences.'}
          </p>

          {/* Botones */}
          <div className="mt-2 flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="btn-hero">
              {language === 'es' ? 'Ver Proyectos' : 'View Projects'}
            </a>
            <a href="#contact" className="btn-hero-outline">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </a>
          </div>

          {/* Métricas */}
          <div className="mt-8 flex gap-10 text-sm text-hero-body">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-hero-primary">+10</span>
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl">🎓</span>
              {language === 'es' ? 'Computación' : 'CS Degree'}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl">🇪🇨</span>
              Ecuador
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
