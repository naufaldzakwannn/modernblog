"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Essays", href: "#essays" },
  { label: "Design", href: "#design" },
  { label: "Technology", href: "#tech" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#0e0e0e]/10 ${scrolled ? "py-3" : "py-4"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-bold tracking-tight text-ink hover:text-rust transition-colors">
            FOLIO
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="font-mono text-xs tracking-[0.12em] uppercase text-ink/60 hover:text-rust transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="#subscribe" className="font-mono text-xs tracking-[0.12em] uppercase bg-ink text-paper px-4 py-2 hover:bg-rust transition-colors">
              Subscribe
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-ink" aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#f5f0e8] flex flex-col items-center justify-center gap-8">
          {navLinks.map((l, i) => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className={`font-display text-3xl italic text-ink hover:text-rust transition-colors stagger-${i + 1} animate-fade-up animate-in`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
