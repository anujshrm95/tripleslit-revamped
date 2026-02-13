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
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  // Smooth scroll reset on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app min-h-screen">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <CTA />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
