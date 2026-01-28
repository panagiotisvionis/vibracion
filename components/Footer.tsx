
import React, { useState } from 'react';
import { TranslationSet } from '../types';

interface FooterProps {
  t: TranslationSet;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-start">
        {/* Brand & Social */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-white">
            <span className="text-3xl font-serif italic tracking-widest">Vibración</span>
          </div>
          <p className="text-sm leading-relaxed">
            {t.footerQuote}
          </p>
          <div className="flex space-x-4">
             <a href="#" className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:border-serene-green hover:text-white transition-all">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
             </a>
             <a href="#" className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:border-serene-green hover:text-white transition-all">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
             </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white text-lg font-serif italic tracking-wide">{t.appointment}</h4>
          <div className="space-y-4">
            <a href="tel:+306945103822" className="flex items-center space-x-3 hover:text-white transition-colors">
              <span className="text-serene-green shrink-0">Ph:</span>
              <span>+30 694 510 3822</span>
            </a>
            <p className="flex items-start space-x-3">
              <span className="text-serene-green shrink-0">Loc:</span>
              <span>Φαρών 90, Καλαμάτα</span>
            </p>
            <div className="pt-4">
              <h5 className="text-white text-sm font-serif italic mb-2 tracking-wide">Vibración Space</h5>
              <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                Διαλογισμός • Cacao ceremony • Κύκλοι τραγουδιών • Εργαστήρια ευεξίας
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-white text-lg font-serif italic tracking-wide">{t.formTitle}</h4>
          {submitted ? (
            <div className="bg-serene-green/10 border border-serene-green/30 p-6 rounded-2xl text-serene-green">
              {t.formSuccess}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest ml-1">{t.formName}</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-serene-green transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest ml-1">{t.formEmail}</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-serene-green transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] uppercase tracking-widest ml-1">{t.formSubject}</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-serene-green transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] uppercase tracking-widest ml-1">{t.formMessage}</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-serene-green transition-colors resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="w-full md:w-auto px-12 py-3 bg-serene-green text-white rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300 uppercase tracking-widest text-xs font-bold"
                >
                  {t.formSubmit}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-600">
        <p>© 2024 Vibración Sound Healing. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Designed for Eleni Christidou</p>
      </div>
    </footer>
  );
};

export default Footer;
