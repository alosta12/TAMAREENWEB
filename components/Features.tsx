import React from 'react';
import { CalendarCheck, Wallet, Users, Map, Activity, ShieldCheck, Zap } from 'lucide-react';

const featuresList = [
  {
    icon: CalendarCheck,
    title: "Instant Booking",
    description: "Book your spot instantly with real-time class availability.",
    large: false
  },
  {
    icon: Wallet,
    title: "Smart Wallet",
    description: "One credit wallet for all gyms and studios. Buy credits once — train anywhere.",
    large: false
  },
  {
    icon: Users,
    title: "Social Fitness",
    description: "See where your friends are training, join their classes, and share achievements.",
    large: false
  },
  {
    icon: Map,
    title: "Explore Nearby",
    description: "Find studios around you. Filter by location, rating, amenities, and class type.",
    large: false
  },
  {
    icon: Activity,
    title: "Performance Tracking",
    description: "Track your attendance, class history, and progress across all studios in one place.",
    large: false
  },
  {
    icon: ShieldCheck,
    title: "Verified Check-In",
    description: "Every booking generates a secure 5-digit attendance code for safe and fair check-ins.",
    large: false
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresList.map((feature, index) => (
              <div 
                key={index}
                className="col-span-1 p-8 bg-neutral-900 rounded-[32px] border border-white/5 relative overflow-hidden group hover:border-brand-500/30 transition-all hover:translate-y-[-5px]"
              >
                <div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6 text-brand-500 border border-white/5 group-hover:bg-brand-500 group-hover:text-black transition-colors duration-300">
                    <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-white mb-3 uppercase italic">{feature.title}</h3>
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