
import React from 'react';
import { TranslationSet } from '../types';

interface ServicesProps {
  t: TranslationSet;
}

const ServiceCard: React.FC<{ 
  title: string; 
  desc: string; 
  img: string; 
  duration: string;
}> = ({ title, desc, img, duration }) => (
  <div className="group bg-serene-beige p-8 rounded-3xl border border-stone-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
    <div className="overflow-hidden rounded-2xl mb-8 aspect-square">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%]" />
    </div>
    <h3 className="text-2xl mb-4 text-stone-800">{title}</h3>
    <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
    <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-200">
      <span className="text-xs uppercase tracking-widest text-serene-green font-bold">{duration}</span>
      <button className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-serene-green transition-colors">Learn More →</button>
    </div>
  </div>
);

const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="py-24 px-6 bg-serene-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-serene-green font-bold mb-4 block">Experiences</span>
          <h2 className="text-4xl md:text-5xl text-stone-800">{t.servicesTitle}</h2>
          <div className="w-12 h-1 bg-serene-green mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title={t.serviceIndividual} 
            desc={t.serviceIndividualDesc} 
            img="https://picsum.photos/id/652/600/600" 
            duration={t.duration60}
          />
          <ServiceCard 
            title={t.serviceCouples} 
            desc={t.serviceCouplesDesc} 
            img="https://picsum.photos/id/345/600/600" 
            duration={t.duration90}
          />
          <ServiceCard 
            title={t.serviceChild} 
            desc={t.serviceChildDesc} 
            img="https://picsum.photos/id/445/600/600" 
            duration={t.duration90}
          />
          <ServiceCard 
            title={t.serviceVoice} 
            desc={t.serviceVoiceDesc} 
            img="https://picsum.photos/id/453/600/600" 
            duration="Every Monday"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
