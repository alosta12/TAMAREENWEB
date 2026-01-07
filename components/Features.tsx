import React from 'react';
import { CalendarCheck, Wallet, Map, Activity, ShieldCheck, Zap } from 'lucide-react';

const featuresList = [
  {
    icon: Wallet,
    title: "One Credit. Any Studio.",
    description: "One credit wallet for all gyms and studios. Buy credits once — train anywhere.",
    large: false
  },
  {
    icon: CalendarCheck,
    title: "Book in Seconds",
    description: "Secure your spot instantly with real-time class availability.",
    large: false
  },
  {
    icon: Map,
    title: "Find Classes Near You",
    description: "Find studios around you. Filter by location, rating, amenities, and class type.",
    large: false
  },
  {
    icon: ShieldCheck,
    title: "Fair & Secure Attendance",
    description: "Every booking generates a secure 5-digit attendance code for safe and fair check-ins.",
    large: false
  },
  {
    icon: Activity,
    title: "Track Your Progress",
    description: "Monitor your attendance, class history, and credit usage in one simple dashboard.",
    large: false
  },
  {
    icon: Zap,
    title: "Freedom to Move",
    description: "Mix and match workouts. Yoga today, boxing tomorrow. No long-term lock-ins.",
    large: false
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-brand-500 fill-current" />
                <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">Why Tamareen?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tight">
              EVERYTHING YOU NEED <br/> TO STAY ACTIVE.
            </h2>
          </div>
          <p className="text-neutral-400 text-lg max-w-sm font-medium">
            We simplify the fitness experience so you can focus on your workout — not the logistics.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {featuresList.map((feature, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-auto snap-center col-span-1 p-6 md:p-8 bg-neutral-900 rounded-[32px] border border-white/5 relative overflow-hidden group hover:border-brand-500/30 transition-all md:hover:translate-y-[-5px]"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6 text-brand-500 border border-white/5 group-hover:bg-brand-500 group-hover:text-black transition-colors duration-300">
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-white mb-3 uppercase italic">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                
                {/* Decorative glow */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-500/5 rounded-full blur-2xl group-hover:bg-brand-500/10 transition-colors"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;