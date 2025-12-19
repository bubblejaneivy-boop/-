import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-sumi text-washi">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Column */}
          <div className="lg:w-1/3">
            <span className="text-beer text-sm font-bold tracking-widest uppercase mb-4 block">Information</span>
            <h2 className="font-serif text-3xl font-bold tracking-hanzi mb-8">店舖資訊 <span className="text-lg font-normal text-gray-500 block mt-2">店舗情報</span></h2>
            
            <div className="space-y-8 font-serif tracking-widest">
              <div className="flex items-start space-x-4">
                <MapPin className="text-beer w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-1">地址 (Address)</h4>
                  <p className="text-white/70">台北市信義區虎林街 88 號</p>
                  <p className="text-xs text-white/40 mt-1">No. 88, Hulin St., Xinyi Dist., Taipei City</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-beer w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-1">營業時間 (Hours)</h4>
                  <p className="text-white/70">週二至週日 18:00 - 01:00</p>
                  <p className="text-xs text-white/40 mt-1">定休日：週一 (Monday Closed)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-beer w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-1">聯絡電話 (Phone)</h4>
                  <p className="text-white/70">02-2345-6789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-2/3 bg-white/5 p-8 md:p-12 border border-white/10">
             <div className="mb-8 text-center md:text-left">
                <h3 className="font-serif text-2xl tracking-widest mb-2">預約席次</h3>
                <p className="text-sm text-white/50">ご予約・お問い合わせ</p>
             </div>

             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs uppercase tracking-widest text-beer mb-2">姓名 / Name</label>
                   <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-beer transition-colors" placeholder="您的姓名" />
                 </div>
                 <div>
                   <label className="block text-xs uppercase tracking-widest text-beer mb-2">電話 / Phone</label>
                   <input type="tel" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-beer transition-colors" placeholder="09xx-xxx-xxx" />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs uppercase tracking-widest text-beer mb-2">日期 / Date</label>
                    <input type="date" className="w-full bg-transparent border-b border-white/20 py-2 text-white/70 focus:outline-none focus:border-beer transition-colors" />
                 </div>
                 <div>
                    <label className="block text-xs uppercase tracking-widest text-beer mb-2">人數 / Guests</label>
                    <select className="w-full bg-transparent border-b border-white/20 py-2 text-white/70 focus:outline-none focus:border-beer transition-colors [&>option]:bg-sumi">
                      <option>2位</option>
                      <option>3-4位</option>
                      <option>5-6位</option>
                      <option>7位以上</option>
                    </select>
                 </div>
               </div>

               <div>
                 <label className="block text-xs uppercase tracking-widest text-beer mb-2">備註 / Message</label>
                 <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-beer transition-colors" placeholder="特殊飲食需求或慶祝活動..."></textarea>
               </div>

               <div className="pt-4 text-center md:text-right">
                 <button type="button" className="px-12 py-3 bg-beer text-sumi font-serif font-bold tracking-[0.2em] hover:bg-white transition-colors duration-300">
                   送出預約
                 </button>
               </div>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;