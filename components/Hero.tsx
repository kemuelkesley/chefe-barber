import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const handleScheduleClick = () => {
    // Replace number with actual WhatsApp number
    window.open('https://wa.me/5582999999999?text=Olá, gostaria de agendar um horário no ChefeBarber.', '_blank');
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with heavy darkening */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1920&auto=format&fit=crop" 
          alt="Barber Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(153,27,27,0.1)_0%,_rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-blood-500 tracking-[0.3em] text-sm font-bold uppercase mb-4"
        >
          Exclusive Members Only
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl"
        >
          ELEGÂNCIA <br/>
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500"
          >
            ABSOLUTA
          </motion.span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-neutral-400 max-w-xl mx-auto text-lg mb-10 font-light leading-relaxed"
        >
          Mais que um corte, um ritual. Onde a tradição da velha guarda encontra a sofisticação moderna. Bem-vindo à família.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button onClick={handleScheduleClick}>
            Agendar Visita
          </Button>
        </motion.div>
      </div>

      {/* Decorative metal line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blood-900 to-transparent opacity-50" />
    </section>
  );
};