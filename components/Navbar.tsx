import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Simple OS detection
    if (/android/.test(userAgent)) {
      window.open('https://play.google.com/store/apps', '_blank');
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      window.open('https://apps.apple.com', '_blank');
    } else {
      // Fallback for desktop or unknown devices (Default to App Store or landing page)
      window.open('https://apps.apple.com', '_blank');
    }
  };

  const handleLogoClick = () => {
    onNavigate('user');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-neutral-900/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="flex-shrink-0 flex items-center cursor-pointer group hover:opacity-90 transition-opacity"
          >
            {/* Height 10 (40px) ensures image logo fits nicely, text-2xl maintains fallback size */}
            <Logo className="h-10 text-2xl" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => onNavigate('user')}
                className="text-neutral-400 hover:text-brand-400 transition-colors text-sm font-semibold uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleDownload}
              className="bg-brand-500 hover:bg-brand-400 text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(171,226,37,0.4)] transform hover:-translate-y-0.5"
            >
              Download Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    onNavigate('user');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-3 rounded-md text-base font-medium text-neutral-300 hover:text-brand-400 hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <button 
                  onClick={handleDownload}
                  className="w-full bg-brand-500 hover:bg-brand-400 text-black px-5 py-3 rounded-lg text-base font-bold transition-all"
                >
                  Download Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;