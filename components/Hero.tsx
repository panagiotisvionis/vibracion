
import React from 'react';
import { TranslationSet } from '../types';

interface HeroProps {
  t: TranslationSet;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1029/1920/1080" 
          alt="Serene nature" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-serene-beige/20 via-serene-beige/80 to-serene-beige"></div>
      </div>

      <div className="relative z-10 text-center px-6 fade-in">
        <h1 className="text-6xl md:text-8xl lg:text-9xl mb-4 font-serif italic text-stone-800 tracking-tighter">
          {t.heroTagline}
        </h1>
        <p className="text-xl md:text-2xl tracking-[0.3em] uppercase text-serene-green font-light mb-8">
          {t.heroSub}
        </p>
        <div className="w-24 h-px bg-serene-green/30 mx-auto mb-10"></div>
        <p className="max-w-xl mx-auto text-lg text-stone-600 leading-relaxed italic">
          "Ένα δώρο φροντίδας και αγάπης ❤️ στον εαυτό σας και στους αγαπημένους σας."
        </p>
        <a 
          href="#services" 
          className="mt-12 inline-block px-10 py-4 border border-serene-green text-serene-green hover:bg-serene-green hover:text-white transition-all duration-500 uppercase tracking-widest text-sm rounded-full"
        >
          Explore the Experience
        </a>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
