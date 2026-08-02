'use client';

import { useState, useRef, useEffect } from 'react';
import { news, glance } from '@/lib/site';

const RECENT_COUNT = 5;

export default function News() {
  const [showOlder, setShowOlder] = useState(false);
  const recent = news.slice(0, RECENT_COUNT);
  const older = news.slice(RECENT_COUNT);

  // Lock the expanded scroll area to the collapsed list's exact height so
  // the card (and the toggle button) never moves when toggling.
  const listRef = useRef<HTMLUListElement | null>(null);
  const [listHeight, setListHeight] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      if (!showOlder && listRef.current) {
        setListHeight(listRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [showOlder]);

  const renderItem = (item: (typeof news)[number], i: number) => (
    <li key={i} className="flex items-start gap-4 border border-line rounded-xl px-5 py-4 bg-base/40">
      <span className="shrink-0 font-mono text-xs font-semibold text-accent bg-accent-soft px-2.5 py-1 rounded-full mt-0.5">
        {item.date}
      </span>
      <span className="text-[0.95rem] text-[#3d4457] leading-relaxed">{item.text}</span>
    </li>
  );

  return (
    <section id="news" className="py-14 bg-band">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-6 items-start">
          {/* Updates card */}
          <div className="bg-card border border-line rounded-2xl p-6 sm:p-7">
            <h2 className="font-display text-xl font-semibold mb-5">Updates</h2>

            {showOlder ? (
              /* Expanded: everything (recent + older) inside one scrollable list,
                 pinned to the same height as the collapsed list */
              <ul
                className="space-y-3.5 overflow-y-auto pr-2"
                style={{ height: listHeight ? `${listHeight}px` : 'auto' }}
              >
                {news.map(renderItem)}
              </ul>
            ) : (
              <ul ref={listRef} className="space-y-3.5">
                {recent.map(renderItem)}
              </ul>
            )}

            {older.length > 0 && (
              <button
                onClick={() => setShowOlder(!showOlder)}
                className="link-accent text-sm font-medium mt-5 inline-flex items-center gap-1.5"
              >
                {showOlder ? 'Show less' : 'Older news'}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    showOlder ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>

          {/* At a Glance card */}
          <div className="bg-card border border-line rounded-2xl p-6 sm:p-7">
            <h2 className="font-display text-xl font-semibold mb-5">At a Glance</h2>
            <dl className="divide-y divide-dashed divide-line">
              {glance.map((item) => (
                <div key={item.label} className="py-3.5 first:pt-0 last:pb-0">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-faint mb-1.5">
                    {item.label}
                  </dt>
                  {Array.isArray(item.value) ? (
                    <dd>
                      <ul className="space-y-1">
                        {item.value.map((v) => (
                          <li key={v} className="flex items-center gap-2 text-sm font-semibold text-ink">
                            <span className="w-1.5 h-1.5 rounded-full border-2 border-accent" />
                            {v}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  ) : (
                    <dd className="text-sm font-semibold text-ink">{item.value}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
