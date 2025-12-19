import React from 'react';
import { STORY_CONTENT } from '../constants';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-washi text-sumi overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side with Floating Text */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
               <img 
                 src={STORY_CONTENT.image} 
                 alt="Izakaya Vibe" 
                 className="w-full h-full object-cover grayscale contrast-125"
               />
               <div className="absolute inset-0 bg-beer/10 mix-blend-multiply"></div>
            </div>
            {/* Vertical Japanese Text Decoration */}
            <div className="absolute -right-6 top-10 md:-right-10 hidden md:block">
               <p className="vertical-text font-serif text-4xl text-sumi font-bold opacity-10 leading-loose tracking-[0.5em] h-full">
                 一期一会、至福の時間
               </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <span className="text-beer text-sm font-bold tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-hanzi mb-2">
              {STORY_CONTENT.titleZH}
            </h2>
            <p className="font-serif text-lg text-gray-400 mb-8 tracking-widest">
              {STORY_CONTENT.titleJP}
            </p>
            
            <div className="prose prose-lg text-gray-700 font-light leading-loose tracking-wide">
              <p>
                {STORY_CONTENT.content}
              </p>
              <p className="mt-6">
                每一次炭火升起，每一杯啤酒斟滿，都是為了傳遞那份單純的感動。我們將台灣的熱情與日本的細膩，濃縮在這個空間裡。
              </p>
            </div>

            <div className="mt-12 flex items-center space-x-4">
               <div className="w-12 h-[1px] bg-sumi"></div>
               <span className="font-serif tracking-widest text-sm">虎炭 店主</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;