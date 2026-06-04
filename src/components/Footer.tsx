import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Navigation');
  
  return (
    <footer className="pt-12 pb-32 md:pb-40 px-6 md:px-12 flex flex-col items-center justify-center border-t border-silver-dark/20 text-silver-muted font-body text-sm mt-32">
      <div className="flex gap-6 mb-6">
        <a href="#sobre" className="hover:text-silver transition-colors">{t('about')}</a>
        <a href="#servicos" className="hover:text-silver transition-colors">{t('services')}</a>
        <a href="#contato" className="hover:text-silver transition-colors">{t('contact')}</a>
      </div>
      <p>© {new Date().getFullYear()} Joel Medina. Juvion Studio.</p>
    </footer>
  );
}
