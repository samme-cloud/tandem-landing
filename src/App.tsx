import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import StickyFooter from './components/StickyFooter';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solutions />
      <Features />
      <Testimonials />
      <StickyFooter />
      
      {/* Add padding at the bottom to account for the sticky footer */}
      <div className="h-24"></div>
    </div>
  );
}

export default App;