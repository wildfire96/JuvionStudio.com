'use client';
import { motion } from 'framer-motion';

export function SectionWrapper({ children, id, className = "" }: { children: React.ReactNode, id: string, className?: string }) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-32 px-6 md:px-12 flex flex-col justify-center ${className}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.section>
  );
}
