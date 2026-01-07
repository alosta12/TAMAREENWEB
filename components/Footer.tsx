import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: 'user' | 'studio') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div onClick={() => onNavigate('user')} className="inline-block cursor-pointer mb-6 group hover:opacity-90 transition-opacity">
                {/* Increased height to h-24 (approx 96px) for massive footer logo */}
                <Logo className="h-24 w-auto text-4xl" />
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                Redefining how you move. Join the movement and access the city's top fitness destinations with one wallet.
              </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('user')} className="text-neutral-500 hover:text-brand-400 text-sm transition-colors text-left">Studios</button></li>
              <li><button onClick={() => onNavigate('user')} className="text-neutral-500 hover:text-brand-400 text-sm transition-colors text-left">Classes</button></li>
              <li><button onClick={() => onNavigate('user')} className="text-neutral-500 hover:text-brand-400 text-sm transition-colors text-left">Instructors</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#faq" onClick={() => onNavigate('user')} className="text-neutral-500 hover:text-brand-400 text-sm transition-colors">FAQ</a></li>
              <li><a href="#pricing" onClick={() => onNavigate('user')} className="text-neutral-500 hover:text-brand-400 text-sm transition-colors">Pricing</a></li>
              <li><button onClick={() => onNavigate('studio')} className="text-neutral-500 hover:text-brand-400 text-sm transition-colors text-left font-bold text-brand-500/80">Partner with Us</button></li>
              <li><a href="#" className="text-neutral-500 hover:text-brand-400 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-neutral-500 hover:text-brand-400 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-brand-400 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-brand-400 text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Tamareen Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-500 hover:text-brand-400 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-neutral-500 hover:text-brand-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-neutral-500 hover:text-brand-400 transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;