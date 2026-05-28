"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const dateRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.textContent = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }, []);

  return (
    <section className="pt-36 pb-0 px-6 max-w-7xl mx-auto flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-10 border-b border-ink/10 pb-4">
        <span className="font-mono text-[11px] tracking-widest uppercase text-ink/40">Vol. 01 — Est. 2024</span>
        <span ref={dateRef} className="hidden md:block font-mono text-[11px] tracking-widest uppercase text-ink/40" />
        <span className="hidden lg:block font-mono text-[11px] tracking-widest uppercase text-ink/40">Ideas &amp; Perspectives</span>
      </div>

      {/* Hero content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main headline */}
        <div className="lg:col-span-8 space-y-6">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-rust flex items-center gap-2">
            <span className="w-8 h-px bg-rust inline-block" />
            Featured Essay
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] font-bold tracking-tight">
            The Art of <em className="italic text-rust">Slow</em>
            <br />
            Thinking in a
            <br />
            Fast World
          </h1>
          <p className="font-body text-lg text-ink/60 max-w-xl leading-relaxed">In an age of infinite scroll and dopamine loops, the most radical act is to pause. To sit with a thought until it reveals something true.</p>
          <div className="flex items-center gap-6 pt-4">
            <Link href="#featured" className="inline-flex items-center gap-2 bg-ink text-paper font-mono text-xs tracking-widest uppercase px-6 py-4 hover:bg-rust transition-colors group">
              Read Essay
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link href="#essays" className="font-mono text-xs tracking-widest uppercase text-ink/60 hover:text-ink border-b border-ink/20 pb-0.5 transition-colors">
              Browse all essays
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-4 space-y-4">
          <div className="relative">
            <div className="font-display text-[160px] font-bold text-ink/[0.04] leading-none select-none absolute -top-6 -right-2">01</div>
            <div className="relative border border-ink/10 p-6 bg-cream">
              <p className="font-mono text-[10px] tracking-widest uppercase text-ink/40 mb-4">This Issue</p>
              <ul className="space-y-3">
                {["The Paradox of Choice", "Design as Language", "Notes on Craft", "What Silence Teaches"].map((title, i) => (
                  <li key={title} className="flex items-start gap-3 group cursor-pointer">
                    <span className="font-mono text-[10px] text-rust/60 mt-1">0{i + 1}</span>
                    <span className="font-body text-sm text-ink/70 group-hover:text-ink transition-colors leading-tight">{title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { n: "48", label: "Essays" },
              { n: "12k", label: "Readers" },
              { n: "∞", label: "Ideas" },
            ].map((s) => (
              <div key={s.label} className="bg-ink text-paper p-3 text-center">
                <div className="font-display text-2xl font-bold">{s.n}</div>
                <div className="font-mono text-[9px] tracking-widest uppercase text-paper/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="mt-12 border-t border-b border-ink/10 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="font-mono text-[10px] tracking-widest uppercase text-ink/30 mr-16">
                Design · Technology · Culture · Philosophy · Writing · Ideas · Craft · Language · Thought · Silence · ◆
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
