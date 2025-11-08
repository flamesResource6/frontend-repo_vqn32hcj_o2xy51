import NavHero from './components/NavHero';
import Gallery from './components/Gallery';
import About from './components/About';
import TestimonialsContact from './components/TestimonialsContact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <NavHero />
      <Gallery />
      <About />
      <TestimonialsContact />
    </div>
  );
}

export default App;
