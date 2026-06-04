'use client';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

const LogoIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 100 100" fill="none" stroke="url(#silverGradient)" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
    <defs>
      <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#a3a3a3" />
        <stop offset="70%" stopColor="#e5e5e5" />
        <stop offset="100%" stopColor="#525252" />
      </linearGradient>
    </defs>
    {/* J Stem */}
    <path d="M42,32 L52,26 L52,55" />
    {/* Left pointing arrow loop */}
    <path d="M52,55 C52,75 30,75 22,60" />
    <path d="M32,68 L22,60 L32,52" />
    {/* Right pointing arrow curve */}
    <path d="M25,42 C45,28 65,72 82,55" />
    <path d="M72,47 L82,55 L72,63" />
  </svg>
);

const UserIcon = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>);
const BriefcaseIcon = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>);
const GridIcon = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>);
const MailIcon = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);
const GlobeIcon = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>);

export function NavigationBar({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const t = useTranslations('Navigation');
  const nextLocale = currentLocale === 'pt' ? 'en' : 'pt';

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const lenis = (window as any).__lenis__;
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(targetElement, { offset: -80, duration: 1.2 });
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-max transition-all duration-500">
      <nav className="flex items-center justify-between px-3 md:px-6 py-2 md:py-3 bg-offblack/80 backdrop-blur-md border border-silver/10 rounded-full text-silver shadow-2xl">
        
        {/* Logo */}
        <a href="#hero" onClick={handleAnchorClick} className="p-2 md:p-3 hover:bg-silver/10 rounded-full transition-colors active:scale-95 flex items-center gap-3" aria-label="Home">
          <LogoIcon />
          <span className="hidden md:block font-display font-bold text-lg tracking-tight pt-1">JM.</span>
        </a>

        <div className="w-px h-6 bg-silver/20 mx-2 md:mx-6"></div>

        {/* Links */}
        <div className="flex items-center gap-1 md:gap-2">
          <a href="#sobre" onClick={handleAnchorClick} className="p-3 md:px-5 md:py-3 hover:bg-silver/10 rounded-full transition-colors active:scale-95 flex items-center gap-3 group" aria-label="Sobre">
            <UserIcon />
            <span className="hidden md:block font-body text-[10px] font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 mt-0.5">{t('about')}</span>
          </a>
          <a href="#servicos" onClick={handleAnchorClick} className="p-3 md:px-5 md:py-3 hover:bg-silver/10 rounded-full transition-colors active:scale-95 flex items-center gap-3 group" aria-label="Serviços">
            <BriefcaseIcon />
            <span className="hidden md:block font-body text-[10px] font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 mt-0.5">{t('services')}</span>
          </a>
          <a href="#contato" onClick={handleAnchorClick} className="p-3 md:px-5 md:py-3 hover:bg-silver/10 rounded-full transition-colors active:scale-95 flex items-center gap-3 group" aria-label="Contato">
            <MailIcon />
            <span className="hidden md:block font-body text-[10px] font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 mt-0.5">{t('contact')}</span>
          </a>
        </div>
        
        <div className="w-px h-6 bg-silver/20 mx-2 md:mx-6"></div>
        
        {/* Language */}
        <Link 
          href={pathname} 
          locale={nextLocale} 
          className="p-3 md:px-5 md:py-3 hover:bg-silver/10 rounded-full transition-colors active:scale-95 flex items-center gap-3 relative group" 
          aria-label="Trocar Idioma"
        >
          <GlobeIcon />
          <span className="hidden md:block font-body text-[10px] font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 mt-0.5">
            {nextLocale}
          </span>
          <span className="md:hidden absolute text-[8px] font-bold bottom-1 right-1 bg-offblack rounded-full w-4 h-4 flex items-center justify-center border border-silver/20">
            {nextLocale.toUpperCase()}
          </span>
        </Link>
      </nav>
    </div>
  );
}
