import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  // Smooth scroll reset on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app cursor-none min-h-screen bg-[#030014]">
      <CustomCursor />

      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <div className="section-divider"></div>
          <Services />
          <div className="section-divider"></div>
          <About />
          <div className="section-divider"></div>
          <Testimonials />
          <CTA />
          <div className="section-divider"></div>
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
