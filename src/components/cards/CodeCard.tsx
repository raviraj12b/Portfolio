import { Terminal } from 'lucide-react';

export default function CodeCard() {
  const lines = [
    <span className="text-zinc-500"># Engineering focus</span>,
    <>
      name = <span className="text-flame">"Rajesh Borkar"</span>
    </>,
    <>focus = [</>,
    <>
      {'  '}<span className="text-plasma">"Machine Learning"</span>,
    </>,
    <>
      {'  '}<span className="text-plasma">"RAG Architectures"</span>,
    </>,
    <>
      {'  '}<span className="text-plasma">"Forecasting Systems"</span>,
    </>,
    <>]</>,
  ];

  return (
    <div className="w-[310px] max-w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e1017]/95 shadow-card-lg backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#12141f]/80 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="mac-dot bg-[#ff5f57]" />
          <span className="mac-dot bg-[#febc2e]" />
          <span className="mac-dot bg-[#28c840]" />
        </div>
        <span className="flex items-center gap-2 font-mono text-xs text-zinc-400">
          <Terminal size={13} />
          about_me.py
        </span>
      </div>
      <div className="p-4 font-mono text-xs leading-6 text-zinc-300">
        {lines.map((line, i) => (
          <div className="flex gap-3 whitespace-pre" key={i}>
            <span aria-hidden="true" className="select-none text-zinc-600">
              {i + 1}
            </span>
            <code>{line}</code>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.06] bg-white/[0.01] px-4 py-2 font-mono text-xs text-zinc-500">
        Learning by building.
      </div>
    </div>
  );
}
