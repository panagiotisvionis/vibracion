import React from 'react';
import { Link } from 'react-router-dom';
import { Language, TranslationSet } from '../types';
import { useReveal } from '../hooks/useReveal';
import { SERVICES } from '../data/services';

const BASE = import.meta.env.BASE_URL;

interface ServicesProps {
  t: TranslationSet;
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ t, lang }) => {
  const ref = useReveal();

  const DELAYS = ['0', '100', '200', '300'];

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 px-6 bg-serene-cream overflow-hidden"
    >
      {/* Subtle dot texture */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(90,110,90,0.15) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="reveal text-[10px] uppercase tracking-[0.45em] text-serene-gold font-bold block mb-4">
            Experiences
          </span>
          <h2 className="reveal d-100 text-4xl md:text-5xl font-serif text-stone-800 mb-4">
            {t.servicesTitle}
          </h2>
          <p className="reveal d-200 text-stone-500 max-w-md mx-auto leading-relaxed">
            {t.servicesSub}
          </p>
          <div className="reveal d-300 flex items-center justify-center gap-4 mt-8">
            <div className="shimmer-line w-12" />
            <div className="flex gap-1">
              {[4, 7, 5, 9, 6, 8, 4].map((h, i) => (
                <span key={i} className="sound-bar bg-serene-green"
                  style={{ height: `${h}px`, animationDelay: `${i * 0.08}s` }} />
              ))}
            </div>
            <div className="shimmer-line w-12" />
          </div>
        </div>

        {/* Cards grid — driven by SERVICES data */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className={`reveal d-${DELAYS[i]} group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 block`}
            >
              {/* Image */}
              <div className="img-zoom aspect-[3/4]">
                <img
                  src={`${BASE}photos/${service.photo}`}
                  alt={service.title[lang]}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent transition-all duration-500 group-hover:from-stone-900/95" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold mb-2 block text-serene-gold">
                  {service.duration[lang]}
                </span>
                <h3 className="text-xl font-serif italic text-white mb-3 leading-snug">
                  {service.title[lang]}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                  {service.tagline[lang]}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] uppercase tracking-widest text-serene-gold">
                    {lang === 'el' ? 'Διάβασε περισσότερα' : 'Read more'}
                  </span>
                  <svg className="w-3 h-3 text-serene-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Music note icon top-right on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Gift card callout */}
        <div className="reveal d-200 mt-20 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={`${BASE}photos/1721.jpg`}
              alt="Gift card"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-900/60 to-transparent" />
          </div>
          <div className="relative z-10 px-10 py-14 max-w-lg">
            <span className="text-[10px] uppercase tracking-[0.4em] text-serene-gold font-bold block mb-3">
              Gift
            </span>
            <h3 className="text-3xl font-serif italic text-white mb-4">{t.giftCardTitle}</h3>
            <p className="text-stone-300 leading-relaxed mb-8">{t.giftCardDesc}</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-serene-gold text-stone-900 text-xs uppercase tracking-[0.25em] font-bold rounded-full hover:bg-white transition-colors duration-300"
            >
              {t.giftCardCta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
