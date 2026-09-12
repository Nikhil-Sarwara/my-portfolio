"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "GitHub", href: "https://github.com/Nikhil-Sarwara" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nikhil-sarwara/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className={`nav-glass fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-tight text-text"
        >
          nikhil<span className="text-accent">.</span>dev
        </a>
        <div className="flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text3 transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="rounded-md border border-border bg-surface2 px-4 py-1.5 text-xs font-semibold text-text2 transition-all hover:border-border2 hover:text-text"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
