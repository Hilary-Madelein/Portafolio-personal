'use client';

import About from '@/components/About';
import Hero from '@/components/Hero';
import { useLanguage } from '../context/LanguageContext';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div>
      <SectionWrapper>
        <Hero id="hero" language={language} />
      </SectionWrapper>

      <SectionWrapper>
        <About id="about" language={language} />
      </SectionWrapper>

      <SectionWrapper>
        <Skills id="skills" language={language} />
      </SectionWrapper>

      <SectionWrapper>
        <Projects id="projects" language={language} />
      </SectionWrapper>

      <SectionWrapper>
        <Contact id="contact" language={language} />
      </SectionWrapper>

    </div>
  );
}
