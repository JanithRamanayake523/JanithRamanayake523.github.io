'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import type { NewsItem } from '@/lib/site';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 'YYYY/MM' -> 'Jan 2026'; 'YYYY' stays as is
function formatDate(date: string) {
  const [year, month] = date.split('/');
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

export default function NewsTimeline({
  items,
  variant = 'text',
  highlightFirst = true,
  dotBg = 'bg-band',
}: {
  items: NewsItem[];
  /** text: tag + full sentence (home page); full: tag + headline + full sentence (/news) */
  variant?: 'text' | 'full';
  /** Fill the first dot, marking the newest item */
  highlightFirst?: boolean;
  /** Fill of the hollow dots; match the surface the timeline sits on */
  dotBg?: string;
}) {
  const full = variant === 'full';
  const listRef = useRef<HTMLOListElement | null>(null);
  // Items stay visible until JS is ready, so nothing is hidden without scripting
  const [animate, setAnimate] = useState(false);

  // Reveal each item (rail, dot, content) the first time it scrolls into view
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    setAnimate(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    );
    list.querySelectorAll('li').forEach((li) => observer.observe(li));
    return () => observer.disconnect();
  }, [items]);

  return (
    <ol ref={listRef}>
      {items.map((item, i) => (
        <li
          key={`${item.date}-${i}`}
          className={`news-item grid md:grid-cols-[8rem_1fr] md:gap-x-6 ${animate ? 'news-armed' : ''}`}
          style={{ transitionDelay: animate ? `${(i % 5) * 70}ms` : undefined }}
        >
          {/* Date column (desktop) */}
          <time className="news-date hidden md:block text-right font-mono text-sm text-muted pt-0.5">
            {formatDate(item.date)}
          </time>

          {/* Timeline rail + content */}
          <div className={`relative pl-7 ${i === items.length - 1 ? 'pb-0' : 'pb-9'}`}>
            <span className="news-rail absolute left-0 top-0 bottom-0 w-px bg-[#c3d8cc]" />
            <span
              className={`news-dot absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent ${
                highlightFirst && i === 0 ? 'bg-accent' : dotBg
              }`}
            />

            <div className="news-body">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2.5">
                <span className="tag">{item.type}</span>
                <time className="md:hidden font-mono text-xs text-muted">
                  {formatDate(item.date)}
                </time>
              </div>
              {full ? (
                <>
                  <h3 className="font-medium text-ink leading-snug mb-1.5">{item.title}</h3>
                  <p className="text-[0.95rem] leading-7 text-muted max-w-3xl">{item.text}</p>
                </>
              ) : (
                <p className="text-[0.98rem] leading-7 text-[#3d4457] max-w-3xl">{item.text}</p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
