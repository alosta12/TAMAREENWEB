import React from 'react';
import { ArrowRight, BarChart3, Users, ShieldCheck, DollarSign, Settings, Globe, CheckCircle2, Activity } from 'lucide-react';

const StudioLanding: React.FC = () => {
  return (
    <div className="bg-black text-white pt-20 overflow-hidden font-sans">
      
      {/* 1. HERO SECTION - Compact & Clean */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center border-b border-white/5">
         {/* Background Glow - Optimized */}
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(171,226,37,0.1)_0%,transparent_70%)] pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-white tracking-wide uppercase">For Gym Owners & Studios</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.95]">
              GROW YOUR STUDIO <br/>
              <span className="text-brand-500">WITH TAMAREEN.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Fill more classes, reach new clients, and get guaranteed payouts — without extra marketing costs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-brand-500 text-black font-black uppercase tracking-wide rounded-xl hover:bg-brand-400 transition-all hover:shadow-[0_0_30px_rgba(171,226,37,0.4)] text-sm md:text-base flex items-center justify-center gap-2">
                Become a Partner <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 border border-white/10 text-white font-bold uppercase tracking-wide rounded-xl hover:bg-neutral-800 transition-all text-sm md:text-base">
                Book a Demo
              </button>
            </div>
         </div>
      </section>

      {/* 2. VALUE PROPOSITION */}
      <section className="py-12 border-b border-white/5 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4 text-white">
            More Clients. <span className="text-brand-500">Zero Admin.</span> Guaranteed Revenue.
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Tamareen helps you increase class attendance, attract new customers, and streamline check-in —
            all while maintaining control of your pricing and your brand.
          </p>
        </div>
      </section>

      {/* 2.5 STUDIO VIBE - Gallery Slider */}
      <section className="py-12 bg-black border-b border-white/5 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">The Vibe</h2>
            <div className="md:hidden flex items-center gap-1 text-[10px] text-brand-500 font-bold uppercase tracking-widest animate-pulse">
                <span>Swipe</span> <ArrowRight className="w-3 h-3" />
            </div>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 scrollbar-hide">
            {[
                { 
                    text: "BEAST MODE", 
                    sub: "UNLEASH IT", 
                    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                    text: "PUSH LIMITS", 
                    sub: "GO HARDER", 
                    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                    text: "TOP FORM", 
                    sub: "LEVEL UP", 
                    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                    text: "ON FIRE", 
                    sub: "FEEL THE BURN", 
                    img: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                    text: "LIFT HEAVY", 
                    sub: "PURE IRON", 
                    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" 
                }
            ].map((item, i) => (
                <div key={i} className="relative w-[280px] md:w-[320px] h-[400px] flex-shrink-0 snap-center rounded-2xl overflow-hidden group border border-white/10 hover:border-brand-500/50 transition-all">
                    <img 
                        src={item.img} 
                        alt={item.text} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale contrast-125" 
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                    
                    <div className="absolute bottom-6 left-6 z-10">
                        <p className="text-brand-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1">
                            {item.sub}
                        </p>
                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">{item.text}</h3>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 3. BENEFIT SECTION - Horizontal Scroll on Mobile */}
      <section className="py-12 max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 mb-6 md:hidden">
            <p className="text-brand-500 text-[10px] font-bold uppercase tracking-widest text-center">Swipe to explore benefits</p>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0 scrollbar-hide">
           {[
             {
               icon: DollarSign,
               title: "Guaranteed Payouts",
               desc: "You set your wholesale price. Studios get paid for every attended booking — directly, on time, every month."
             },
             {
               icon: ShieldCheck,
               title: "Verified Attendance",
               desc: "Every booking generates a secure 5-digit check-in code. No QR scanners. No fake check-ins."
             },
             {
               icon: Users,
               title: "Fill Empty Spots",
               desc: "List your classes on Tamareen and unlock new revenue from sessions that would otherwise remain empty."
             },
             {
               icon: Globe,
               title: "No Marketing Costs",
               desc: "We attract users. You focus on the classes. Zero ads. Zero campaigns. Zero extra work."
             },
             {
               icon: Settings,
               title: "Control Your Pricing",
               desc: "You choose your MSRP and wholesale rate. Full transparency. No commission surprises."
             },
             {
               icon: Activity,
               title: "Real Visibility",
               desc: "Your classes and instructors become discoverable across the entire Tamareen user base."
             }
           ].map((item, index) => (
             <div 
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-auto snap-center bg-neutral-900 p-6 rounded-2xl border border-white/5 hover:border-brand-500/30 transition-all group hover:bg-neutral-800"
             >
                <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-black transition-all text-brand-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white uppercase italic">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
             </div>
           ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS - Horizontal Scroll on Mobile */}
      <section className="py-12 bg-neutral-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                 <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic">How It Works</h2>
            </div>
            
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:flex-row md:gap-8 md:pb-0 scrollbar-hide">
                {[
                    { step: "01", title: "Apply to Join", desc: "Submit your studio details. Our team reviews your application within 48 hours." },
                    { step: "02", title: "Set Pricing", desc: "You choose your class MSRP and your wholesale payout. We handle the rest." },
                    { step: "03", title: "Go Live", desc: "We upload your schedule. Users book instantly. You get paid." }
                ].map((item, i) => (
                    <div key={i} className="flex-shrink-0 w-[80vw] md:flex-1 snap-center bg-black p-8 rounded-[32px] border border-white/10 relative overflow-hidden group hover:border-brand-500/30 transition-colors">
                        <span className="text-8xl font-black text-neutral-800 absolute -bottom-8 -right-4 select-none opacity-50 group-hover:text-neutral-700 transition-colors">{item.step}</span>
                        <div className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-2">Step {item.step}</div>
                        <h3 className="text-xl font-black text-white mb-3 uppercase italic">{item.title}</h3>
                        <p className="text-neutral-400 text-sm relative z-10 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. A PERFECT FIT FOR... */}
      <section className="py-12 bg-black border-b border-white/5">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-sm font-bold text-neutral-500 mb-6 uppercase tracking-widest">A Perfect Fit For</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {["Pilates Studios", "Yoga Studios", "Boxing Gyms", "HIIT Centers", "Cross-Training", "Boutique Fitness", "Independent Instructors"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-neutral-900 border border-white/10 text-white text-sm font-semibold rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
         </div>
      </section>

      {/* 6. PRICING FOR STUDIOS */}
      <section className="py-16 bg-brand-500 text-black text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">Simple Pricing</h2>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10 text-sm md:text-base font-bold">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> No Monthly Fees</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> No Setup Fees</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> No Hidden Charges</div>
              </div>
              
              <div className="bg-black text-white p-8 rounded-[32px] inline-block w-full max-w-xl shadow-2xl relative">
                  <h3 className="text-neutral-400 text-sm uppercase tracking-widest font-bold mb-2">Your Revenue Formula</h3>
                  <div className="text-lg md:text-2xl font-bold">
                      <span className="text-brand-500">Your Profit</span> = <span className="underline decoration-brand-500 decoration-2 underline-offset-4">Wholesale Price</span> × <span className="underline decoration-brand-500 decoration-2 underline-offset-4">Attended Users</span>
                  </div>
                  <p className="text-neutral-500 text-sm mt-4">We take care of everything else.</p>
              </div>
          </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 bg-black text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase italic">
                  Ready to Grow <br/> <span className="text-brand-500">Your Studio?</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-10 py-4 bg-brand-500 text-black font-black uppercase tracking-widest rounded-xl hover:bg-brand-400 transition-all hover:shadow-[0_0_30px_rgba(171,226,37,0.4)] text-sm">
                    Become a Partner
                </button>
                <button className="w-full sm:w-auto px-10 py-4 bg-neutral-900 border border-white/20 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-neutral-800 transition-all text-sm">
                    Schedule a Call
                </button>
              </div>
          </div>
      </section>
    </div>
  );
};

export default StudioLanding;