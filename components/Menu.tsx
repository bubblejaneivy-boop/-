import React from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-sumi text-washi relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-full bg-neutral-800/30 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
          <div>
            <span className="text-beer text-sm font-bold tracking-widest uppercase mb-2 block">Menu</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-hanzi">嚴選與精釀</h2>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <p className="font-serif text-sm text-white/50 tracking-widest">職人が織りなす、味の競演</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Beer Column */}
          <div>
            <h3 className="font-serif text-2xl mb-8 tracking-widest flex items-center">
              <span className="w-8 h-[1px] bg-beer mr-4"></span>
              台灣精釀 <span className="text-sm ml-2 text-white/50">クラフトビール</span>
            </h3>
            <div className="space-y-12">
              {MENU_ITEMS.filter(i => i.category === 'beer').map((item) => (
                <div key={item.id} className="flex gap-6 group cursor-pointer">
                  <div className="w-24 h-32 flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.nameZH} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-lg tracking-widest group-hover:text-beer transition-colors">{item.nameZH}</h4>
                      <span className="font-mono text-beer">{item.price}</span>
                    </div>
                    <p className="text-xs text-white/40 mb-2 tracking-wide">{item.nameJP}</p>
                    <p className="text-sm text-white/70 leading-relaxed mb-3">{item.description}</p>
                    <div className="flex gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] border border-white/20 px-2 py-1 text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Food Column */}
          <div>
            <h3 className="font-serif text-2xl mb-8 tracking-widest flex items-center">
              <span className="w-8 h-[1px] bg-beer mr-4"></span>
              炭火燒烤 <span className="text-sm ml-2 text-white/50">炭火焼き</span>
            </h3>
            <div className="space-y-12">
              {MENU_ITEMS.filter(i => i.category === 'food').map((item) => (
                <div key={item.id} className="flex gap-6 group cursor-pointer">
                  <div className="w-24 h-32 flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.nameZH} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-lg tracking-widest group-hover:text-beer transition-colors">{item.nameZH}</h4>
                      <span className="font-mono text-beer">{item.price}</span>
                    </div>
                    <p className="text-xs text-white/40 mb-2 tracking-wide">{item.nameJP}</p>
                    <p className="text-sm text-white/70 leading-relaxed mb-3">{item.description}</p>
                    <div className="flex gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] border border-white/20 px-2 py-1 text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-10 py-3 border border-beer text-beer hover:bg-beer hover:text-sumi transition-all duration-300 font-serif tracking-widest text-sm">
            查看完整菜單
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;