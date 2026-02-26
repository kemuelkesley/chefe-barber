import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  "https://images.unsplash.com/photo-1592647425447-182c337f69a3?q=80&w=800&auto=format&fit=crop", // Classic cut
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop", // Modern fade
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=800&auto=format&fit=crop", // Beard detail
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop", // Styling
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-onyx-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <span className="text-blood-600 font-bold uppercase tracking-widest text-xs mb-2 block">Portfólio</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white">A Assinatura Chefe</h2>
           </motion.div>
           <motion.p 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-neutral-400 max-w-sm text-right hidden md:block"
           >
             Resultados que falam por si mesmos. Precisão cirúrgica e estilo inconfundível.
           </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((url, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden h-[400px] cursor-pointer"
            >
              <div className="absolute inset-0 bg-blood-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="text-white font-serif italic text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Chefe.</span>
              </div>
              <img 
                src={url} 
                alt={`Style ${i}`}
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};