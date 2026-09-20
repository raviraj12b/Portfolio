import { motion } from "framer-motion";
import { Database, BrainCircuit, Rocket } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Database,
    title: "Understand",
    body: "Start with the problem and inspect the data. Explore missing values, distributions, and the information available at prediction time.",
  },
  {
    n: "02",
    icon: BrainCircuit,
    title: "Model",
    body: "Build a baseline, compare approaches, and investigate errors. Check for leakage and test the workflow the application will actually use.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Build",
    body: "Connect the pipeline to an interface, document the choices, and make the result easier to explore. Learn from what breaks along the way.",
  },
];

export default function Process() {
  return (
    <section id="method" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-flame to-plasma" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
                method
              </span>
            </div>
            <h2 className="max-w-2xl text-[clamp(2.1rem,3.6vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink">
              From raw signal to{" "}
              <span className="bg-gradient-to-r from-flame to-plasma bg-clip-text text-transparent">
                usable application
              </span>
              .
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-zinc-400">
            How I approach my projects
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`hairline-x relative pt-10 md:pr-12 ${
                i > 0 ? "md:hairline-y md:pl-12" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-6xl font-bold tracking-[-0.04em] text-zinc-100">
                  {s.n}
                </span>
                <span className="grid size-10 place-items-center rounded-xl border border-black/[0.06] bg-white text-ink shadow-[0_8px_20px_-8px_rgba(13,12,18,0.12)]">
                  <s.icon size={17} strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-ink">
                {s.title}
              </h3>
              <p className="mt-3 max-w-sm text-base leading-[1.7] text-zinc-500">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
