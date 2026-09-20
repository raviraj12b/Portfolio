import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data';
const links = [{ label: 'Work', href: '#work' }, { label: 'About', href: '#about' }, { label: 'Experience', href: '#experience' }];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) { setOpen(false); button.current?.focus(); } };
    const outside = (e: PointerEvent) => { if (!header.current?.contains(e.target as Node)) setOpen(false); };
    const wide = window.matchMedia('(min-width: 1024px)');
    const resize = () => { if (wide.matches) setOpen(false); };
    document.addEventListener('keydown', escape); document.addEventListener('pointerdown', outside); wide.addEventListener('change', resize);
    return () => { document.removeEventListener('keydown', escape); document.removeEventListener('pointerdown', outside); wide.removeEventListener('change', resize); };
  }, [open]);
  return <header ref={header} className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white/90 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-6 md:px-10">
      <a href="#top" aria-label="Rajesh Borkar, home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-flame via-[#ff5e8a] to-plasma font-mono text-sm font-bold text-white">rb</span>
        <span><span className="block text-[15px] font-semibold">Rajesh Borkar</span><span className="block font-mono text-xs text-zinc-500">AI & Data Science</span></span>
      </a>
      <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
        {links.map((link, i) => <a className="nav-link" key={link.href} href={link.href}><span className="mr-2 text-xs text-zinc-400">0{i + 1}</span>{link.label}</a>)}
        <a className="nav-link" href={profile.resume} download>Resume <ArrowUpRight size={13} className="inline" /></a>
      </nav>
      <div className="flex items-center gap-3"><a href="#contact" className="button-dark header-contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button ref={button} type="button" className="grid size-11 place-items-center rounded-full border border-zinc-200 lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-zinc-100 bg-white px-6 py-4 lg:hidden">
      {[...links, {label:'Contact',href:'#contact'}].map(link => <a key={link.href} className="block py-3 text-base" href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      <a className="block py-3 text-base" href={profile.resume} download onClick={() => setOpen(false)}>Download resume</a>
    </nav>}
  </header>;
}
