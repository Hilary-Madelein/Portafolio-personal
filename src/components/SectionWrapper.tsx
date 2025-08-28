'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionWrapperProps = {
  children: ReactNode;
};

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}
