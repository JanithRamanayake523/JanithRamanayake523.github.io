'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { site } from '@/lib/site';

const NAV_ITEMS = ['About', 'News', 'Publications', 'Experience', 'Projects', 'Blog', 'Contact'];

export default function Navbar({ alwaysBlue = false }: { alwaysBlue?: boolean }) {
  const [scrolled, setScrolled] = useState(alwaysBlue);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (alwaysBlue) return;
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysBlue]);

  const solid = scrolled || alwaysBlue;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/90 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink">
            {site.name}
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase();
              return (
                <li key={item}>
                  <a
                    href={alwaysBlue ? `/#${id}` : `#${id}`}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`w-5 h-[1.5px] bg-ink transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-ink transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-ink transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-b border-line overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[420px]' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={alwaysBlue ? `/#${item.toLowerCase()}` : `#${item.toLowerCase()}`}
                className="block py-2.5 text-sm text-muted hover:text-ink transition-colors"
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
