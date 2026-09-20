import { Layers, ArrowUpRight } from 'lucide-react';
import { projects } from '../../data';
export default function MetricCard() {
  return <a href="#work" className="block w-[246px] rounded-2xl border border-black/[0.06] bg-white/95 p-5 shadow-card backdrop-blur-xl">
    <div className="flex items-center justify-between text-zinc-500"><span className="flex items-center gap-2 font-mono text-xs"><Layers size={14} />SELECTED WORK</span><ArrowUpRight size={16} /></div>
    <div className="mt-4 text-6xl font-semibold tracking-tight">{String(projects.length).padStart(2,'0')}<span className="ml-2 text-lg font-normal text-zinc-500">projects</span></div>
    <div className="my-4 h-px bg-gradient-to-r from-flame via-[#ff5e8a] to-plasma" />
    <p className="text-sm leading-relaxed text-zinc-600">Machine learning.<br/>Generative AI. Practical tools.</p>
  </a>;
}
