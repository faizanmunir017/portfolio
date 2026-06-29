"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-200 ${
        scrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="font-mono text-lg font-bold tracking-tight">
            <span className="gradient-text">FM</span>
            <span className="text-white">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl bg-gradient-to-r from-cyber-cyan-dim to-electric-violet-dim px-5 py-2.5 text-sm font-medium text-white transition-colors hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] md:inline-flex"
        >
          Get in Touch
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="glass-strong md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex rounded-xl bg-gradient-to-r from-cyber-cyan-dim to-electric-violet-dim px-5 py-2.5 text-sm font-medium text-white"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
