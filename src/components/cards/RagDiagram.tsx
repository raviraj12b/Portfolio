export default function RagDiagram() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0e15] p-4 shadow-xl sm:p-6">
      <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-3 font-mono text-[11px]">
        <span className="flex items-center gap-2 text-zinc-400">
          <span className="size-2 rounded-full bg-plasma" />
          DOCUAI // TECHNICAL ARCHITECTURE
        </span>
        <span className="text-zinc-500">RAG PIPELINE</span>
      </div>

      <svg
        viewBox="0 0 460 270"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="DocuAI Retrieval-Augmented Generation Architecture Diagram"
      >
        <defs>
          <linearGradient id="ragGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5722" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {/* 1. Input Docs */}
        <rect x="8" y="10" width="128" height="60" rx="6" fill="#121522" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text x="20" y="33" fill="#ff5722" fontFamily="monospace" fontSize="10" fontWeight="600">01 / INPUT DOCS</text>
        <text x="20" y="52" fill="#f0f0f4" fontFamily="monospace" fontSize="11">PDF & Text Files</text>

        {/* Arrow 1 -> 2 */}
        <path d="M136 40 H168" stroke="url(#ragGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="172,40 166,37 166,43" fill="#8b5cf6" />

        {/* 2. Chunking & Embed */}
        <rect x="174" y="10" width="132" height="60" rx="6" fill="#121522" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text x="186" y="33" fill="#a78bfa" fontFamily="monospace" fontSize="10" fontWeight="600">02 / INDEXING</text>
        <text x="186" y="52" fill="#f0f0f4" fontFamily="monospace" fontSize="11">Chunk & Embed</text>

        {/* Arrow 2 -> 3 */}
        <path d="M306 40 H336" stroke="url(#ragGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="340,40 334,37 334,43" fill="#8b5cf6" />

        {/* 3. FAISS Vector DB */}
        <rect x="342" y="10" width="110" height="60" rx="6" fill="#141828" stroke="#8b5cf6" strokeWidth="1.2" />
        <text x="354" y="33" fill="#8b5cf6" fontFamily="monospace" fontSize="10" fontWeight="700">03 / FAISS DB</text>
        <text x="354" y="52" fill="#38bdf8" fontFamily="monospace" fontSize="11">Vector Index</text>

        {/* Arrow 3 -> 4 (Down) */}
        <path d="M397 70 V110" stroke="url(#ragGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="397,114 394,108 400,108" fill="#8b5cf6" />

        {/* 4. Context Retrieval */}
        <rect x="256" y="116" width="196" height="60" rx="6" fill="#121522" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text x="268" y="139" fill="#ec4899" fontFamily="monospace" fontSize="10" fontWeight="600">04 / CONTEXT RETRIEVAL</text>
        <text x="268" y="158" fill="#f0f0f4" fontFamily="monospace" fontSize="11">Top-K Context Chunks</text>

        {/* Arrow 4 -> 5 (Left) */}
        <path d="M256 146 H188" stroke="url(#ragGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="184,146 190,143 190,149" fill="#ff5722" />

        {/* 5. Groq LLM Generation */}
        <rect x="8" y="116" width="174" height="60" rx="6" fill="#121522" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text x="20" y="139" fill="#10b981" fontFamily="monospace" fontSize="10" fontWeight="600">05 / GROQ INFERENCE</text>
        <text x="20" y="158" fill="#f0f0f4" fontFamily="monospace" fontSize="11">Prompt + Context</text>

        {/* Arrow 5 -> 6 (Down) */}
        <path d="M95 176 V210" stroke="url(#ragGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="95,214 92,208 98,208" fill="#ff5722" />

        {/* 6. Output Cited Answer */}
        <rect x="8" y="216" width="444" height="46" rx="6" fill="#090b10" stroke="#ff5722" strokeWidth="1" strokeDasharray="4 4" />
        <text x="20" y="236" fill="#f0f0f4" fontFamily="monospace" fontSize="10" fontWeight="700">06 / VERIFIED OUTPUT</text>
        <text x="20" y="250" fill="#a1a1aa" fontFamily="monospace" fontSize="10">Grounded Answer + Direct Navigation to Source Document Page</text>
      </svg>

      <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-zinc-500">
        <span>FIG 1.1 — SYSTEM PIPELINE</span>
        <span>RETRIEVAL-AUGMENTED GENERATION</span>
      </div>
    </div>
  );
}
