'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_ITEMS = ['About', 'Research', 'Publications', 'Projects', 'Blog', 'Contact'];

export default function Navbar({ alwaysBlue = false }: { alwaysBlue?: boolean }) {
  const [scrolled, setScrolled] = useState(alwaysBlue);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    if (alwaysBlue) {
      setScrolled(true);
    } else {
      const handleScroll = () => setScrolled(window.scrollY > 40);
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Scroll-spy: highlight the section currently in view
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.toLowerCase())
      ).filter((el): el is HTMLElement => el !== null);

      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      sections.forEach((s) => spy.observe(s));

      return () => {
        window.removeEventListener('scroll', handleScroll);
        spy.disconnect();
      };
    }
  }, [alwaysBlue]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link href="/" className="font-display text-xl font-bold tracking-tight group">
            <span className="gradient-text">Janith</span>
            <span className="text-ink">.</span>
            <span className="ml-2 hidden sm:inline text-xs font-mono font-normal text-faint group-hover:text-muted transition-colors">
              ai × stats
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;
              return (
                <li key={item}>
                  <a
                    href={alwaysBlue ? `/#${id}` : `#${id}`}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-white/[0.06] border border-line" />
                    )}
                    <span className="relative">{item}</span>
                  </a>
                </li>
              );
            })}
            <li className="ml-3">
              <a
                href="/assets/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-4 py-2 rounded-full border border-accent/40 text-accent hover:bg-accent/10 transition-colors duration-300"
              >
                CV
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`w-6 h-[2px] bg-ink transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-ink transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-ink transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden glass overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={alwaysBlue ? `/#${item.toLowerCase()}` : `#${item.toLowerCase()}`}
                className="block py-2.5 text-muted hover:text-ink font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
