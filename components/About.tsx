import React from 'react';
import { Shield, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Composition */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blood-800 z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blood-800 z-10"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop" 
            alt="Interior da Barbearia" 
            className="w-full h-auto grayscale contrast-125 brightness-75 hover:brightness-90 transition-all duration-700 shadow-2xl shadow-blood-900/10" 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-10 left-[-20px] bg-blood-900 text-white p-6 shadow-xl max-w-xs hidden md:block"
          >
            <p className="font-serif italic text-lg leading-tight">"A excelência não é um ato, mas um hábito."</p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl text-white leading-tight"
          >
            Mais que uma barbearia, <br />
            <span className="text-blood-600">Um Legado.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-lg leading-relaxed border-l-4 border-blood-900 pl-6"
          >
            O ChefeBarber foi forjado para homens que valorizam o poder da imagem. Inspirado nos clássicos clubes privados de Nova York e Chicago, criamos um refúgio onde o tempo para.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {[
              { icon: Shield, title: "Privacidade", desc: "Ambiente discreto e reservado." },
              { icon: Star, title: "Maestria", desc: "Profissionais de elite." },
              { icon: Users, title: "Irmandade", desc: "Conexões que importam." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="space-y-3"
              >
                <item.icon className="w-8 h-8 text-blood-600" />
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">{item.title}</h4>
                <p className="text-neutral-500 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};