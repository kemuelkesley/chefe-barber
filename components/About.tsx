import React from 'react';
import { Shield, Star, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Composition */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blood-800 z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blood-800 z-10"></div>
          
          <img 
            src="https://picsum.photos/600/800?grayscale" 
            alt="Interior da Barbearia" 
            className="w-full h-auto grayscale contrast-125 brightness-75 hover:brightness-90 transition-all duration-700 shadow-2xl shadow-blood-900/10" 
          />
          
          <div className="absolute bottom-10 left-[-20px] bg-blood-900 text-white p-6 shadow-xl max-w-xs hidden md:block">
            <p className="font-serif italic text-lg leading-tight">"A excelência não é um ato, mas um hábito."</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <h2 className="font-serif text-5xl text-white leading-tight">
            Mais que uma barbearia, <br />
            <span className="text-blood-600">Um Legado.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed border-l-4 border-blood-900 pl-6">
            O ChefeBarber foi forjado para homens que valorizam o poder da imagem. Inspirado nos clássicos clubes privados de Nova York e Chicago, criamos um refúgio onde o tempo para.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="space-y-3">
              <Shield className="w-8 h-8 text-blood-600" />
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">Privacidade</h4>
              <p className="text-neutral-500 text-xs">Ambiente discreto e reservado.</p>
            </div>
            <div className="space-y-3">
              <Star className="w-8 h-8 text-blood-600" />
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">Maestria</h4>
              <p className="text-neutral-500 text-xs">Profissionais de elite.</p>
            </div>
            <div className="space-y-3">
              <Users className="w-8 h-8 text-blood-600" />
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">Irmandade</h4>
              <p className="text-neutral-500 text-xs">Conexões que importam.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};