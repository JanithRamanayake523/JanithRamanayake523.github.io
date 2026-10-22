'use client';

import { useState } from 'react';
import NewsTimeline from '@/components/NewsTimeline';
import { news, type NewsType } from '@/lib/site';

const FILTERS: ('All' | NewsType)[] = [
  'All',
  'Research',
  'Talk',
  'Role',
  'Education',
  'Achievement',
];

export default function NewsArchive() {
  const [filter, setFilter] = useState<'All' | NewsType>('All');

  // Only offer filters that have at least one item
  const available = FILTERS.filter((f) => f === 'All' || news.some((n) => n.type === f));
  const items = filter === 'All' ? news : news.filter((n) => n.type === filter);

  // Group by year, keeping newest-first order
  const years = [...new Set(items.map((n) => n.date.slice(0, 4)))];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter news by type">
        {available.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors cursor-pointer ${
              filter === f
                ? 'bg-accent text-white border-accent'
                : 'border-line text-muted hover:border-accent hover:text-accent'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div key={filter} className="news-swap space-y-10">
        {years.map((year) => (
          <section key={year}>
            <h2 className="font-display text-2xl font-semibold mb-5 md:pl-[calc(8rem+1.5rem)]">
              {year}
            </h2>
            <NewsTimeline
              items={items.filter((n) => n.date.startsWith(year))}
              variant="full"
              highlightFirst={false}
              dotBg="bg-base"
            />
          </section>
        ))}
      </div>
    </div>
  );
}
