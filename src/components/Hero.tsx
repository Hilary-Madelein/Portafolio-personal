'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type HeroProps = {
  language: 'es' | 'en';
};

export default function Hero({ language }: HeroProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-8 sm:px-20 gap-12 transition-colors duration-300 bg-background text-primary"
    >
      {/* IZQUIERDA: Foto, nombre, presentación y botones */}
      <div className="flex flex-col justify-center items-center md:items-start gap-6 md:w-1/2">
        {/* Foto */}
        <div className="w-55 h-55 relative rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
        <img
          src='./img/FOTO_PERSONAL.jpeg'
          alt="Personal Icon"
          className="w-full h-full object-cover object-center"
        />
        </div>

        {/* Nombre con gradiente */}
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primaryLight to-accentLight dark:from-primaryDark dark:to-accentDark">
          {language === 'es' ? 'Hola, soy Hilary' : 'Hi, I am Hilary'}
        </h1>

        {/* Presentación */}
        <p className="text-lg sm:text-xl max-w-md opacity-80 text-accent dark:text-accent">
          {language === 'es'
            ? 'Desarrolladora Full Stack y diseñadora de experiencias digitales.'
            : 'Full Stack Developer and digital experiences designer.'}
        </p>

        {/* Botones con hover elegante */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-primaryLight dark:bg-primaryDark text-backgroundLight dark:text-backgroundDark hover:bg-accentLight dark:hover:bg-accentDark hover:text-primaryLight dark:hover:text-primaryDark shadow-md hover:shadow-xl"
          >
            {language === 'es' ? 'Ver Proyectos' : 'View Projects'}
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-primaryLight dark:bg-primaryDark text-backgroundLight dark:text-backgroundDark hover:bg-accentLight dark:hover:bg-accentDark hover:text-primaryLight dark:hover:text-primaryDark shadow-md hover:shadow-xl"
          >
            {language === 'es' ? 'Contacto' : 'Contact'}
          </a>
        </div>
      </div>

      {/* DERECHA: GIF animado */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={
            isDarkMode
              ? 'img/OSCURO.png'
              : 'img/CLARO.png'
          }
          alt="Hero GIF"
          className="w-full h-full object-cover  transition-transform transform hover:scale-110"
        />
      </div>
    </section>
  );
}
