'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SectionWrapper } from './SectionWrapper';

export default function Services() {
  const t = useTranslations('Services');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const serviceIds = ['item1', 'item2', 'item3', 'item4'];

  return (
    <SectionWrapper id="servicos" className="border-t border-silver-dark/20">
      <h2 className="text-4xl md:text-7xl font-display font-bold text-silver mb-16 uppercase tracking-tighter">
        {t('title')}
      </h2>
      <div className="flex flex-col border-t border-silver-dark/20">
        {serviceIds.map((id, idx) => {
          const isOpen = openIndex === idx;
          const tags = t(`${id}.tags`).split(', ');
          
          return (
            <div 
              key={id} 
              className="group border-b border-silver-dark/20 py-6 md:py-8 flex flex-col hover:bg-silver/5 transition-colors px-4 -mx-4"
            >
              <button 
                className="w-full text-left flex items-center justify-between focus:outline-none rounded-sm"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={`service-panel-${idx}`}
              >
                <div className="flex items-center gap-4 md:gap-8 w-full">
                  <span className="font-mono text-sm text-silver-dark group-hover:text-silver-muted">(00{idx + 1})</span>
                  <h3 className={`font-display transition-all duration-500 ${isOpen ? 'text-3xl md:text-5xl text-silver' : 'text-2xl md:text-4xl text-silver-muted group-hover:text-silver'}`}>
                    {t(`${id}.title`)}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-silver-dark/30 flex items-center justify-center shrink-0 transition-colors group-hover:border-silver-muted bg-offblack shadow-sm">
                  <span className="text-xl text-silver-muted font-light mb-0.5">{isOpen ? '−' : '+'}</span>
                </div>
              </button>

              <div 
                id={`service-panel-${idx}`}
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="pt-8 pb-4 flex flex-col md:flex-row gap-8 items-start pl-0 md:pl-[4.5rem]">
                    <div className="flex-1 max-w-2xl">
                      <p className="text-lg text-silver-muted font-body font-light leading-relaxed">
                        {t(`${id}.description`)}
                      </p>
                    </div>
                    <div className="flex-1 md:ml-auto md:max-w-xs">
                      <h5 className="text-xs font-body font-bold uppercase tracking-widest text-silver-dark mb-4">{t('categories')}</h5>
                      <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                          <span key={tag} className="px-4 py-2 rounded-full border border-silver-dark/20 text-xs font-body text-silver-muted bg-silver/5 hover:bg-silver/10 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
