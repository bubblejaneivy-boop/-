import React from 'react';

const Craftsmanship: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-24 bg-neutral-100 text-sumi">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="font-serif text-3xl font-bold tracking-[0.2em] mb-4">職人與工藝</h2>
           <p className="text-gray-500 font-serif tracking-widest">こだわりと、情熱</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
           {/* Beer Craft */}
           <div className="relative group overflow-hidden h-96 md:h-[500px]">
             <img src="https://picsum.photos/id/447/800/800" alt="Brewing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center text-washi p-8 text-center">
                <h3 className="font-serif text-2xl tracking-[0.3em] mb-4 border-b border-white/30 pb-2">釀造</h3>
                <p className="font-serif text-sm tracking-widest mb-4 opacity-80">BREWING</p>
                <p className="max-w-xs text-sm leading-loose opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   嚴選台灣在地小麥與優質啤酒花，堅持 28 天低溫熟成。每一滴金黃酒液，都是時間的禮物。<br/>
                   <span className="text-beer mt-2 block">手作の温もり</span>
                </p>
             </div>
           </div>

           {/* BBQ Craft */}
           <div className="relative group overflow-hidden h-96 md:h-[500px]">
             <img src="https://picsum.photos/id/348/800/800" alt="Grilling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center text-washi p-8 text-center">
                <h3 className="font-serif text-2xl tracking-[0.3em] mb-4 border-b border-white/30 pb-2">炙燒</h3>
                <p className="font-serif text-sm tracking-widest mb-4 opacity-80">GRILLING</p>
                <p className="max-w-xs text-sm leading-loose opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   使用高品質備長炭，高溫 800 度瞬間鎖住肉汁。師傅專注的眼神，是對食材最高的敬意。<br/>
                   <span className="text-beer mt-2 block">匠の技</span>
                </p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;