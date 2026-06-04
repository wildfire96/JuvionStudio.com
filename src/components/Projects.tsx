'use client';
import { useTranslations } from 'next-intl';
import { SectionWrapper } from './SectionWrapper';

export default function Projects() {
  const t = useTranslations('Navigation');
  
  return (
    <SectionWrapper id="projetos">
      <h2 className="text-4xl md:text-7xl font-display font-bold text-silver mb-16 uppercase tracking-tighter text-center">
        {t('projects')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="group cursor-pointer">
            <div className="w-full aspect-video bg-silver-dark/10 rounded-sm mb-4 overflow-hidden relative border border-silver-dark/20">
              <div className="absolute inset-0 bg-silver-dark/20 group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <h3 className="text-xl font-display text-silver">Estudo de Caso {item}</h3>
            <p className="text-sm font-body text-silver-muted">Web Design & Desenvolvimento</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
