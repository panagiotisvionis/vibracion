
import React from 'react';
import { Language, TranslationSet } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationSet;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  return (
    <nav className="sticky top-0 z-50 bg-serene-beige/80 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 border border-serene-green rounded-full flex items-center justify-center p-1">
             <svg viewBox="0 0 100 100" className="w-full h-full text-serene-green fill-current">
                <path d="M50 10 C30 10, 10 30, 10 50 C10 70, 30 90, 50 90 C70 90, 90 70, 90 50 C90 30, 70 10, 50 10 M50 20 C65 20, 80 35, 80 50 C80 65, 65 80, 50 80 C35 80, 20 65, 20 50 C20 35, 35 20, 50 20 Z" opacity="0.2"/>
                <circle cx="50" cy="50" r="5" />
                <path d="M50 50 Q70 20 50 10 Q30 20 50 50" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 50 Q80 80 90 50 Q80 20 50 50" fill="none" stroke="currentColor" strokeWidth="2"/>
             </svg>
          </div>
          <span className="text-2xl font-serif tracking-widest uppercase text-stone-800">Vibración</span>
        </div>

        <div className="hidden md:flex space-x-8 items-center text-sm tracking-widest uppercase text-stone-600">
          <a href="#about" className="hover:text-serene-green transition-colors">{t.navAbout}</a>
          <a href="#services" className="hover:text-serene-green transition-colors">{t.navServices}</a>
          <a href="#events" className="hover:text-serene-green transition-colors">{t.eventsTitle}</a>
          <a href="#contact" className="hover:text-serene-green transition-colors">{t.navContact}</a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
            className="text-xs border border-stone-300 px-3 py-1 rounded hover:bg-stone-100 transition-colors uppercase"
          >
            {lang === 'el' ? 'EN' : 'ΕΛ'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
