'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { site } from '@/lib/site';

const NAV_ITEMS = ['About', 'News', 'Publications', 'Experience', 'Blog', 'Contact'];

export default function Navbar({ alwaysBlue = false }: { alwaysBlue?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  // Highlight the nav item for the section currently in view (home page only)
  useEffect(() => {
    if (alwaysBlue) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [alwaysBlue]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c6f50]/95 backdrop-blur-md border-b border-[#09573e] shadow-[0_4px_20px_-8px_rgba(12,111,80,0.5)]">
      {/* Same subtle grid pattern as the contact section */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-white"
          >
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
                    aria-current={active === id ? 'true' : undefined}
                    className={`text-sm transition-colors border-b pb-0.5 ${
                      active === id
                        ? 'text-white border-white'
                        : 'text-emerald-50/85 border-transparent hover:text-white'
                    }`}
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
            aria-expanded={mobileMenuOpen}
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#0c6f50] border-b border-[#09573e] overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[420px]' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={alwaysBlue ? `/#${item.toLowerCase()}` : `#${item.toLowerCase()}`}
                className="block py-2.5 text-sm text-emerald-50/85 hover:text-white transition-colors"
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
