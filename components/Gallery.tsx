import React from 'react';

const photos = [
  "https://picsum.photos/400/600?grayscale&random=1",
  "https://picsum.photos/400/600?grayscale&random=2",
  "https://picsum.photos/400/600?grayscale&random=3",
  "https://picsum.photos/400/600?grayscale&random=4",
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-onyx-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
              <span className="text-blood-600 font-bold uppercase tracking-widest text-xs mb-2 block">Portfólio</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white">A Assinatura Chefe</h2>
           </div>
           <p className="text-neutral-400 max-w-sm text-right hidden md:block">
             Resultados que falam por si mesmos. Precisão cirúrgica e estilo inconfundível.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((url, i) => (
            <div key={i} className="group relative overflow-hidden h-[400px] cursor-pointer">
              <div className="absolute inset-0 bg-blood-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                 <span className="text-white font-serif italic text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Chefe.</span>
              </div>
              <img 
                src={url} 
                alt={`Style ${i}`}
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};