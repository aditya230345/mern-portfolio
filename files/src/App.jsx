import { useEffect, useState } from 'react';
import './main.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  // Theme toggle
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  // Loader
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    const t = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(t);
  }, []);

  // Scroll-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    reveals.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [loading]); // re-run after loader hides

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Loader hide={!loading} />

      {!loading && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main>
            <Hero />
            <About />
            <Resume />
            <Services />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />

          <button
            className={`scroll-top${showTop ? ' visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </>
      )}
    </>
  );
}

export default App;
