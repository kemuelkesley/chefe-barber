import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Corte Signature',
    description: 'Análise de visagismo, corte preciso, lavagem com massagem capilar e finalização premium.',
    price: 'R$ 90'
  },
  {
    id: '2',
    title: 'Barba Real',
    description: 'Toalha quente, óleos essenciais, navalha clássica e hidratação profunda da pele.',
    price: 'R$ 70'
  },
  {
    id: '3',
    title: 'O Combo Chefe',
    description: 'Experiência completa. Cabelo, barba e sobrancelha, acompanhado de drink cortesia.',
    price: 'R$ 140'
  },
  {
    id: '4',
    title: 'Camuflagem de Grisalhos',
    description: 'Tonalização discreta para reduzir o aspecto branco sem perder a naturalidade.',
    price: 'R$ 80'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-onyx-950 relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-blood-700 text-sm font-bold tracking-[0.4em] uppercase mb-3">Menu Exclusivo</h3>
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Nossos Rituais</h2>
          <div className="h-1 w-24 bg-blood-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {services.map((service) => (
            <div key={service.id} className="group relative p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
              <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blood-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="font-serif text-2xl text-white group-hover:text-blood-500 transition-colors">
                  {service.title}
                </h4>
                <div className="flex-grow mx-4 border-b border-white/10 border-dotted relative top-[-4px]"></div>
                <span className="font-sans text-xl font-bold text-white">{service.price}</span>
              </div>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};