import React, { useState, useEffect } from 'react';
import { Language, TranslationSet } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationSet;
}

const Logo: React.FC<{ white?: boolean }> = ({ white }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full fill-current ${white ? 'text-white' : 'text-serene-green'}`}>
    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <circle cx="50" cy="50" r="5" />
    <path d="M50 50 Q68 22 50 10 Q32 22 50 50" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M50 50 Q78 72 90 50 Q78 28 50 50" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links: { id: string; label: string }[] = [
    { id: 'about',    label: t.navAbout },
    { id: 'services', label: t.navServices },
    { id: 'nature',   label: t.navNature },
    { id: 'events',   label: t.navEvents },
    { id: 'contact',  label: t.navContact },
  ];

  const white = !scrolled && !menuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-stone-100/60 shadow-sm py-0' : 'bg-transparent py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo — scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className={`w-9 h-9 border rounded-full p-1 transition-all duration-500 relative pulse-ring ${
              white ? 'border-white/50' : 'border-serene-green/60'
            }`}>
              <Logo white={white} />
            </div>
            <span className={`text-xl font-serif tracking-[0.18em] uppercase transition-colors duration-500 ${
              white ? 'text-white' : 'text-stone-800'
            }`}>
              Vibración
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className={`text-[11px] tracking-[0.22em] uppercase font-medium transition-all duration-300 hover:text-serene-gold relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-px after:bg-serene-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  white ? 'text-white/80' : 'text-stone-600'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
              className={`text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-full border transition-all duration-300 ${
                white
                  ? 'border-white/40 text-white/80 hover:bg-white/15'
                  : 'border-stone-300 text-stone-600 hover:bg-serene-green hover:text-white hover:border-serene-green'
              }`}
            >
              {lang === 'el' ? 'EN' : 'ΕΛ'}
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 transition-all duration-300 origin-center ${
                white ? 'bg-white' : 'bg-stone-800'
              } ${menuOpen ? 'rotate-45 translate-y-[7px]' : 'w-full'}`} />
              <span className={`block h-0.5 w-full transition-all duration-300 ${
                white ? 'bg-white' : 'bg-stone-800'
              } ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 transition-all duration-300 origin-center ${
                white ? 'bg-white' : 'bg-stone-800'
              } ${menuOpen ? '-rotate-45 -translate-y-[7px]' : 'w-full'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(20,17,14,0.97)' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-serene-green/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-serene-gold/10 rounded-full blur-3xl" />
        </div>

        <nav className="relative z-10 flex flex-col items-center gap-8">
          {links.map((l, i) => (
            <button
              key={l.id}
              onClick={() => { scrollToSection(l.id); setMenuOpen(false); }}
              className="text-3xl font-serif italic text-white/70 hover:text-white transition-all duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 70}ms` : '0ms',
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                opacity: menuOpen ? 1 : 0,
              }}
            >
              {l.label}
            </button>
          ))}
          <div className="mt-6 shimmer-line w-24" />
          <p className="text-stone-500 text-xs tracking-widest uppercase">
            {t.location}
          </p>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
