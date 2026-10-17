import { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Facts from './components/Facts';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const progRef = useRef<HTMLDivElement | null>(null);

  // Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      if (!progRef.current) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) {
        progRef.current.style.width = '0%';
        return;
      }
      const current = window.scrollY;
      const pct = Math.min(100, Math.max(0, (current / total) * 100));
      progRef.current.style.width = `${pct}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Keyboard Shortcut for Command Palette (/ or Cmd/Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      const isInput = activeTag === 'input' || activeTag === 'textarea';

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      } else if (e.key === '/' && !isInput && !paletteOpen) {
        e.preventDefault();
        setPaletteOpen(true);
      } else if (e.key === 'Escape' && paletteOpen) {
        setPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paletteOpen]);

  // Scroll Reveal Observer (.rv -> .in)
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
            }
          });
        },
        { threshold: 0.08 }
      );

      document.querySelectorAll('.rv').forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      document.querySelectorAll('.rv').forEach((el) => el.classList.add('in'));
    }
  }, []);

  return (
    <>
      {/* Background Texture & Scroll Progress */}
      <div className="grain" />
      <div className="prog" id="prog" ref={progRef} />

      {/* Top Navigation Bar */}
      <Nav onOpenPalette={() => setPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Marquee />
        <Facts />
        <Projects />
        <div className="rule" />
        <About />
        <div className="rule" />
        <Experience />
        <div className="rule" />
        <Education />
        <div className="rule" />
        <Footer />
      </main>

      {/* Command Palette Modal */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
