import React from 'react';

const steps = [
  {
    id: 1,
    titleZH: '啤酒先決',
    titleJP: 'まずはビール',
    desc: '從輕盈的台灣小麥啤酒開始，喚醒沉睡的味蕾。乾杯（カンパイ）！',
    image: 'https://picsum.photos/id/40/400/500'
  },
  {
    id: 2,
    titleZH: '直火對決',
    titleJP: '直火との出会い',
    desc: '炭火高溫炙烤的和牛，油脂香氣與深色愛爾啤酒的焦糖尾韻完美融合。',
    image: 'https://picsum.photos/id/292/400/500'
  },
  {
    id: 3,
    titleZH: '餘韻悠長',
    titleJP: '余韻を楽しむ',
    desc: '最後以清酒或季節限定特調收尾，享受整晚的微醺時光。',
    image: 'https://picsum.photos/id/42/400/500'
  }
];

const HowToEnjoy: React.FC = () => {
  return (
    <section id="how-to-enjoy" className="py-24 bg-washi text-sumi">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-beer text-sm font-bold tracking-widest uppercase mb-2">How To Enjoy</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-hanzi mb-4">極致享受的<br className="md:hidden"/>三部曲</h2>
          <p className="font-serif text-sm text-gray-500 tracking-widest">虎炭流・楽しみ方</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.id} className="group flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-8">
                <img 
                  src={step.image} 
                  alt={step.titleZH} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 border border-washi/50 text-washi px-3 py-1 font-serif text-xl">
                  0{step.id}
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="font-serif text-2xl font-bold mb-2 tracking-widest">{step.titleZH}</h3>
                <span className="block text-beer text-xs tracking-widest mb-4 font-medium">{step.titleJP}</span>
                <p className="text-gray-600 leading-loose text-sm tracking-wide">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToEnjoy;