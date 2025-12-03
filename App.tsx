import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import StudioCTA from './components/StudioCTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import StudioLanding from './components/StudioLanding';

type Page = 'user' | 'studio';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('user');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    // Instant scroll to top to prevent staying at bottom of new page
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-900 selection:bg-brand-500/30 selection:text-brand-200 font-sans">
      <Navbar onNavigate={navigateTo} />
      
      <main>
        {currentPage === 'user' ? (
          <>
            <Hero />
            <Features />
            <Pricing />
            <StudioCTA onNavigate={navigateTo} />
            <FAQ />
          </>
        ) : (
          <StudioLanding />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      
      {/* 
        The Gemini-powered ChatWidget acts as a "live sales/support agent".
        It is persistent across the landing page.
      */}
      <ChatWidget />
    </div>
  );
};

export default App;