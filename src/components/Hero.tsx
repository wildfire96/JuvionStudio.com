'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Index');
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Checa a API de Network Information do navegador
    if ('connection' in navigator) {
      const conn = (navigator as any).connection;
      // Consideramos rede lenta: 3G, 2G ou se o usuário ativou economia de dados
      if (
        conn.effectiveType === 'slow-2g' || 
        conn.effectiveType === '2g' || 
        conn.effectiveType === '3g' || 
        conn.downlink < 10 ||
        conn.saveData
      ) {
        setIsSlowConnection(true);
      }
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-offblack pointer-events-none">
        {hasMounted && !isSlowConnection ? (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          >
            <source src="/video-project.mp4" type="video/mp4" />
          </video>
        ) : hasMounted && isSlowConnection ? (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 pointer-events-none" 
            style={{ backgroundImage: "url('/hero-poster.jpg')" }}
            aria-hidden="true"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-offblack opacity-30" />
        )}
        {/* Overlay invisível que cobre o player inteiramente */}
        <div className="absolute inset-0 bg-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 z-0 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center mb-16 md:mb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-8xl lg:text-[11rem] font-display font-bold leading-[0.85] tracking-tighter text-silver uppercase max-w-6xl text-balance text-center">
            {t('title')}
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-center"
        >
          <p className="mt-8 text-xl md:text-2xl text-silver-muted font-body font-light tracking-wide max-w-xl text-balance text-center mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
