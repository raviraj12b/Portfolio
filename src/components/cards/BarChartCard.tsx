import { FileText, ScanText, Link2, ArrowDown } from 'lucide-react';
export default function BarChartCard() {
  return <div className="w-[300px] max-w-full rounded-2xl border border-black/[0.06] bg-white/95 p-5 shadow-card backdrop-blur-xl">
    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-500"><FileText size={14} />Document intelligence</div>
    <p className="mt-4 text-xl font-semibold tracking-tight">An answer. With its source.</p>
    <div className="mt-4 flex items-center gap-3"><span className="rounded-lg bg-zinc-100 p-2 text-zinc-600"><ScanText size={20} /></span><div><p className="text-sm font-medium">Retrieve document context</p><p className="text-xs text-zinc-500">Semantic search · FAISS</p></div></div>
    <ArrowDown size={14} className="my-2 ml-3 text-plasma" />
    <div className="flex items-center gap-3 rounded-xl border border-plasma/15 bg-plasma/5 p-3"><Link2 size={19} className="text-plasma" /><div><p className="text-sm font-medium">Generate a cited answer</p><p className="text-xs text-zinc-500">Navigate to the source page</p></div></div>
    <p className="mt-3 font-mono text-xs text-zinc-500">DOCUAI / WORKFLOW OVERVIEW</p>
  </div>;
}
