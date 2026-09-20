import { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { profile } from '../data';
export default function Footer() {
  const [copyStatus,setCopyStatus] = useState('');
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus('Email copied.'); }
    catch { setCopyStatus('Copy unavailable. Select the email address above or open your email app.'); }
  }
  return <footer id="contact" className="relative overflow-hidden border-t border-black/[0.06]">
    <div aria-hidden className="pointer-events-none absolute -bottom-48 left-1/2 size-[620px] -translate-x-1/2 rounded-full bg-gradient-to-t from-flame/15 to-plasma/10 blur-[100px]" />
    <div className="section-shell relative pb-8"><p className="eyebrow">04 / What’s next</p>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]"><div><h2 className="text-[clamp(2.7rem,6vw,5.4rem)] font-bold leading-[1.03] tracking-[-0.045em]">Good things start<br/><span className="gradient-text">with a hello.</span></h2><p className="mb-7 mt-7 max-w-lg text-base leading-relaxed text-zinc-600">I’m open to internships and entry-level roles in AI, machine learning, data, and software development.</p><a className="button-dark" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={16}/></a></div>
      <div className="flex flex-col justify-end"><p className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">Drop me a line</p><a className="w-fit break-all text-[clamp(1.05rem,2.2vw,1.6rem)] font-semibold tracking-tight hover:text-plasma" href={`mailto:${profile.email}`}>{profile.email}</a><button className="text-link mt-4 w-fit" type="button" onClick={copyEmail}>{copyStatus === 'Email copied.' ? <Check size={15}/> : <Copy size={15}/>}Copy email</button><p role="status" className="mt-2 min-h-5 text-sm text-zinc-600">{copyStatus}</p><div className="mt-7 flex flex-wrap gap-6"><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15}/></a><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15}/></a><a className="text-link" href={profile.resume} download>Resume <ArrowUpRight size={15}/></a></div></div></div>
      <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.08] pt-7 text-xs text-zinc-500"><p>© {new Date().getFullYear()} Rajesh Borkar · Built with curiosity. Pune, India.</p><a className="text-link" href="#top">Back to top ↑</a></div>
    </div>
  </footer>;
}
