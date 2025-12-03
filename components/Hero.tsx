import React from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const marqueeItems = ["YOGA", "BOXING", "HIIT", "PILATES", "CROSSFIT", "DANCE", "GYM", "SWIMMING", "SPINNING", "RECOVERY"];

  return (
    <section className="relative pt-32 pb-0 overflow-hidden bg-black flex flex-col items-center">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Top Subtext */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span className="text-sm font-bold text-white tracking-wide uppercase">Lebanon’s new fitness app is launching soon</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
            TRAIN <br className="md:hidden" />
            <span className="text-brand-500">YOUR WAY.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white font-bold max-w-2xl mx-auto mb-10 leading-tight">
            Book the best classes across all studios with flexible credits.
          </p>

          {/* Buttons Removed */}

          {/* Micro-benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 text-sm font-semibold text-neutral-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-500" /> Train anywhere
            </div>
            {/* Removed 'Cancel anytime' */}
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-500" /> No hidden fees
            </div>
          </div>

          {/* Phone Mockup - Centered & Overlapping */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 mt-[-20px]"
          >
             {/* Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-brand-500/20 blur-[80px] rounded-full -z-10" />

            {/* Phone Frame */}
            <div className="relative w-[300px] md:w-[340px] h-[600px] md:h-[680px] bg-black rounded-[45px] border-[8px] border-neutral-800 shadow-2xl overflow-hidden mx-auto ring-1 ring-white/10">
                
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-10 px-6 flex justify-between items-center z-30 pt-3">
                    <span className="text-[12px] font-bold text-white">9:41</span>
                    <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                        <div className="w-3 h-3 rounded-full bg-white/50"></div>
                        <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    </div>
                </div>

                {/* App Content: Splash Screen 'All Gyms. One App' */}
                <div className="flex-1 relative flex flex-col h-full">
                    {/* Background Image - Moody Gym */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
                            className="w-full h-full object-cover grayscale brightness-75 contrast-125" 
                            alt="Fitness Background" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
                        <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay"></div>
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col px-8 pb-12 justify-end">
                        {/* Title */}
                        <div className="mb-8">
                             <h2 className="text-5xl font-black text-white leading-[0.85] tracking-tighter mb-1 drop-shadow-lg">
                                ALL GYMS.
                             </h2>
                             <h2 className="text-5xl font-black text-brand-500 leading-[0.85] tracking-tighter drop-shadow-[0_0_15px_rgba(171,226,37,0.5)]">
                                ONE APP.
                             </h2>
                        </div>

                        {/* Pagination */}
                        <div className="flex space-x-2 mb-8">
                             <div className="h-1.5 w-8 rounded-full bg-brand-500"></div>
                             <div className="h-1.5 w-2 rounded-full bg-white/30"></div>
                             <div className="h-1.5 w-2 rounded-full bg-white/30"></div>
                        </div>

                        {/* Subtext */}
                        <div className="mb-8">
                            <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                                Discover Beirut's fitness scene. <br/> <span className="text-brand-400">"Tamareen"</span> where you belong.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-3 w-full">
                            <button className="w-full py-4 rounded-xl bg-brand-500 text-black font-bold text-sm tracking-wide uppercase shadow-[0_4px_20px_rgba(171,226,37,0.3)]">
                                Register
                            </button>
                            <button className="w-full py-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-wide uppercase">
                                Log In
                            </button>
                        </div>

                        {/* Guest Link */}
                        <div className="mt-6 text-center">
                            <button className="text-[10px] text-white/60 font-medium uppercase tracking-widest hover:text-brand-400 transition-colors">
                                Continue As Guest
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-30"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Strip */}
      <div className="w-full bg-brand-500 py-4 overflow-hidden relative z-20 transform -rotate-1 border-y-4 border-black mt-[-40px] md:mt-[-80px]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-2xl md:text-4xl font-black text-black mx-6 md:mx-10 tracking-tighter uppercase italic">
              {item} •
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;