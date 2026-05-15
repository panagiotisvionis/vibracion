import React from 'react';
import { TranslationSet } from '../types';
import { useReveal } from '../hooks/useReveal';

const BASE = import.meta.env.BASE_URL;

const About: React.FC<{ t: TranslationSet }> = ({ t }) => {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 px-6 bg-white overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-serene-green/4 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-serene-gold/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text side */}
          <div className="space-y-8">
            <div className="reveal">
              <span className="text-[10px] uppercase tracking-[0.4em] text-serene-gold font-bold block mb-4">
                Sound Healing · Kalamata
              </span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-stone-800 leading-tight">
                {t.everythingIsVibration}
              </h2>
            </div>

            <div className="reveal d-200">
              <div className="shimmer-line w-16 mb-8" />
              <p className="text-lg leading-relaxed text-stone-600 font-light">
                {t.everythingIsVibrationBody}
              </p>
            </div>

            <div className="reveal d-300 pl-6 border-l-2 border-serene-green/30">
              <p className="text-stone-500 italic text-lg leading-relaxed">
                "{t.aboutQuote}"
              </p>
            </div>

            <div className="reveal d-400 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-serene-green/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-serene-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-stone-800">{t.aboutEleniTitle}</p>
                <p className="text-xs text-serene-green uppercase tracking-widest">{t.aboutEleniRole}</p>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="reveal-right d-100 relative">
            {/* Main photo — store front */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl img-zoom aspect-[4/5]">
              <img
                src={`${BASE}photos/1485.jpg`}
                alt="Vibración Sound Healing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass border border-white/40 rounded-2xl px-6 py-4 shadow-xl float">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[5,9,6,12,8,5,10].map((h, i) => (
                    <span key={i} className="sound-bar bg-serene-green"
                      style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-800 uppercase tracking-widest">Sound Healing</p>
                  <p className="text-[10px] text-stone-500">{t.location}</p>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-serene-gold/20 rounded-full" />
            <div className="absolute -top-8 -right-8 w-48 h-48 border border-serene-green/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
