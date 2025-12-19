import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/431/1920/1080" 
          alt="Charcoal Grill" 
          className="w-full h-full object-cover grayscale brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sumi/90 via-sumi/30 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center flex flex-col items-center text-washi px-4">
        <div className="flex items-start justify-center space-x-6 md:space-x-12 mb-8">
           {/* Vertical Japanese Text */}
           <div className="hidden md:block vertical-text font-serif text-lg md:text-xl tracking-[0.5em] opacity-80 border-l border-white/20 pl-4 py-4 h-64">
             極上の相性、此処にあり
           </div>
           
           <div className="flex flex-col items-center">
              <h2 className="text-amber-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-4 animate-fade-in-up">
                Taiwan Beer × Japanese BBQ
              </h2>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-widest font-bold mb-6 leading-tight animate-fade-in-up delay-100">
                虎炭<br/>
                <span className="text-3xl md:text-5xl font-light mt-2 block">HUTAN</span>
              </h1>
              <div className="h-[1px] w-24 bg-amber-500 mb-6"></div>
              <p className="font-serif text-lg md:text-2xl tracking-hanzi animate-fade-in-up delay-200">
                台灣手作啤酒<span className="mx-3 text-amber-500">×</span>日式直火燒烤
              </p>
           </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-6 animate-fade-in-up delay-300">
          <a href="#contact" className="px-8 py-3 bg-beer text-sumi font-serif tracking-widest hover:bg-white transition-colors duration-300">
            線上預約
          </a>
          <a href="#menu" className="px-8 py-3 border border-washi/50 text-washi font-serif tracking-widest hover:bg-washi hover:text-sumi transition-colors duration-300">
            瀏覽菜單
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#how-to-enjoy" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-washi/50 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </a>
    </section>
  );
};

export default Hero;