import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Language, translations } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import NatureTherapy from './components/NatureTherapy';
import Events from './components/Events';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';

/* ── Main one-page layout ── */
const HomePage: React.FC<{ lang: Language; setLang: (l: Language) => void }> = ({ lang, setLang }) => {
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('scroll-progress');
      if (!el) return;
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      el.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main className="flex-grow">
        <Hero t={t} />
        <About t={t} />
        <Services t={t} lang={lang} />
        <NatureTherapy t={t} />
        <Events t={t} />
      </main>
      <Footer t={t} />
      {/* Floating phone CTA — mobile only */}
      <a
        href="tel:+306945103822"
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-serene-green text-white rounded-full shadow-2xl shadow-serene-green/40 flex items-center justify-center hover:bg-stone-800 transition-colors duration-300"
        aria-label="Κλήση"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
};

/* ── Root with shared language state ── */
const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('el');

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />
        <Route path="/service/:id" element={<ServiceDetail lang={lang} setLang={setLang} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
