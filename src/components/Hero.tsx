import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MousePointer2 } from "lucide-react";
import { profile } from "../data";
import WaveCanvas from "./WaveCanvas";
import BarChartCard from "./cards/BarChartCard";
import MetricCard from "./cards/MetricCard";
import CodeCard from "./cards/CodeCard";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 34 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease, delay: d },
  }),
};

const STATS = [
  { v: "06", l: "selected projects" },
  { v: "02", l: "internships completed" },
  { v: "2027", l: "expected graduation" },
];

export default function Hero({ paused }: { paused: boolean }) {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* precision grid + ambient light */}
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-48 right-[-8%] size-[620px] rounded-full bg-plasma/[0.08] blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute bottom-[-24%] left-[-10%] size-[560px] rounded-full bg-flame/[0.07] blur-[130px]"
      />

      {/* fluid wave — horizontally across the hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[38%]" aria-hidden>
        <WaveCanvas paused={paused} className="absolute inset-0" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1440px] flex-1 px-6 pb-16 pt-28 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pt-36">
        {/* ————— left: statement ————— */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <motion.div
            variants={rise}
            custom={0.15}
            initial="hidden"
            animate="show"
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-r from-flame to-plasma" />
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
              AI & DATA SCIENCE · PUNE, INDIA
            </span>
          </motion.div>

          <h1 className="text-[clamp(3rem,7.4vw,7.4rem)] font-bold leading-[0.93] tracking-[-0.05em] text-ink">
            {["Making Data", "Actionable."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  variants={rise}
                  custom={0.25 + i * 0.12}
                  initial="hidden"
                  animate="show"
                  className={
                    i === 0
                      ? "block"
                      : "block bg-gradient-to-r from-flame via-[#ff5e8a] to-plasma bg-clip-text text-transparent"
                  }
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={rise}
            custom={0.55}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-md text-[17px] leading-[1.75] text-zinc-500"
          >
            I’m <span className="font-semibold text-ink">Rajesh Borkar</span>, a final-year AI & Data Science student.
            I build machine learning projects, document intelligence apps, and practical tools — from understanding the data to making the result usable.
          </motion.p>

          <motion.div
            variants={rise}
            custom={0.68}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[14px] font-medium text-white transition-all duration-300 hover:shadow-[0_16px_40px_-10px_rgba(255,77,0,0.55)]"
            >
              Explore my work
              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={profile.resume} download
              className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-zinc-500 transition-colors hover:text-ink"
            >
              Download resume
              <ArrowUpRight
                size={14}
                className="text-flame transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* stats band */}
          <motion.div
            variants={rise}
            custom={0.82}
            initial="hidden"
            animate="show"
            className="mt-16 grid max-w-xl grid-cols-3"
          >
            {STATS.map((s, i) => (
              <div
                key={s.l}
                className={`${i > 0 ? "hairline-y pl-3 sm:pl-6" : ""} pr-3 sm:pr-6`}
              >
                <div className="text-[1.75rem] font-semibold tracking-[-0.03em] tabular-nums text-ink">
                  {s.v}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ————— right: floating artifact cluster ————— */}
        <div className="hero-artifacts relative mt-20 flex flex-wrap items-center justify-center gap-6 lg:col-span-5 lg:mt-0 lg:h-full lg:min-h-[620px] lg:gap-0">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 hidden size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-flame/[0.10] via-[#ff5e8a]/[0.08] to-plasma/[0.12] blur-[70px] lg:block"
          />

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.55 }}
            className="relative z-10 lg:absolute lg:right-[3%] lg:top-[2%]"
          >
            <div className="animate-float-a will-change-transform">
              <MetricCard />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.75 }}
            className="relative z-20 lg:absolute lg:left-[-2%] lg:top-[30%]"
          >
            <div className="animate-float-b will-change-transform">
              <BarChartCard />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.95 }}
            className="relative z-30 lg:absolute lg:bottom-[-3%] lg:right-[8%]"
          >
            <div className="animate-float-c will-change-transform">
              <CodeCard />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 1.25 }}
            className="hidden lg:absolute lg:bottom-[14%] lg:left-[-5%] lg:z-40 lg:block"
          >
            <div className="animate-float-a flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/95 px-3.5 py-2 shadow-card backdrop-blur-xl will-change-transform">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-flame" />
              <span className="font-mono text-xs tracking-[0.06em] text-zinc-500">
                Open to AI / ML internships
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2.5 lg:flex"
      >
        <MousePointer2 size={12} className="text-zinc-400" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
          move across the wave
        </span>
      </motion.div>
    </section>
  );
}
