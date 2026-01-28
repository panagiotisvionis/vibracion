
import React from 'react';
import { TranslationSet } from '../types';

interface AboutProps {
  t: TranslationSet;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-12 italic text-stone-800">
          {t.everythingIsVibration}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <p className="text-lg leading-relaxed text-stone-600 font-light">
              {t.everythingIsVibrationBody}
            </p>
            <div className="pt-4 border-l-2 border-serene-green/20 pl-6 italic text-stone-500">
              "Ο ήχος φτάνει εκεί που οι λέξεις δεν μπορούν..."
            </div>
            <p className="text-stone-700 font-medium">
              Ελένη Χρηστίδου <br/>
              <span className="text-sm text-serene-green uppercase tracking-widest">Μουσικολόγος, Ηχοθεραπεύτρια</span>
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 border border-serene-green/10 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <img 
              src="https://picsum.photos/id/401/800/800" 
              alt="Eleni Christidou Sound Healing" 
              className="relative rounded-2xl shadow-xl w-full h-auto grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
