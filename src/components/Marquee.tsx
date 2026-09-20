import { Plus } from "lucide-react";

const STACK = ["Python", "Scikit-learn", "Pandas", "React", "FastAPI", "FAISS", "Groq", "Streamlit", "SQL", "Git"];

export default function Marquee() {
  const row = (key: string) => (
    <div key={key} aria-hidden={key === "b" ? true : undefined} className="flex shrink-0 items-center">
      {STACK.map((s, i) => (
        <span key={`${key}-${i}`} className="flex items-center">
          <span className="px-8 font-mono text-[12px] uppercase tracking-[0.22em] text-zinc-400 transition-colors hover:text-ink">
            {s}
          </span>
          <Plus size={12} className="text-zinc-200" />
        </span>
      ))}
    </div>
  );

  return (
    <section id="stack" className="relative border-y border-black/[0.055] bg-white/60 py-7">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee will-change-transform">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </section>
  );
}
