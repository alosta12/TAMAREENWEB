import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const marqueeItems = ["YOGA", "BOXING", "HIIT", "PILATES", "CROSSFIT", "DANCE", "GYM", "SWIMMING", "SPINNING", "RECOVERY"];

  return (
    <section className="relative pt-28 md:pt-32 pb-0 overflow-hidden bg-black flex flex-col items-center">
      {/* Dynamic Background - Optimized: Switched from Blur to Radial Gradient for mobile performance */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(171,226,37,0.15)_0%,transparent_70%)]" />
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
          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 md:mb-10 leading-[0.9]">
            TRAIN <br className="md:hidden" />
            <span className="text-brand-500">YOUR WAY.</span>
          </h1>
          
          {/* Micro-benefits - Cleaned up spacing */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-8 md:mb-20 text-xs md:text-sm font-bold text-neutral-400 uppercase tracking-widest">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-brand-500" /> Train anywhere
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-brand-500" /> No hidden fees
            </div>
          </div>

          {/* Phone Mockup - Cleaned up negative margin for mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 mt-2 md:mt-[-20px] w-full max-w-[320px] md:max-w-none"
          >
             {/* Glow behind phone - Optimized */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] md:w-[350px] md:h-[600px] bg-[radial-gradient(circle_at_center,rgba(171,226,37,0.2)_0%,transparent_70%)] -z-10" />

            {/* Phone Frame */}
            <div className="relative w-[260px] h-[520px] md:w-[340px] md:h-[680px] bg-black rounded-[40px] md:rounded-[45px] border-[6px] md:border-[8px] border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden mx-auto ring-1 ring-white/10">
                
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-12 px-6 flex justify-between items-center z-30 pt-4">
                    <span className="text-[12px] font-bold text-white">9:41</span>
                    <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                        <div className="w-3 h-3 rounded-full bg-white/50"></div>
                        <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    </div>
                </div>

                {/* App Content: Splash Screen */}
                <div className="flex-1 relative flex flex-col h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" 
                            className="w-full h-full object-cover grayscale brightness-75 contrast-125" 
                            alt="Fitness Background" 
                            loading="eager"
                            fetchPriority="high"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
                        <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay"></div>
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col px-6 md:px-8 justify-center items-center">
                        {/* Title */}
                        <div className="mb-6 text-center">
                             <h2 className="text-4xl md:text-5xl font-black text-white leading-[0.85] tracking-tighter mb-1 drop-shadow-lg">
                                ALL GYMS.
                             </h2>
                             <h2 className="text-4xl md:text-5xl font-black text-brand-500 leading-[0.85] tracking-tighter drop-shadow-[0_0_15px_rgba(171,226,37,0.5)]">
                                ONE APP.
                             </h2>
                        </div>

                        {/* Pagination */}
                        <div className="flex space-x-2">
                             <div className="h-1.5 w-8 rounded-full bg-brand-500"></div>
                             <div className="h-1.5 w-2 rounded-full bg-white/30"></div>
                             <div className="h-1.5 w-2 rounded-full bg-white/30"></div>
                        </div>
                    </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-30"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Strip - Positioned behind/bottom */}
      <div className="w-full bg-brand-500 py-3 md:py-4 overflow-hidden relative z-10 transform -rotate-1 border-y-4 border-black mt-[-40px] md:mt-[-80px]">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-xl md:text-4xl font-black text-black mx-4 md:mx-10 tracking-tighter uppercase italic">
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