import Link from "next/link";

export default function Footer() {
  return (
    <footer id="about" className="border-t border-ink/10 px-8 py-16 w-full" style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand */}
        <div className="md:col-span-4 space-y-4">
          <h2 className="font-display text-4xl font-bold">FOLIO</h2>
          <p className="font-body text-sm text-ink/55 leading-relaxed max-w-xs">An independent editorial publication exploring the intersections of design, technology, and human thought.</p>
          <div className="flex items-center gap-4 pt-2">
            {["X", "RSS", "Sub"].map((s) => (
              <Link key={s} href="#" className="font-mono text-[10px] tracking-widest uppercase text-ink/40 hover:text-rust transition-colors">
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink/40">Sections</h4>
          {["Essays", "Design", "Technology", "Culture", "Philosophy"].map((l) => (
            <Link key={l} href="#" className="block font-body text-sm text-ink/60 hover:text-ink transition-colors">
              {l}
            </Link>
          ))}
        </div>

        <div className="md:col-span-2 space-y-3">
          <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink/40">Info</h4>
          {["About", "Writers", "Archive", "Contact", "Privacy"].map((l) => (
            <Link key={l} href="#" className="block font-body text-sm text-ink/60 hover:text-ink transition-colors">
              {l}
            </Link>
          ))}
        </div>

        {/* Decorative */}
        <div className="md:col-span-4 flex flex-col justify-end">
          <div className="font-display text-[80px] font-bold text-ink/5 leading-none text-right select-none">IDEAS</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-12 pt-6 border-t border-ink/10 gap-4">
        <p className="font-mono text-[10px] tracking-widest uppercase text-ink/30">© 2026 FOLIO — All rights reserved</p>
        <p className="font-mono text-[10px] tracking-widest uppercase text-ink/20">Made with care &amp; intention</p>
      </div>
    </footer>
  );
}
