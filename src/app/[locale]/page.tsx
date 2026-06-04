import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

// Carregamento dinâmico e preguiçoso para as seções abaixo da dobra
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
