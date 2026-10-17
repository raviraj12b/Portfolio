import { Layers, ArrowUpRight } from 'lucide-react';
import { projects } from '../../data';

export default function MetricCard() {
  return (
    <a
      href="#work"
      className="block w-[246px] rounded-2xl border border-white/[0.08] bg-[#0e1017]/95 p-5 shadow-card backdrop-blur-xl transition-all duration-300 hover:border-white/[0.2] hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.25)]"
    >
      <div className="flex items-center justify-between text-zinc-400">
        <span className="flex items-center gap-2 font-mono text-xs tracking-wider">
          <Layers size={14} className="text-plasma" />
          SELECTED WORK
        </span>
        <ArrowUpRight size={15} />
      </div>
      <div className="mt-4 text-6xl font-bold tracking-tight text-zinc-100">
        {String(projects.length).padStart(2, '0')}
        <span className="ml-2 text-base font-normal text-zinc-400">projects</span>
      </div>
      <div className="my-4 h-px bg-gradient-to-r from-flame via-[#ec4899] to-plasma" />
      <p className="text-xs leading-relaxed text-zinc-400">
        Machine learning.<br />
        Generative AI. Practical tools.
      </p>
    </a>
  );
}
