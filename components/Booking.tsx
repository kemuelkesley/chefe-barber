import React from 'react';
import { Button } from './Button';

export const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-24 bg-black relative">
       {/* Background accent */}
       <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blood-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-onyx-900 p-8 md:p-16 border border-white/5 shadow-2xl relative">
          {/* Decorative Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blood-700"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blood-700"></div>

          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Entre em Contato</h2>
            <p className="text-neutral-400">Preencha seus dados para fazer parte do clube.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">Nome</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-white/10 p-4 text-white focus:border-blood-600 focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full bg-black border border-white/10 p-4 text-white focus:border-blood-600 focus:outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">Email</label>
              <input 
                type="email" 
                className="w-full bg-black border border-white/10 p-4 text-white focus:border-blood-600 focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">Como conheceu a barbearia</label>
              <select className="w-full bg-black border border-white/10 p-4 text-white focus:border-blood-600 focus:outline-none transition-colors appearance-none">
                <option value="">Selecione uma opção</option>
                <option value="instagram">Instagram</option>
                <option value="google">Google</option>
                <option value="indicação">Indicação de Amigo</option>
                <option value="passando">Passando em frente</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="pt-6">
              <Button type="submit" className="w-full py-5 text-lg">
                Enviar Cadastro
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};