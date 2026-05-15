import React, { useEffect, useRef } from 'react';
import { TranslationSet } from '../types';

const BASE = import.meta.env.BASE_URL;

const WAVE_HEIGHTS = [4, 7, 11, 7, 14, 9, 16, 10, 7, 13, 8, 4, 6, 10, 5, 14, 8, 11, 5, 7];

const Hero: React.FC<{ t: TranslationSet }> = ({ t }) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">

      {/* Parallax background */}
      <div ref={bgRef} className="absolute inset-0 scale-110 will-change-transform">
        <img
          src={`${BASE}photos/957.jpg`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/75 via-stone-900/45 to-stone-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/25 via-transparent to-stone-900/25" />

      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(20,17,14,0.6) 100%)'
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Sound wave decoration */}
        <div className="hero-sub flex items-end justify-center gap-[3px] mb-8 h-10">
          {WAVE_HEIGHTS.map((h, i) => (
            <span
              key={i}
              className="sound-bar bg-serene-gold"
              style={{
                height: `${h * 2.4}px`,
                animationDelay: `${i * 0.06}s`,
                animationDuration: `${0.9 + (i % 4) * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* Title */}
        <h1
          className="hero-title font-serif italic text-white tracking-tighter leading-none mb-5"
          style={{
            fontSize: 'clamp(4.5rem, 14vw, 10rem)',
            textShadow: '0 4px 40px rgba(0,0,0,0.35)',
          }}
        >
          {t.heroTagline}
        </h1>

        {/* Subtitle */}
        <div className="hero-sub flex items-center justify-center gap-5 mb-6">
          <div className="h-px w-14 bg-white/25" />
          <p className="text-[11px] md:text-xs tracking-[0.45em] uppercase text-white/65 font-light">
            {t.heroSub}
          </p>
          <div className="h-px w-14 bg-white/25" />
        </div>

        {/* Quote */}
        <p className="hero-cta max-w-md mx-auto text-base md:text-lg text-white/55 leading-relaxed italic font-light mb-12">
          "{t.heroQuote}"
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-serene-green text-white text-xs uppercase tracking-[0.28em] font-bold rounded-full hover:bg-white hover:text-stone-900 transition-all duration-500 shadow-xl shadow-serene-green/30"
          >
            {t.heroCtaExplore}
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-white/35 text-white text-xs uppercase tracking-[0.28em] font-bold rounded-full hover:bg-white/12 transition-all duration-500 backdrop-blur-sm"
          >
            {t.heroCtaBook}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/35 mb-3">Scroll</span>
        <div className="relative w-px h-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent animate-[scrollDrop_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100%);  opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
