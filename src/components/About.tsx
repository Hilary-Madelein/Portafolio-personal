'use client';

type AboutProps = {
  language: 'es' | 'en';
  id?: string;
};

export default function About({ language }: AboutProps) {
  return (
    <section
      id="about"
      className="min-h-screen px-8 sm:px-20 py-20 bg-background dark:bg-background text-primary dark:text-primary transition-colors duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        {language === 'es' ? 'Sobre mí' : 'About Me'}
      </h2>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-lg sm:text-xl text-accent dark:text-accent">
          {language === 'es'
            ? 'Soy Astrid, desarrolladora Full Stack apasionada por crear experiencias digitales intuitivas y funcionales. Me especializo en el desarrollo web utilizando tecnologías modernas como React, Node.js, TypeScript y TailwindCSS.'
            : 'I am Astrid, a Full Stack developer passionate about creating intuitive and functional digital experiences. I specialize in web development using modern technologies such as React, Node.js, TypeScript, and TailwindCSS.'}
        </p>

        <p className="text-lg sm:text-xl text-accent dark:text-accent">
          {language === 'es'
            ? 'Me encanta aprender nuevas tecnologías, resolver problemas complejos y colaborar en equipos que buscan impactar positivamente en el mundo digital.'
            : 'I love learning new technologies, solving complex problems, and collaborating in teams that aim to make a positive impact in the digital world.'}
        </p>

        <p className="text-lg sm:text-xl text-accent dark:text-accent">
          {language === 'es'
            ? 'Cuando no estoy programando, disfruto del diseño gráfico, la fotografía y explorar nuevas tendencias en tecnología y UX/UI.'
            : "When I'm not coding, I enjoy graphic design, photography, and exploring new trends in technology and UX/UI."}
        </p>
      </div>
    </section>
  );
}
