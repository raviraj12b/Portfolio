import { FileText, ScanText, Link2, ArrowDown } from 'lucide-react';

export default function BarChartCard() {
  return (
    <div className="w-[300px] max-w-full rounded-2xl border border-white/[0.08] bg-[#0e1017]/95 p-5 shadow-card backdrop-blur-xl">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-400">
        <FileText size={14} className="text-plasma" />
        Document intelligence
      </div>
      <p className="mt-4 text-xl font-semibold tracking-tight text-zinc-100">
        An answer. With its source.
      </p>
      <div className="mt-4 flex items-center gap-3">
        <span className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-2 text-zinc-300">
          <ScanText size={20} />
        </span>
        <div>
          <p className="text-sm font-medium text-zinc-200">Retrieve document context</p>
          <p className="text-xs text-zinc-400">Semantic search · FAISS</p>
        </div>
      </div>
      <ArrowDown size={14} className="my-2 ml-3 text-plasma" />
      <div className="flex items-center gap-3 rounded-xl border border-plasma/25 bg-plasma/10 p-3">
        <Link2 size={19} className="text-plasma" />
        <div>
          <p className="text-sm font-medium text-zinc-100">Generate cited answer</p>
          <p className="text-xs text-zinc-400">Navigate to source page</p>
        </div>
      </div>
      <p className="mt-3 font-mono text-xs text-zinc-500">DOCUAI / WORKFLOW OVERVIEW</p>
    </div>
  );
}
