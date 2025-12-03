import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How do credits work?",
    answer: "Credits are your in-app currency to book classes. Each class has a credit value — usually between 3 and 12 credits. You use these credits to book any class at any partner studio."
  },
  {
    question: "Do credits expire?",
    answer: (
        <div>
            <p>Yes. Each bundle has its own validity period:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-white/80">
                <li><span className="text-brand-500 font-bold">Spark:</span> 30 days</li>
                <li><span className="text-brand-500 font-bold">Flow:</span> 60 days</li>
                <li><span className="text-brand-500 font-bold">Pulse:</span> 90 days</li>
            </ul>
        </div>
    )
  },
  {
    question: "How do I check in?",
    answer: "Each booking generates a unique 5-digit code inside the app. Simply show this code at the studio reception to be marked present."
  },
  {
    question: "How many classes can I get?",
    answer: (
      <div className="space-y-4">
        <p className="text-neutral-400">The number of classes depends on the activity type. Here are typical credit ranges:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
           <div className="bg-neutral-900 p-3 rounded-xl border border-white/5">
            <span className="block text-xs text-brand-400 font-bold uppercase mb-1">Pilates Reformer</span>
            <span className="text-white font-bold">6–10 credits</span>
          </div>
           <div className="bg-neutral-900 p-3 rounded-xl border border-white/5">
            <span className="block text-xs text-brand-400 font-bold uppercase mb-1">Boxing / Strength / HIIT</span>
            <span className="text-white font-bold">5–9 credits</span>
          </div>
           <div className="bg-neutral-900 p-3 rounded-xl border border-white/5">
            <span className="block text-xs text-brand-400 font-bold uppercase mb-1">Premium Specialty</span>
            <span className="text-white font-bold">8–12 credits</span>
          </div>
          <div className="bg-neutral-900 p-3 rounded-xl border border-white/5">
            <span className="block text-xs text-brand-400 font-bold uppercase mb-1">Yoga / Mat / Dance</span>
            <span className="text-white font-bold">4–7 credits</span>
          </div>
          <div className="bg-neutral-900 p-3 rounded-xl border border-white/5">
            <span className="block text-xs text-brand-400 font-bold uppercase mb-1">Gym Day-Pass</span>
            <span className="text-white font-bold">3–6 credits</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-sm font-semibold text-white mb-2">Bundle Averages:</p>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li className="flex justify-between"><span className="text-white">Spark</span> <span>1–3 classes</span></li>
            <li className="flex justify-between"><span className="text-white">Flow</span> <span>3–7 classes</span></li>
            <li className="flex justify-between"><span className="text-white">Pulse</span> <span>6–14 classes</span></li>
          </ul>
        </div>
      </div>
    )
  },
  {
      question: "Can I use my credits at any studio?",
      answer: "Yes. Credits work across all partner gyms and studios on Tamareen. You are not locked into one location."
  },
  {
      question: "Can I buy more credits anytime?",
      answer: "Absolutely — you can top up whenever you need more credits directly from the app."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
              <HelpCircle className="w-6 h-6 text-brand-500" />
           </div>
          <h2 className="text-3xl font-black text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-400">Everything you need to know about credits, booking, and check-ins.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-neutral-800/30 border border-white/5 rounded-2xl overflow-hidden hover:bg-neutral-800/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;