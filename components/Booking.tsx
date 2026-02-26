import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const Booking: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5582999999999'; // Substituir pelo número real
    const message = encodeURIComponent('Olá, gostaria de fazer um agendamento na KemSoftware.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-black relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blood-900/10 to-transparent pointer-events-none"></div>
       <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-gradient-to-tr from-blood-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-onyx-900 p-10 md:p-20 border border-white/5 shadow-2xl relative text-center"
        >
          {/* Decorative Corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blood-700"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blood-700"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-blood-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Acesso Exclusivo</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">Agendamento Prioritário</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Evite esperas. Clique no botão abaixo para iniciar uma conversa direta com nossa equipe e garantir seu ritual de cuidado com prioridade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-12 py-6 text-xl flex items-center justify-center gap-3 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Agendar via WhatsApp
            </Button>
            
            <div className="flex items-center gap-4 text-neutral-500 text-xs uppercase tracking-widest">
              <div className="w-8 h-[1px] bg-white/10"></div>
              <span>Resposta em poucos minutos</span>
              <div className="w-8 h-[1px] bg-white/10"></div>
            </div>
          </motion.div>

          {/* Subtle background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] overflow-hidden">
            <span className="font-serif text-[20rem] font-black select-none">KEM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};