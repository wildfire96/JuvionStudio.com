import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { SectionWrapper } from './SectionWrapper';

export default function About() {
  const t = useTranslations('About');
  
  return (
    <SectionWrapper id="sobre">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-silver mb-8 uppercase tracking-tighter">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-silver-muted font-body font-light leading-relaxed mb-6">
            {t('description1')}
          </p>
          <p className="text-lg md:text-xl text-silver-muted font-body font-light leading-relaxed mb-6 font-semibold border-l-2 border-silver/40 pl-4 py-1">
            {t('description2')}
          </p>
          <p className="text-lg md:text-xl text-silver-muted font-body font-light leading-relaxed mb-6">
            {t('description3')}
          </p>
        </div>
        <div className="w-full aspect-[4/5] bg-silver-dark/10 rounded-sm border border-silver-dark/20 relative overflow-hidden group">
          <Image 
            src="/profile.jpeg"
            alt={t('imageAlt')}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-offblack/90 via-offblack/20 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </SectionWrapper>
  );
}
