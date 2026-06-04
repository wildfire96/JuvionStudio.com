'use client';
import { useTranslations, useLocale } from 'next-intl';
import { SectionWrapper } from './SectionWrapper';
import { useEffect } from 'react';

export default function Contact() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        (function (C: any, A: string, L: string) { 
          let p = function (a: any, ar: any) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); } as any; 
              const namespace = ar[1]; api.q = api.q || []; 
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar); return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");

        const Cal = (window as any).Cal;
        const eventName = locale === 'pt' ? 'chat-rapido' : 'quick-chat';

        Cal("init", eventName, {origin:"https://app.cal.com"});

        Cal.ns[eventName]("inline", {
          elementOrSelector: `#my-cal-inline-${eventName}`,
          config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
          calLink: `joel-medina-de-freitas-junior-nzh8a0/${eventName}`,
        });

        Cal.ns[eventName]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        observer.disconnect();
      }
    }, { rootMargin: '300px' });

    const el = document.getElementById('contato');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [locale]);

  const eventNameId = locale === 'pt' ? 'chat-rapido' : 'quick-chat';

  return (
    <SectionWrapper id="contato" className="border-t border-silver-dark/20 text-center items-center">
      <h2 className="text-4xl md:text-7xl font-display font-bold text-silver mb-8 uppercase tracking-tighter">
        {t('contact')}
      </h2>
      <p className="text-xl text-silver-muted font-body font-light mb-12 max-w-2xl mx-auto">
        Pronto para elevar a presença digital da sua marca ao nível do design de elite? 
        Agende uma conversa e vamos construir o futuro.
      </p>
      
      {/* Cal.com Embed Container */}
      <div className="w-full max-w-4xl mx-auto h-[600px] md:h-[700px] bg-offblack/50 rounded-2xl overflow-hidden border border-silver-dark/20 shadow-2xl relative z-10">
        <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id={`my-cal-inline-${eventNameId}`}></div>
      </div>
    </SectionWrapper>
  );
}
