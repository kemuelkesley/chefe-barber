import React, { useEffect, useRef } from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

// Declaration to satisfy TS since we are loading Leaflet via CDN
declare const L: any;

export const Footer: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current && typeof L !== 'undefined') {
      // Coordinates for Rua Arapiraca, Cruz das Almas, Maceió (Approximate)
      const lat = -9.6385;
      const lng = -35.7060;

      // Initialize map
      const map = L.map(mapRef.current, {
        center: [lat, lng],
        zoom: 15,
        scrollWheelZoom: false,
        zoomControl: false,
        attributionControl: false
      });

      mapInstanceRef.current = map;

      // Dark Matter Tiles (CartoDB) - Fits the aesthetic perfectly
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      // Custom Icon
      const icon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: #991b1b; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 10px #ef4444; border: 2px solid white;"></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6]
      });

      // Add Marker
      const marker = L.marker([lat, lng], { icon: icon }).addTo(map);
      
      marker.bindPopup(`
        <div class="text-center">
          <strong class="text-blood-600 font-serif uppercase tracking-widest">ChefeBarber</strong><br/>
          Rua Arapiraca<br/>
          Cruz das Almas, Maceió
        </div>
      `).openPopup();
      
      // Add zoom control manually to style it or position it if needed
      L.control.zoom({
        position: 'bottomright'
      }).addTo(map);
    }

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Brand & Info Column */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl text-white mb-6">CHEFE<span className="text-blood-600">BARBER</span></h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                Elevando o padrão de barbearia. Estilo, tradição e exclusividade em cada detalhe. 
                Um ambiente forjado para quem exige o melhor.
              </p>
              
              <div className="space-y-4 text-neutral-200 text-sm">
                <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-blood-900 transition-colors">
                    <MapPin className="w-4 h-4 text-blood-600 group-hover:text-white" />
                  </div>
                  <span>Rua Arapiraca, Cruz das Almas - Maceió, AL</span>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-blood-900 transition-colors">
                     <Phone className="w-4 h-4 text-blood-600 group-hover:text-white" />
                  </div>
                  <span>(82) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-blood-900 transition-colors">
                    <Mail className="w-4 h-4 text-blood-600 group-hover:text-white" />
                  </div>
                  <span>contato@chefebarber.com.br</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-onyx-900 flex items-center justify-center text-white hover:bg-blood-700 transition-colors border border-white/10 hover:border-blood-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5582999999999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-onyx-900 flex items-center justify-center text-white hover:bg-green-700 transition-colors border border-white/10 hover:border-green-600">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:w-2/3 h-[400px] bg-onyx-900 rounded-sm border border-white/10 overflow-hidden relative group">
             {/* Map Container */}
             <div ref={mapRef} className="w-full h-full z-10 relative grayscale hover:grayscale-0 transition-all duration-700"></div>
             
             {/* Overlay for inactive state (optional, adds atmosphere) */}
             <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 z-20 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"></div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center text-neutral-400 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; {new Date().getFullYear()} kemSoftware. Todos os direitos reservados.</span>
        <span className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer text-neutral-300">Política de Privacidade</span>
      </div>
    </footer>
  );
};