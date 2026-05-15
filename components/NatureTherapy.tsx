import React from 'react';
import { TranslationSet } from '../types';
import { useReveal } from '../hooks/useReveal';

const BASE = import.meta.env.BASE_URL;

const NATURE_PHOTOS = [
  { src: '957.jpg',  alt: 'Singing bowl by the water' },
  { src: '1414.jpg', alt: 'Open-air sound healing session' },
  { src: '1415.jpg', alt: 'Sound bowls under the open sky' },
  { src: '1487.jpg', alt: 'Healing garden sanctuary' },
];

const NatureTherapy: React.FC<{ t: TranslationSet }> = ({ t }) => {
  const ref = useReveal();

  return (
    <section
      id="nature"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 overflow-hidden bg-white"
    >
      {/* Full-width background blur strip */}
      <div className="absolute top-0 left-0 right-0 h-full pointer-events-none overflow-hidden">
        <img
          src={`${BASE}photos/957.jpg`}
          alt=""
          className="w-full h-full object-cover opacity-6"
          style={{ filter: 'blur(40px)', transform: 'scale(1.1)', opacity: 0.06 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-serene-green/30" />
            <svg className="w-5 h-5 text-serene-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
            <div className="h-px w-10 bg-serene-green/30" />
          </div>
          <span className="reveal text-[10px] uppercase tracking-[0.45em] text-serene-gold font-bold block mb-4">
            Outdoor Sessions
          </span>
          <h2 className="reveal d-100 text-4xl md:text-5xl font-serif italic text-stone-800 mb-4">
            {t.natureSectionTitle}
          </h2>
          <p className="reveal d-200 text-stone-500 text-sm uppercase tracking-[0.2em] mb-6">
            {t.natureSectionSub}
          </p>
          <div className="shimmer-line reveal d-300 max-w-xs mx-auto" />
        </div>

        {/* Layout: text + photo gallery */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">

          {/* Body text */}
          <div className="reveal-left space-y-6">
            <p className="text-xl leading-relaxed text-stone-600 font-light">
              {t.natureSectionBody}
            </p>

            {/* Feature list */}
            <ul className="space-y-4 pt-4">
              {[
                { icon: '🌿', text: t.natureFeat1 },
                { icon: '🌊', text: t.natureFeat2 },
                { icon: '☀️', text: t.natureFeat3 },
                { icon: '🪨', text: t.natureFeat4 },
              ].map(({ icon, text }, i) => (
                <li key={i} className={`reveal d-${i * 100} flex items-center gap-4`}>
                  <span className="text-2xl">{icon}</span>
                  <span className="text-stone-600">{text}</span>
                </li>
              ))}
            </ul>

            <div className="reveal d-400 pt-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-10 py-4 bg-serene-green text-white text-xs uppercase tracking-[0.28em] font-bold rounded-full hover:bg-stone-800 transition-colors duration-400 shadow-xl shadow-serene-green/25"
              >
                {t.natureSectionCta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Photo mosaic */}
          <div className="reveal-right grid grid-cols-2 gap-4">
            {NATURE_PHOTOS.map(({ src, alt }, i) => (
              <div
                key={src}
                className={`img-zoom rounded-2xl overflow-hidden shadow-lg ${i === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'}`}
              >
                <img
                  src={`${BASE}photos/${src}`}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Full-width atmospheric strip */}
        <div className="reveal relative rounded-3xl overflow-hidden h-64 md:h-80">
          <img
            src={`${BASE}photos/957.jpg`}
            alt="Sound healing in nature"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 60%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/30 to-stone-900/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-white/70 text-lg md:text-2xl font-serif italic max-w-lg leading-relaxed">
              "{t.natureQuote}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NatureTherapy;
