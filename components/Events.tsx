
import React from 'react';
import { TranslationSet } from '../types';

interface EventsProps {
  t: TranslationSet;
}

const Events: React.FC<EventsProps> = ({ t }) => {
  return (
    <section id="events" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-serene-green/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-serene-gold/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-stone-800 mb-4">{t.eventsTitle}</h2>
          <p className="text-serene-green uppercase tracking-widest text-sm font-bold italic">{t.eventsSub}</p>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-[3rem] p-8 md:p-12 shadow-sm overflow-hidden flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden aspect-[4/5] shadow-inner">
             <img 
               src="https://picsum.photos/id/354/800/1000" 
               alt="Workshop" 
               className="w-full h-full object-cover"
             />
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="inline-block px-4 py-1 bg-serene-green text-white text-[10px] rounded-full uppercase tracking-widest">Upcoming Event</span>
              <h3 className="text-3xl text-stone-800">{t.sundayGathering}</h3>
              <p className="text-serene-green font-medium">{t.sundayGatheringTime}</p>
            </div>

            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>🌿 Θα ξεκινήσουμε με χαλάρωση μέσω της #τεχνικήAlexander, για να αφήσουμε την ένταση και να αφυπνίσουμε τη φυσική ροή της ενέργειας.</p>
              <p>🕉️ Θα συνεχίσουμε με τα #mantras των Τσάκρα, βυθιζόμενοι στις δονήσεις του ήχου της φωνής μας.</p>
              <p>🎶 Και θα ολοκληρώσουμε με #κιρτάν, τραγουδώντας θεραπευτικά τραγούδια που ανοίγουν την καρδιά.</p>
            </div>

            <div className="pt-6 border-t border-stone-200 space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-serene-green mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-stone-700">{t.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-serene-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span className="text-stone-700 font-bold">{t.freeContribution}</span>
              </div>
            </div>

            <a 
              href="tel:+306945103822"
              className="block w-full text-center py-4 bg-serene-green text-white rounded-2xl hover:bg-stone-800 transition-colors uppercase tracking-[0.2em] font-bold shadow-xl shadow-serene-green/20"
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
