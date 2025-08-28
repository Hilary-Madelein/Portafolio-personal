'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'hero', label: language === 'es' ? 'Inicio' : 'Home' },
    { id: 'about', label: language === 'es' ? 'Sobre mí' : 'About' },
    { id: 'skills', label: language === 'es' ? 'Habilidades' : 'Skills' },
    { id: 'projects', label: language === 'es' ? 'Proyectos' : 'Projects' },
    { id: 'contact', label: language === 'es' ? 'Contacto' : 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 flex flex-col md:flex-row justify-between items-center p-6 shadow-md transition-colors duration-300 bg-secondary dark:bg-secondary">
      <div className="flex justify-between w-full md:w-auto items-center">
        <h1 className="text-xl font-bold text-primary dark:text-primary">
          Mi Portafolio
        </h1>

        {/* Botón hamburguesa en móviles */}
        <button
          className="md:hidden px-3 py-2 rounded text-primary dark:text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Enlaces */}
      <div
        className={`flex-col md:flex-row md:flex gap-6 items-center w-full md:w-auto mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden md:flex'
          }`}
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="font-semibold text-primary dark:text-primary hover:underline hover:underline-offset-4 transition"
            onClick={() => setIsOpen(false)}
          >
            {section.label}
          </a>
        ))}

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded hover:opacity-90 transition bg-background dark:bg-background text-primary dark:text-primary"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>

        <button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded font-semibold hover:opacity-90 transition bg-background dark:bg-background text-primary dark:text-primary"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </nav>
  );
}
