import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proposal from './components/Proposal';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-brand-black selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Proposal />
        <div id="process">
          <Process />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <About />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;