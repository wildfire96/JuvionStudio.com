'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Brain, Check, ChevronDown } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  id: string;
  github: string;
  live?: string;
  image: string;
  isVideo: boolean;
  tags: string[];
}

export default function Projects() {
  const t = useTranslations('Projects');
  const navT = useTranslations('Navigation');
  const [expandedId, setExpandedId] = useState<string | null>('juvionhub');

  const projects: Project[] = [
    {
      id: 'juvionhub',
      github: 'https://github.com/wildfire96/JuvionHub',
      live: 'https://juvion-icoo0v2uz-joel-medina-de-freitas-juniors-projects.vercel.app',
      image: '/juvionhub.webp',
      isVideo: false,
      tags: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      id: 'juvionstudio',
      github: 'https://github.com/wildfire96/JuvionStudio.com',
      live: 'https://juvion-studio-com.vercel.app/pt',
      image: '/juvionstudio.webp',
      isVideo: false,
      tags: ['Next.js', 'Tailwind v4', 'Framer Motion', 'Lenis', 'Next-intl']
    },
    {
      id: 'lacrei_saude',
      github: 'https://github.com/wildfire96/Lacrei-Sa-de-Juvion',
      live: 'https://lacrei-sa-de-juvion.vercel.app',
      image: '/lacrei-saude.webp',
      isVideo: false,
      tags: ['React', 'TypeScript', 'WCAG Accessibility', 'Framer', 'System Design']
    }
  ];

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SectionWrapper id="projetos" className="border-t border-silver-dark/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="font-mono text-xs text-silver-dark uppercase tracking-widest block mb-2">
            {"// "}{t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-silver uppercase tracking-tighter">
            {navT('projects')}
          </h2>
        </div>
        <span className="font-mono text-xs text-silver-dark">
          ({projects.length} {projects.length === 1 ? 'PROJETO' : 'PROJETOS'})
        </span>
      </div>

      <div className="flex flex-col border-t border-silver-dark/20">
        {projects.map((project, idx) => {
          const isOpen = expandedId === project.id;
          return (
            <div
              key={project.id}
              className="border-b border-silver-dark/20 py-8 flex flex-col transition-colors px-4 -mx-4 hover:bg-silver/5"
            >
              <button
                className="w-full text-left flex items-center justify-between focus:outline-none rounded-none focus-visible:ring-1 focus-visible:ring-silver/40"
                onClick={() => handleToggle(project.id)}
                aria-expanded={isOpen}
                aria-controls={`project-panel-${project.id}`}
                id={`project-header-${project.id}`}
              >
                <div className="flex items-center gap-6 md:gap-10 w-full">
                  <span className="font-mono text-sm text-silver-dark shrink-0">
                    (0{idx + 1})
                  </span>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 w-full">
                    <h3 className={`font-display font-bold tracking-tight transition-all duration-300 ${isOpen ? 'text-3xl md:text-5xl text-silver' : 'text-2xl md:text-4xl text-silver-muted'}`}>
                      {t(`${project.id}.title`)}
                    </h3>
                    <span className="font-mono text-xs text-silver-dark tracking-wider uppercase">
                      {t(`${project.id}.category`)}
                    </span>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="w-10 h-10 rounded-none border border-silver-dark/30 flex items-center justify-center shrink-0 transition-colors hover:border-silver bg-offblack shadow-sm"
                >
                  <ChevronDown className="w-4 h-4 text-silver-muted" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`project-panel-${project.id}`}
                    role="region"
                    aria-labelledby={`project-header-${project.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: { type: 'spring', stiffness: 100, damping: 18 },
                        opacity: { duration: 0.25, delay: 0.1 }
                      }
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: 'easeInOut' },
                        opacity: { duration: 0.15 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 pb-4 flex flex-col xl:flex-row gap-10 pl-0 md:pl-[4.5rem]">
                      {/* Left Area: Context & Contributions */}
                      <div className="flex-1 space-y-8 xl:max-w-2xl">
                        <div className="space-y-4">
                          <p className="text-lg text-silver-muted font-body font-light leading-relaxed">
                            {t(`${project.id}.description`)}
                          </p>
                        </div>

                        {/* Contributions */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-silver-dark">
                            {"// "}{t('contributionsTitle')}
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map((num) => (
                              <li key={num} className="flex items-start gap-3 text-sm text-silver-muted font-body">
                                <Check className="w-4 h-4 text-silver-dark shrink-0 mt-0.5" />
                                <span>{t(`${project.id}.contribution${num}`)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Knowledge Impact */}
                        <div className="p-6 border border-silver-dark/20 bg-offblack-muted/40 rounded-sm flex gap-4 items-start">
                          <Brain className="w-6 h-6 text-silver-muted shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <h5 className="text-xs font-mono font-bold uppercase tracking-widest text-silver-dark">
                              {t('impactTitle')}
                            </h5>
                            <p className="text-sm text-silver-muted font-body leading-relaxed">
                              {t(`${project.id}.impact`)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right Area: Showcase Media & Specs */}
                      <div className="w-full xl:w-80 shrink-0 flex flex-col gap-6 justify-between">
                        {/* Media Box */}
                        <div className="relative w-full aspect-video border border-silver-dark/20 bg-offblack-muted overflow-hidden group/media rounded-none">
                          {project.isVideo ? (
                            <video
                              src={project.image}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover grayscale opacity-60 group-hover/media:grayscale-0 group-hover/media:opacity-100 transition-all duration-700 ease-out"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={t(`${project.id}.title`)}
                              fill
                              sizes="(max-width: 1200px) 100vw, 320px"
                              loading="lazy"
                              className="object-cover grayscale opacity-60 group-hover/media:grayscale-0 group-hover/media:opacity-100 transition-all duration-700 ease-out scale-102"
                            />
                          )}
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-silver-dark">
                            {"// "}{t('stackTitle')}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 text-xs border border-silver-dark/20 bg-silver/5 text-silver-muted rounded-none font-mono hover:border-silver-muted transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 pt-2">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-4 py-2.5 bg-silver text-offblack hover:bg-white transition-all text-xs font-mono font-bold rounded-none active:scale-[0.98]"
                            >
                              <span>{t('visitProject')}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2.5 border border-silver-dark/30 hover:border-silver text-silver hover:bg-silver/5 transition-all text-xs font-mono rounded-none active:scale-[0.98]"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>{t('viewOnGithub')}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

