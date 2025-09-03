'use client';

import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        bg-accent
        text-primary w-full py-10 px-6 sm:px-20
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        {/* Navegación */}
        <nav className="flex gap-8 flex-wrap justify-center sm:justify-start text-base font-medium">
          <a
            href="#about"
            className="hover:underline hover:underline-offset-4 transition-colors duration-200"
          >
            {language === 'es' ? 'Sobre mí' : 'About'}
          </a>
          <a
            href="#projects"
            className="hover:underline hover:underline-offset-4 transition-colors duration-200"
          >
            {language === 'es' ? 'Proyectos' : 'Projects'}
          </a>
          <a
            href="#contact"
            className="hover:underline hover:underline-offset-4 transition-colors duration-200"
          >
            {language === 'es' ? 'Contacto' : 'Contact'}
          </a>
        </nav>

        {/* Redes sociales */}
        <div className="flex gap-5">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <Github className="text-primary dark:text-primary" size={22} />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <Linkedin className="text-primary dark:text-primary" size={22} />
          </a>
          <a
            href="mailto:tuemail@example.com"
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <Mail className="text-primary dark:text-primary" size={22} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-primary/80 dark:text-primary/70">
        © {currentYear}{' '}
        {language === 'es'
          ? 'Todos los derechos reservados.'
          : 'All rights reserved.'}
      </div>
    </footer>
  );
}
