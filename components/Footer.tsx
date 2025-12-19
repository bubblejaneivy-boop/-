import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white/30 py-12 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
           <h2 className="font-serif text-2xl text-white/80 tracking-widest mb-2">虎炭 HUTAN</h2>
           <p className="text-xs tracking-[0.2em]">TAIWAN BEER × IZAKAYA</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-xs tracking-widest mb-8">
           <a href="#" className="hover:text-beer transition-colors">最新消息</a>
           <a href="#" className="hover:text-beer transition-colors">隱私權政策</a>
           <a href="#" className="hover:text-beer transition-colors">人才招募</a>
           <a href="#" className="hover:text-beer transition-colors">Facebook</a>
           <a href="#" className="hover:text-beer transition-colors">Instagram</a>
        </div>

        <div className="text-[10px] tracking-widest opacity-50">
           <p className="mb-2">禁止酒駕 | 未滿十八歲禁止飲酒</p>
           <p>&copy; {new Date().getFullYear()} Hutan Izakaya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;