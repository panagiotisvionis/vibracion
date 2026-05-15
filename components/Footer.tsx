import React, { useState } from 'react';
import { TranslationSet } from '../types';
import { useReveal } from '../hooks/useReveal';

const BASE = import.meta.env.BASE_URL;

const Footer: React.FC<{ t: TranslationSet }> = ({ t }) => {
  const [submitted, setSubmitted] = useState(false);
  const ref = useReveal();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <footer
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-stone-950 text-stone-400"
    >
      {/* Background photo blur */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={`${BASE}photos/1849.jpg`}
          alt=""
          className="w-full h-full object-cover opacity-8"
          style={{ filter: 'blur(30px)', transform: 'scale(1.1)', opacity: 0.08 }}
        />
        <div className="absolute inset-0 bg-stone-950/85" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-serene-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-serene-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">

          {/* Brand */}
          <div className="reveal space-y-6">
            <div>
              <h3 className="text-3xl font-serif italic tracking-widest text-white mb-1">Vibración</h3>
              <p className="text-[10px] uppercase tracking-[0.35em] text-serene-gold">Sound Healing & Therapies</p>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 italic">
              "{t.footerQuote}"
            </p>
            <div className="flex gap-3">
              {[
                { name: 'Instagram', href: 'https://www.instagram.com/sound.healing.eleni_christidou',
                  icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> },
                { name: 'Facebook', href: '#',
                  icon: <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /> },
              ].map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:border-serene-gold hover:text-serene-gold transition-all duration-300 group">
                  <span className="sr-only">{name}</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">{icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="reveal d-100 space-y-6">
            <h4 className="text-white font-serif italic text-xl tracking-wide">{t.appointment}</h4>
            <div className="space-y-4 text-sm">
              <a href="tel:+306945103822" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-serene-green/15 flex items-center justify-center group-hover:bg-serene-green/30 transition-colors">
                  <svg className="w-3.5 h-3.5 text-serene-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+30 694 510 3822</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-serene-green/15 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-serene-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>{t.location}</span>
              </div>
              <a href="https://www.instagram.com/sound.healing.eleni_christidou"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-serene-green/15 flex items-center justify-center">
                  <span className="text-serene-green text-xs">@</span>
                </div>
                <span>sound.healing.eleni_christidou</span>
              </a>
            </div>

            <div className="pt-4 border-t border-stone-800">
              <h5 className="text-white text-sm font-serif italic mb-2">Vibración Space</h5>
              <p className="text-[10px] uppercase tracking-[0.18em] leading-relaxed text-stone-500">
                {t.vibrationSpaceActivities}
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal d-200 space-y-5">
            <h4 className="text-white font-serif italic text-xl tracking-wide">{t.formTitle}</h4>

            {submitted ? (
              <div className="bg-serene-green/15 border border-serene-green/30 rounded-2xl p-6 text-serene-green">
                {t.formSuccess}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {([
                    { type: 'text',  label: t.formName,  id: 'name'  },
                    { type: 'email', label: t.formEmail, id: 'email' },
                  ] as const).map(({ type, label, id }) => (
                    <div key={id} className="space-y-1">
                      <label htmlFor={id} className="text-[10px] uppercase tracking-widest text-stone-500">
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        className="w-full bg-stone-900/70 border border-stone-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-serene-green transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-stone-500">
                    {t.formSubject}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    className="w-full bg-stone-900/70 border border-stone-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-serene-green transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-stone-500">
                    {t.formMessage}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-stone-900/70 border border-stone-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-serene-green transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-serene-green text-white rounded-full hover:bg-serene-gold hover:text-stone-900 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-bold"
                >
                  {t.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-stone-600">
          <p>© {new Date().getFullYear()} Vibración Sound Healing. All rights reserved.</p>
          <p>Eleni Christidou · Kalamata, Greece</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
