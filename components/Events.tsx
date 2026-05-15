import React from 'react';
import { TranslationSet } from '../types';
import { useReveal } from '../hooks/useReveal';

const BASE = import.meta.env.BASE_URL;

const Events: React.FC<{ t: TranslationSet }> = ({ t }) => {
  const ref = useReveal();

  return (
    <section
      id="events"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 px-6 bg-serene-beige overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-serene-gold/6 rounded-full blur-3xl -mr-48 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-serene-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="reveal text-[10px] uppercase tracking-[0.45em] text-serene-gold font-bold block mb-4">
            Weekly
          </span>
          <h2 className="reveal d-100 text-4xl md:text-5xl font-serif text-stone-800 mb-3">
            {t.eventsTitle}
          </h2>
          <p className="reveal d-200 text-serene-green text-sm uppercase tracking-[0.25em] font-semibold italic">
            {t.eventsSub}
          </p>
        </div>

        {/* Event card */}
        <div className="reveal grid md:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-2xl">

          {/* Photo side */}
          <div className="relative img-zoom min-h-[360px] md:min-h-[500px]">
            <img
              src={`${BASE}photos/1849.jpg`}
              alt="Sunday gathering"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent" />

            {/* Floating time badge */}
            <div className="absolute bottom-6 left-6 glass-dark rounded-2xl px-5 py-3">
              <p className="text-white/50 text-[10px] uppercase tracking-widest mb-0.5">{t.eventEveryDay}</p>
              <p className="text-white font-bold text-lg tracking-wide">19:30</p>
            </div>
          </div>

          {/* Content side */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center gap-7">

            <div>
              <span className="inline-block px-4 py-1.5 bg-serene-green text-white text-[9px] rounded-full uppercase tracking-[0.3em] mb-4">
                {t.eventUpcoming}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-stone-800 leading-snug">
                {t.sundayGathering}
              </h3>
              <p className="text-serene-green font-semibold mt-2">{t.sundayGatheringTime}</p>
            </div>

            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              {[
                { icon: '🌿', html: t.eventStep1 },
                { icon: '🕉️', html: t.eventStep2 },
                { icon: '🎶', html: t.eventStep3 },
              ].map(({ icon, html }, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-lg leading-none mt-0.5">{icon}</span>
                  <p dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              ))}
            </div>

            <div className="border-t border-stone-100 pt-6 space-y-3">
              <div className="flex items-center gap-3 text-stone-600">
                <svg className="w-4 h-4 text-serene-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-sm">{t.location}</span>
              </div>
              <div className="flex items-center gap-3 text-stone-600">
                <svg className="w-4 h-4 text-serene-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm font-bold text-stone-800">{t.freeContribution}</span>
              </div>
            </div>

            <a
              href="tel:+306945103822"
              className="block text-center py-4 bg-serene-green text-white rounded-2xl hover:bg-stone-800 transition-colors duration-400 uppercase tracking-[0.2em] text-xs font-bold shadow-lg shadow-serene-green/20"
            >
              {t.contactBtn}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;
