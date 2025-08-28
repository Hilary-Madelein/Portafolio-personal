'use client';

type ContactProps = {
  language: 'es' | 'en';
  id?: string;
};

export default function Contact({ language }: ContactProps) {
  return (
    <section
      id="contact"
      className="min-h-screen px-8 sm:px-20 py-20 bg-background dark:bg-background text-primary dark:text-primary transition-colors duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        {language === 'es' ? 'Contacto' : 'Contact'}
      </h2>

      <form className="max-w-2xl mx-auto flex flex-col gap-6">
        <input
          type="text"
          placeholder={language === 'es' ? 'Nombre' : 'Name'}
          className="p-4 rounded-lg bg-primary dark:bg-primary text-primary dark:text-primary border border-accent dark:border-accent focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent transition"
        />
        <input
          type="email"
          placeholder={language === 'es' ? 'Correo electrónico' : 'Email'}
          className="p-4 rounded-lg bg-primary dark:bg-primary text-primary dark:text-primary border border-accent dark:border-accent focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent transition"
        />
        <textarea
          placeholder={language === 'es' ? 'Mensaje' : 'Message'}
          rows={6}
          className="p-4 rounded-lg bg-primary dark:bg-primary text-primary dark:text-primary border border-accent dark:border-accent focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent transition"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg font-semibold bg-accent dark:bg-accent text-primary dark:text-primary hover:opacity-90 transition"
        >
          {language === 'es' ? 'Enviar' : 'Send'}
        </button>
      </form>
    </section>
  );
}
