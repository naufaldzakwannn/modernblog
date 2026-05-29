import Link from "next/link";

const topics = [
  { name: "Design", count: 14 },
  { name: "Technology", count: 11 },
  { name: "Culture", count: 9 },
  { name: "Philosophy", count: 8 },
  { name: "Writing", count: 6 },
];

export default function Aside() {
  return (
    <aside className="py-20 px-8 w-full" style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-ink/10">
        {/* Topics */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-ink/10">
          <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-rust mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-rust inline-block" /> Topics
          </h3>
          <div className="space-y-2">
            {topics.map((t) => (
              <Link key={t.name} href="#" className="flex items-center justify-between py-2 border-b border-ink/5 group">
                <span className="font-body text-sm text-ink/70 group-hover:text-ink transition-colors">{t.name}</span>
                <span className="font-mono text-[10px] text-ink/30">{t.count}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-ink/10 bg-ink flex flex-col justify-center">
          <div className="font-display text-6xl text-rust/30 leading-none mb-4">&ldquo;</div>
          <blockquote className="font-display text-2xl italic text-paper/90 leading-tight">Ideas are the currency of the future.</blockquote>
          <cite className="font-mono text-[10px] tracking-widest uppercase text-paper/30 mt-4 not-italic">— The Editorial</cite>
        </div>

        {/* Newsletter */}
        <div id="subscribe" className="p-8">
          <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-rust mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-rust inline-block" /> Newsletter
          </h3>
          <p className="font-body text-sm text-ink/60 leading-relaxed mb-6">Essays, ideas, and perspectives delivered to your inbox every two weeks. No noise.</p>
          <div className="space-y-3">
            <input type="email" placeholder="your@email.com" className="w-full bg-cream border border-ink/15 px-4 py-3 font-body text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-rust transition-colors" />
            <button className="w-full bg-rust text-paper font-mono text-xs tracking-widest uppercase py-3 hover:bg-ink transition-colors">Subscribe Free</button>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-ink/25 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </aside>
  );
}
