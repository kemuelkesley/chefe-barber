import React from 'react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Corte Signature',
    description: 'Análise de visagismo, corte preciso, lavagem com massagem capilar e finalização premium.',
    price: 'R$ 90',
    image: 'https://images.unsplash.com/photo-1622286332618-f2803b11558d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Barba Real',
    description: 'Toalha quente, óleos essenciais, navalha clássica e hidratação profunda da pele.',
    price: 'R$ 70',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'O Combo Chefe',
    description: 'Experiência completa. Cabelo, barba e sobrancelha, acompanhado de drink cortesia.',
    price: 'R$ 140',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Camuflagem de Grisalhos',
    description: 'Tonalização discreta para reduzir o aspecto branco sem perder a naturalidade.',
    price: 'R$ 80',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-onyx-950 relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blood-700 text-sm font-bold tracking-[0.4em] uppercase mb-3"
          >
            Menu Exclusivo
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-white mb-6"
          >
            Nossos Rituais
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blood-800 mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="flex-grow p-8 relative">
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blood-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="font-serif text-2xl text-white group-hover:text-blood-500 transition-colors">
                    {service.title}
                  </h4>
                  <span className="font-sans text-xl font-bold text-white">{service.price}</span>
                </div>
                <p className="font-sans text-neutral-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-blood-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Agendar Agora</span>
                  <div className="w-8 h-[1px] bg-blood-600"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};