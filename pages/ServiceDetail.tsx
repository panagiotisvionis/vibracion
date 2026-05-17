import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language } from '../types';
import { SERVICES } from '../data/services';
import { useReveal } from '../hooks/useReveal';

const BASE = import.meta.env.BASE_URL;

interface Props {
  lang: Language;
  setLang: (l: Language) => void;
}

const ServiceDetail: React.FC<Props> = ({ lang, setLang }) => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);
  const ref = useReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (service) {
      document.title = `${service.title[lang]} — Vibración Καλαμάτα | Sound Healing`;
    }
    return () => { document.title = 'Vibración — Ηχοθεραπεία & Ηχομασάζ Καλαμάτα | Sound Healing Kalamata'; };
  }, [id, lang, service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-serene-beige">
        <p className="text-stone-500 mb-6">Service not found.</p>
        <Link to="/" className="text-serene-green underline">← Back</Link>
      </div>
    );
  }

  const t = {
    back:        lang === 'el' ? '← Πίσω στις Συνεδρίες' : '← Back to Services',
    duration:    lang === 'el' ? 'Διάρκεια' : 'Duration',
    benefits:    lang === 'el' ? 'Οφέλη' : 'Benefits',
    expect:      lang === 'el' ? 'Τι να περιμένετε' : 'What to expect',
    whoFor:      lang === 'el' ? 'Για ποιον είναι;' : 'Who is it for?',
    book:        lang === 'el' ? 'Κλείστε Ραντεβού' : 'Book a Session',
    otherTitle:  lang === 'el' ? 'Άλλες Συνεδρίες' : 'Other Sessions',
    freq:        lang === 'el' ? 'Συχνότητες' : 'Frequencies',
  };

  const others = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-serene-beige" ref={ref as React.RefObject<HTMLDivElement>}>

      {/* ── Top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-stone-100/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-stone-600 hover:text-serene-green transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.back}
          </Link>
          <Link to="/" className="text-lg font-serif italic tracking-widest text-stone-800">
            Vibración
          </Link>
          <button
            onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
            className="text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-full border border-stone-300 text-stone-600 hover:bg-serene-green hover:text-white hover:border-serene-green transition-all duration-300"
          >
            {lang === 'el' ? 'EN' : 'ΕΛ'}
          </button>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${BASE}photos/${service.photo}`}
            alt={service.title[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-stone-900/20" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-14 w-full">
          <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.4em] text-serene-gold font-bold">
            {t.duration}: {service.duration[lang]}
            {service.frequency && (
              <span className="ml-4 text-white/50">· {t.freq}: {service.frequency}</span>
            )}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif italic text-white leading-tight mb-4">
            {service.title[lang]}
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            {service.tagline[lang]}
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

        {/* Main content */}
        <div className="lg:col-span-2 space-y-12">

          {/* Intro */}
          <div className="reveal">
            <p className="text-xl text-stone-600 leading-relaxed font-light italic border-l-2 border-serene-gold pl-6">
              {service.intro[lang]}
            </p>
          </div>

          {/* Full description */}
          <div className="reveal d-100 space-y-5">
            {service.fullDesc[lang].split('\n\n').map((para, i) => (
              <p key={i} className="text-stone-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Quote */}
          <div className="reveal d-200 bg-white rounded-3xl p-8 shadow-sm">
            <svg className="w-8 h-8 text-serene-gold/40 mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8C6.686 8 4 10.686 4 14s2.686 6 6 6c.343 0 .678-.03 1-.086V22c0 1.105-.895 2-2 2H8v2h1c2.206 0 4-1.794 4-4v-8C13 10.686 12.314 8 10 8zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.343 0 .678-.03 1-.086V22c0 1.105-.895 2-2 2h-1v2h1c2.206 0 4-1.794 4-4v-8c0-3.314-.686-6-3-6z"/>
            </svg>
            <p className="text-stone-700 text-lg italic leading-relaxed">
              {service.quote[lang]}
            </p>
          </div>

          {/* What to expect */}
          <div className="reveal d-100">
            <h2 className="text-2xl font-serif text-stone-800 mb-6">{t.expect}</h2>
            <ul className="space-y-3">
              {service.whatToExpect[lang].map((item, i) => (
                <li key={i} className={`reveal d-${Math.min(i * 100, 500)} flex items-start gap-4`}>
                  <span className="mt-1 w-5 h-5 rounded-full bg-serene-green/15 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-serene-green" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </span>
                  <span className="text-stone-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who is it for */}
          <div className="reveal d-100 bg-serene-cream rounded-3xl p-8">
            <h2 className="text-xl font-serif text-stone-800 mb-3">{t.whoFor}</h2>
            <p className="text-stone-600 leading-relaxed">{service.whoIsItFor[lang]}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:sticky lg:top-24 self-start">

          {/* Benefits */}
          <div className="reveal bg-white rounded-3xl p-7 shadow-sm">
            <h3 className="text-lg font-serif text-stone-800 mb-5">{t.benefits}</h3>
            <ul className="space-y-3">
              {service.benefits[lang].map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                  <svg className="w-4 h-4 text-serene-green mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Duration card */}
          <div className="reveal d-100 bg-serene-green rounded-3xl p-7 text-white">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">{t.duration}</p>
            <p className="text-2xl font-serif italic mb-4">{service.duration[lang]}</p>
            {service.frequency && (
              <>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">{t.freq}</p>
                <p className="text-lg font-semibold mb-4">{service.frequency}</p>
              </>
            )}
            <a
              href="/#contact"
              onClick={() => window.location.href = `${BASE}#contact`}
              className="block text-center py-3 bg-white text-serene-green text-xs uppercase tracking-[0.2em] font-bold rounded-2xl hover:bg-serene-gold hover:text-white transition-colors duration-300"
            >
              {t.book}
            </a>
          </div>

          {/* Accent photo */}
          {service.accentPhoto && (
            <div className="reveal d-200 rounded-3xl overflow-hidden img-zoom aspect-square shadow-sm">
              <img
                src={`${BASE}photos/${service.accentPhoto}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* ── Other sessions ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="reveal text-3xl font-serif text-stone-800 mb-10">{t.otherTitle}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((s, i) => (
              <Link
                key={s.id}
                to={`/service/${s.id}`}
                className={`reveal d-${i * 100} group block rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="img-zoom aspect-[4/3]">
                  <img
                    src={`${BASE}photos/${s.photo}`}
                    alt={s.title[lang]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-serene-cream p-5">
                  <p className="text-[10px] uppercase tracking-widest text-serene-gold mb-1">{s.duration[lang]}</p>
                  <h3 className="font-serif italic text-stone-800 group-hover:text-serene-green transition-colors">
                    {s.title[lang]}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <div className="bg-stone-950 py-6 px-6 text-center text-[10px] uppercase tracking-widest text-stone-600">
        <p>© {new Date().getFullYear()} Vibración Sound Healing · Kalamata</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
