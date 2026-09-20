import { useState } from 'react';
import { MotionConfig, useReducedMotion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Process from './components/Process';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
export default function App() {
  const reduced = useReducedMotion();
  const [paused,setPaused] = useState(false);
  const stopMotion = paused || !!reduced;
  return <MotionConfig reducedMotion={stopMotion ? 'always' : 'user'}><div className={`relative min-h-screen bg-[#fdfdfd] text-ink antialiased ${stopMotion ? 'motion-paused' : ''}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="grid-bg-page pointer-events-none fixed inset-0" aria-hidden />
    {!stopMotion && <Cursor />}
    <Nav />
    <div className="relative"><main id="main" tabIndex={-1}><Hero paused={stopMotion}/><div className="relative mx-auto -mt-12 flex max-w-[1440px] justify-end px-6 pb-4 md:px-10"><button type="button" className="motion-control" disabled={!!reduced} aria-pressed={stopMotion} onClick={() => setPaused(!paused)}>{stopMotion ? <Play size={13}/> : <Pause size={13}/>} {reduced ? 'Reduced motion enabled' : paused ? 'Resume motion' : 'Pause motion'}</button></div><Marquee /><Projects /><About /><Experience /><Process /></main><Footer /></div>
  </div></MotionConfig>;
}
