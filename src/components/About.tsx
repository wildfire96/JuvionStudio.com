import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { SectionWrapper } from './SectionWrapper';

export default function About() {
  const t = useTranslations('Navigation');
  
  return (
    <SectionWrapper id="sobre">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-silver mb-8 uppercase tracking-tighter">
            {t('about')}
          </h2>
          <p className="text-lg md:text-xl text-silver-muted font-body font-light leading-relaxed mb-6">
            Sou Joel Medina, Engenheiro Front-End e Web Designer. Minha especialidade é unir design imersivo e engenharia de alta performance sem concessões.
          </p>
          <p className="text-lg md:text-xl text-silver-muted font-body font-light leading-relaxed mb-6">
            Utilizo Next.js, React, TypeScript e Tailwind CSS orquestrados com bases de dados no Supabase e deploys na Vercel para entregar produtos digitais impecáveis. Mais do que escrever código, eu construo experiências web onde cada pixel tem um propósito exato e cada animação carrega uma intenção clara.
          </p>
        </div>
        <div className="w-full aspect-[4/5] bg-silver-dark/10 rounded-sm border border-silver-dark/20 relative overflow-hidden group">
          <Image 
            src="/profile.jpeg"
            alt="Joel Medina"
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
