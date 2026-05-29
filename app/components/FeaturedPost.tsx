import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

export default function FeaturedPost() {
  return (
    <section id="featured" className="py-20 px-8 w-full" style={{ maxWidth: "1280px", margin: "0 auto" }}>
      {/* Section label */}
      <div className="hr-ornament mb-12">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-rust">◆ Featured</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-ink/10">
        {/* Left — image placeholder */}
        <div className="lg:col-span-6 bg-[#2a1f1a] relative min-h-[400px] overflow-hidden group">
          {/* Abstract art */}
          <svg viewBox="0 0 600 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="g1" cx="30%" cy="40%">
                <stop offset="0%" stopColor="#c0441a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2a1f1a" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="g2" cx="70%" cy="60%">
                <stop offset="0%" stopColor="#d4a843" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#2a1f1a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="600" height="500" fill="#2a1f1a" />
            <circle cx="180" cy="200" r="200" fill="url(#g1)" />
            <circle cx="420" cy="300" r="180" fill="url(#g2)" />
            <line x1="0" y1="250" x2="600" y2="250" stroke="#f5f0e8" strokeOpacity="0.05" strokeWidth="1" />
            <line x1="300" y1="0" x2="300" y2="500" stroke="#f5f0e8" strokeOpacity="0.05" strokeWidth="1" />
            {/* Grid dots */}
            {Array.from({ length: 6 }, (_, row) => Array.from({ length: 8 }, (_, col) => <circle key={`${row}-${col}`} cx={col * 90 + 30} cy={row * 90 + 30} r="1.5" fill="#f5f0e8" opacity="0.15" />))}
          </svg>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="font-mono text-[10px] tracking-widest uppercase text-paper/40">Illustration</span>
          </div>
        </div>

        {/* Right — content */}
        <div className="lg:col-span-6 p-10 flex flex-col justify-between bg-cream">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-rust text-paper font-mono text-[10px] tracking-widest uppercase px-2 py-1">Long Read</span>
              <span className="flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase text-ink/40">
                <Clock size={10} />
                12 min read
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              The Art of Slow <em className="italic">Thinking</em> in a Fast World
            </h2>

            <p className="font-body text-ink/60 leading-relaxed mb-8 text-base">
              Our brains are being rewired by the attention economy. Every notification, every refresh, every swipe trains us to crave the next dopamine hit. But the deepest insights have always emerged from the opposite — sustained,
              patient, almost meditative focus.
            </p>

            <blockquote className="border-l-2 border-rust pl-5 mb-8">
              <p className="font-display text-xl italic text-ink/70 leading-relaxed">&ldquo;The quality of your thinking is determined by the depth of your attention, not the speed of your consumption.&rdquo;</p>
            </blockquote>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-ink/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center">
                <span className="font-display text-paper text-sm font-bold">A</span>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-ink">Aiko Tanaka</p>
                <p className="font-mono text-[10px] text-ink/40 uppercase tracking-widest">May 24, 2026</p>
              </div>
            </div>
            <Link href="#" className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-rust hover:text-ink transition-colors group">
              Read
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
