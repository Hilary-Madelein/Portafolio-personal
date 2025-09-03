'use client';

type ContactProps = {
  language: 'es' | 'en';
  id?: string;
};

export default function Contact({ language, id = 'contact' }: ContactProps) {
  return (
    <section
      id={id}
      className="hero min-h-screen"
      aria-label={language === 'es' ? 'Sección de Contacto' : 'Contact Section'}
    >
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-hero-primary">
          {language === 'es' ? 'Contacto' : 'Contact'}
        </h2>

        <form className="mt-12 flex flex-col gap-6">
          {/* Nombre */}
          <input
            type="text"
            placeholder={language === 'es' ? 'Nombre' : 'Name'}
            className="
              p-4 rounded-2xl
              bg-card dark:bg-neutral
              shadow-md dark:shadow-[0_4px_12px_rgba(0,0,0,0.35)]
              focus:outline-none focus:ring-2 focus:ring-primary/50
              text-hero-body dark:text-fontDark
              transition
            "
          />

          {/* Email */}
          <input
            type="email"
            placeholder={language === 'es' ? 'Correo electrónico' : 'Email'}
            className="
              p-4 rounded-2xl
              bg-card dark:bg-neutral
              shadow-md dark:shadow-[0_4px_12px_rgba(0,0,0,0.35)]
              focus:outline-none focus:ring-2 focus:ring-primary/50
              text-hero-body dark:text-fontDark
              transition
            "
          />

          {/* Mensaje */}
          <textarea
            placeholder={language === 'es' ? 'Mensaje' : 'Message'}
            rows={6}
            className="
              p-4 rounded-2xl
              bg-card dark:bg-neutral
              shadow-md dark:shadow-[0_4px_12px_rgba(0,0,0,0.35)]
              focus:outline-none focus:ring-2 focus:ring-primary/50
              text-hero-body dark:text-fontDark
              transition
            "
          />

          {/* Botón */}
          <button
            type="submit"
            className="btn-hero"
          >
            {language === 'es' ? 'Enviar' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
}
