import React, { useEffect } from 'react';
import Hero from './components/Hero';
import GalleryGrid from './components/GalleryGrid';
import AboutBrand from './components/AboutBrand';
import TestimonialsCTA from './components/TestimonialsCTA';

// Import AOS styles dynamically via CDN injection to avoid extra packages
const useAOS = () => {
  useEffect(() => {
    // Inject AOS CSS
    const aosCss = document.createElement('link');
    aosCss.rel = 'stylesheet';
    aosCss.href = 'https://unpkg.com/aos@2.3.4/dist/aos.css';
    document.head.appendChild(aosCss);

    // Inject AOS JS
    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
    aosScript.async = true;
    aosScript.onload = () => {
      // eslint-disable-next-line no-undef
      if (window.AOS) window.AOS.init({ duration: 800, once: true, easing: 'ease-out-quad' });
    };
    document.body.appendChild(aosScript);

    return () => {
      document.head.removeChild(aosCss);
      document.body.removeChild(aosScript);
    };
  }, []);
};

function App() {
  useAOS();

  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <Hero />
      <GalleryGrid />
      <AboutBrand />
      <TestimonialsCTA />
    </div>
  );
}

export default App;
