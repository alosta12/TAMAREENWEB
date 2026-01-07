import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { PricingTierProps } from '../types';

const tiers: PricingTierProps[] = [
  {
    name: 'The Spark',
    price: '$20',
    features: [
      '40 Credits',
      'Validity: 30 days',
      'Best for trying Tamareen',
    ],
    ctaText: 'Get Spark',
  },
  {
    name: 'The Flow',
    price: '$50',
    features: [
      '105 Credits (5 Bonus)',
      'Validity: 60 days',
      'Save ~5%',
      'Best for regular training',
    ],
    highlight: true,
    ctaText: 'Get Flow',
  },
  {
    name: 'The Pulse',
    price: '$100',
    features: [
      '220 Credits (20 Bonus)',
      'Validity: 90 days',
      'Save ~10%',
      'Best value for active users',
    ],
    ctaText: 'Get Pulse',
  },
];

const Pricing: React.FC = () => {
  // Helper to determine order classes for mobile reordering
  const getOrderClass = (index: number) => {
    // Flow (index 1) -> First on mobile (order-1), Second on desktop (order-2)
    if (index === 1) return 'order-1 md:order-2';
    // Spark (index 0) -> Second on mobile (order-2), First on desktop (order-1)
    if (index === 0) return 'order-2 md:order-1';
    // Pulse (index 2) -> Third on mobile (order-3), Third on desktop (order-3)
    return 'order-3 md:order-3';
  };

  return (
    <section id="pricing" className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
       {/* Decorative gradient - Optimized */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(171,226,37,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-2 block">Tamareen Pricing & Packages</span>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
                    TOP UP <br/> <span className="text-brand-500">& TRAIN.</span>
                </h2>
            </div>
            <p className="text-neutral-400 text-lg max-w-sm text-right md:text-right text-left font-medium">
                Simple credit bundles. Flat pricing. No hidden fees.
            </p>
        </div>

        {/* Pricing Grid with Mobile Reordering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 items-end mb-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 rounded-[24px] transition-all duration-300 ${getOrderClass(index)} ${
                tier.highlight
                  ? 'bg-brand-500 text-black shadow-[0_0_50px_rgba(171,226,37,0.3)] transform md:-translate-y-4 z-10'
                  : 'bg-neutral-900 border border-white/10 text-white hover:border-white/20'
              }`}
            >
              <div className="flex flex-col h-full">
                 <div className="mb-4">
                    <h3 className={`text-xl font-black uppercase italic mb-1 ${tier.highlight ? 'text-black' : 'text-white'}`}>{tier.name}</h3>
                    <span className={`text-4xl font-black tracking-tighter ${tier.highlight ? 'text-black' : 'text-white'}`}>{tier.price}</span>
                 </div>
                
                {/* Features List */}
                <div className="space-y-3 mb-6 flex-grow">
                    {/* Credits Line */}
                    <div className="flex items-center gap-2 font-bold text-lg">
                        <Check className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? 'text-black' : 'text-brand-500'}`} />
                        {tier.features[0]}
                    </div>
                    
                    {/* Validity & Savings */}
                    <div className={`text-sm space-y-1 ${tier.highlight ? 'text-black/80' : 'text-neutral-400'}`}>
                        {tier.features.slice(1, tier.features.length - 1).map((feature, i) => (
                           <p key={i} className={`font-bold ${tier.highlight ? 'text-black' : 'text-white'}`}>{feature}</p>
                        ))}
                    </div>

                    {/* Ideal For */}
                    <p className={`text-sm leading-snug pt-2 ${tier.highlight ? 'text-black/70' : 'text-neutral-500'}`}>
                      {tier.features[tier.features.length - 1]}
                    </p>
                </div>

                <button
                  className={`w-full py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-auto ${
                    tier.highlight
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
        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left max-w-4xl mx-auto">
             <div className="bg-brand-500/10 p-3 rounded-full">
                <Info className="w-6 h-6 text-brand-500" />
             </div>
             <div>
                <p className="text-white text-base font-bold mb-1">
                   Context: <span className="text-brand-500">Standard Class ≈ 30 Credits</span>
                </p>
                <p className="text-neutral-400 text-sm">
                   Each class has a unique credit value based on the studio, time, and class type. You decide how to spend them.
                </p>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;