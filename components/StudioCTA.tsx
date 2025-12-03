import React from 'react';
import { ArrowRight, BarChart3, Users, ShieldCheck } from 'lucide-react';

interface StudioCTAProps {
  onNavigate: (page: 'user' | 'studio') => void;
}

const StudioCTA: React.FC<StudioCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-900 to-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-800/50 rounded-[40px] border border-white/10 p-8 md:p-16 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4 block">For Gym Owners</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Grow Your Studio <br/> With Us.
              </h2>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Join Tamareen and bring more members into your classes — without extra marketing costs.
              </p>
              
              <button 
                onClick={() => onNavigate('studio')}
                className="bg-white text-black hover:bg-brand-500 transition-colors px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wide flex items-center gap-2"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {/* Benefit 1 */}
               <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 bg-brand-500/20 text-brand-500 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Guaranteed Payouts</h4>
                  <p className="text-neutral-500 text-sm">Predictable wholesale pricing for every spot filled.</p>
               </div>

               {/* Benefit 2 */}
               <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 bg-brand-500/20 text-brand-500 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold mb-2">New Clients</h4>
                  <p className="text-neutral-500 text-sm">Fill empty spots without discounting publicly. No upfront cost.</p>
               </div>

                {/* Benefit 3 */}
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 bg-brand-500/20 text-brand-500 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Verified Check-Ins</h4>
                  <p className="text-neutral-500 text-sm">Secure 5-digit code system ensures accurate attendance.</p>
               </div>

                {/* Benefit 4 */}
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 bg-brand-500/20 text-brand-500 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Zero Setup Effort</h4>
                  <p className="text-neutral-500 text-sm">We assist in adding your classes. Full analytics dashboard included.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioCTA;