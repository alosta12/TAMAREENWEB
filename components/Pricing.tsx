import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PricingTierProps } from '../types';

const tiers: PricingTierProps[] = [
  {
    name: 'The Spark',
    price: '$20',
    features: [
      '10 Credits',
      'Validity: 30 days',
      'Typically 1–3 classes',
      'Ideal for first-time or occasional users',
    ],
    ctaText: 'Get Spark',
  },
  {
    name: 'The Flow',
    price: '$47',
    features: [
      '25 Credits',
      'Validity: 60 days',
      'Typically 3–7 classes',
      'Ideal for 2–3 sessions per week',
    ],
    isPopular: true,
    ctaText: 'Get Flow',
  },
  {
    name: 'The Pulse',
    price: '$85',
    features: [
      '50 Credits',
      'Validity: 90 days',
      'Typically 6–14 classes',
      'Best value for active users training 3–5 times weekly',
    ],
    ctaText: 'Get Pulse',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
       {/* Decorative gradient */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-2 block">Tamareen Pricing & Packages</span>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
                    TOP UP <br/> <span className="text-brand-500">& TRAIN.</span>
                </h2>
            </div>
            <p className="text-neutral-400 text-lg max-w-sm text-right md:text-right text-left font-medium">
                Simple credit bundles. No hidden fees.
            </p>
        </div>

        {/* Updated gap-y-12 to prevent tag overlap on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 items-end mb-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 rounded-[24px] transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-brand-500 text-black shadow-[0_0_50px_rgba(171,226,37,0.3)] transform md:-translate-y-4 z-10'
                  : 'bg-neutral-900 border border-white/10 text-white hover:border-white/20'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black text-brand-500 text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full border border-brand-500 shadow-xl flex items-center gap-2 whitespace-nowrap z-20">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              
              <div className="flex flex-col h-full">
                 <div className="mb-4">
                    <h3 className={`text-xl font-black uppercase italic mb-1 ${tier.isPopular ? 'text-black' : 'text-white'}`}>{tier.name}</h3>
                    <span className={`text-4xl font-black tracking-tighter ${tier.isPopular ? 'text-black' : 'text-white'}`}>{tier.price}</span>
                 </div>
                
                {/* Specific Order: Credits -> Validity -> Typically -> Ideal For */}
                <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-center gap-2 font-bold text-lg">
                        <Check className={`w-5 h-5 flex-shrink-0 ${tier.isPopular ? 'text-black' : 'text-brand-500'}`} />
                        {tier.features[0]} {/* Credits */}
                    </div>
                     <div className={`text-sm space-y-1 ${tier.isPopular ? 'text-black/80' : 'text-neutral-400'}`}>
                        <p className="font-medium">{tier.features[1]}</p> {/* Validity */}
                        <p className={`font-bold ${tier.isPopular ? 'text-black' : 'text-white'}`}>{tier.features[2]}</p> {/* Typical */}
                    </div>
                    <p className={`text-sm leading-snug pt-2 ${tier.isPopular ? 'text-black/70' : 'text-neutral-500'}`}>
                      {tier.features[3]} {/* Ideal For */}
                    </p>
                </div>

                <button
                  className={`w-full py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-auto ${
                    tier.isPopular
                      ? 'bg-black text-white hover:bg-neutral-800 shadow-lg'
                      : 'bg-white text-black hover:bg-brand-500 hover:text-black border border-transparent'
                  }`}
                >
                  {tier.ctaText} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Credit Usage Explanation */}
        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 text-center max-w-3xl mx-auto">
             <p className="text-neutral-300 text-sm">
                <strong className="text-brand-500">How Credit Usage Works:</strong> Each class has a credit value depending on the studio, time, and class type. You always choose how to spend your credits — premium or regular classes.
             </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;