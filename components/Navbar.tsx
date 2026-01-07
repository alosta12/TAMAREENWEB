import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ArrowRight, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (page: 'user' | 'studio') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Passive listener improves scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleDownload = () => {
    window.open('https://apps.apple.com', '_blank');
  };

  const handleLogoClick = () => {
    onNavigate('user');
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 py-3'
            : 'bg-transparent py-8 md:py-10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* MASSIVE UPPER LEFT LOGO */}
            <div 
              onClick={handleLogoClick}
              className="flex-shrink-0 flex items-center cursor-pointer group transition-transform active:scale-95 z-[70]"
            >
              <Logo className="h-16 md:h-28 lg:h-36 w-auto transform -translate-x-2 md:-translate-x-4" />
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center space-x-12">
              <div className="flex items-center space-x-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => onNavigate('user')}
                    className="text-neutral-400 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="h-10 w-px bg-white/10"></div>

              {/* STUDIO OWNER SPECIFIC SECTION */}
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => onNavigate('studio')}
                  className="group relative flex flex-col items-start bg-white/5 hover:bg-brand-500/10 border border-white/10 hover:border-brand-500 px-6 py-3.5 rounded-2xl transition-all"
                >
                  <span className="flex items-center gap-2 text-[10px] font-black text-brand-500 uppercase tracking-[0.25em] mb-1">
                    <Building2 className="w-3.5 h-3.5" /> Studio Owners Only
                  </span>
                  <span className="text-white font-black uppercase tracking-tight text-xl leading-tight group-hover:text-brand-500 transition-colors">
                    Partner With Us
                  </span>
                </button>

                <button 
                  onClick={handleDownload}
                  className="bg-brand-500 hover:bg-brand-400 text-black px-10 py-4.5 rounded-2xl text-sm font-black uppercase tracking-widest shadow-[0_0_30px_rgba(171,226,37,0.3)] hover:shadow-[0_0_60px_rgba(171,226,37,0.6)] transform hover:-translate-y-1 transition-all"
                >
                  Download App
                </button>
              </div>
            </div>

            {/* MOBILE NAVIGATION BUTTONS */}
            <div className="lg:hidden z-[70] flex items-center gap-4">
               <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white p-3 rounded-2xl bg-white/5 border border-white/10 active:scale-90 transition-all flex items-center justify-center"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black z-50 lg:hidden flex flex-col p-8 pt-48"
          >
             {/* Studio Section - Top of Mobile Menu */}
             <div className="mb-12">
                <div className="bg-neutral-900 border-2 border-brand-500/20 rounded-[40px] p-8 text-center relative overflow-hidden group shadow-2xl">
                   <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl -z-10"></div>
                   <Building2 className="w-16 h-16 text-brand-500 mx-auto mb-6" />
                   <p className="text-[10px] font-black text-brand-500 uppercase tracking-[0.3em] mb-3">For Gym Owners Only</p>
                   <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">Expand Your <br/> Studio Business</h3>
                   <button 
                      onClick={() => { onNavigate('studio'); setMobileMenuOpen(false); }}
                      className="w-full bg-brand-500 text-black py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(171,226,37,0.3)]"
                   >
                      Partner with us <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
             </div>

             <div className="flex flex-col space-y-10 items-center px-4">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => { onNavigate('user'); setMobileMenuOpen(false); }}
                        className="text-4xl font-black text-white uppercase italic tracking-tighter hover:text-brand-500 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
             </div>

             <div className="mt-auto pb-12 flex flex-col items-center">
                <button 
                    onClick={handleDownload}
                    className="w-full max-w-sm bg-white text-black py-6 rounded-3xl text-xl font-black uppercase tracking-widest hover:bg-brand-500 transition-colors shadow-2xl"
                >
                    Get The App
                </button>
                <p className="mt-8 text-neutral-600 text-xs font-bold uppercase tracking-widest">© {new Date().getFullYear()} Tamareen Inc.</p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;