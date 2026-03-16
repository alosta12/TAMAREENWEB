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
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
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
              className="flex-shrink-0 flex items-center cursor-pointer group transition-transform active:scale-95 z-[110]"
            >
              <Logo className="h-14 sm:h-16 md:h-28 lg:h-36 w-auto transform -translate-x-2 md:-translate-x-4" />
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
            <div className="lg:hidden z-[110] flex items-center gap-4">
               <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 active:scale-90 transition-all flex items-center justify-center"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6 sm:w-8 sm:h-8" /> : <MenuIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-[90] lg:hidden flex flex-col overflow-y-auto scrollbar-hide"
          >
             <div className="flex flex-col p-6 pt-28 pb-12 min-h-full max-w-lg mx-auto w-full">
                {/* Studio Section - Top of Mobile Menu */}
                <div className="mb-10">
                    <div className="bg-neutral-900 border-2 border-brand-500/20 rounded-[32px] p-6 sm:p-8 text-center relative overflow-hidden group shadow-2xl">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl -z-10"></div>
                      <Building2 className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                      <p className="text-[10px] font-black text-brand-500 uppercase tracking-[0.3em] mb-2">For Gym Owners Only</p>
                      <h3 className="text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">Expand Your <br/> Studio Business</h3>
                      <button 
                          onClick={() => { onNavigate('studio'); setMobileMenuOpen(false); }}
                          className="w-full bg-brand-500 text-black py-4 rounded-xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(171,226,37,0.3)] active:scale-95 transition-transform"
                      >
                          Partner with us <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                </div>

                <div className="flex flex-col space-y-8 items-center px-4 mb-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => { onNavigate('user'); setMobileMenuOpen(false); }}
                            className="text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tighter hover:text-brand-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="mt-auto flex flex-col items-center">
                    <button 
                        onClick={() => { handleDownload(); setMobileMenuOpen(false); }}
                        className="w-full max-w-sm bg-white text-black py-5 rounded-2xl text-lg font-black uppercase tracking-widest hover:bg-brand-500 transition-colors shadow-2xl active:scale-95 transition-transform"
                    >
                        Get The App
                    </button>
                    <p className="mt-8 text-neutral-600 text-[10px] font-bold uppercase tracking-widest">© {new Date().getFullYear()} Tamareen Inc.</p>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;