'use client';

import { useEffect, useState } from 'react';

export default function RotatingKeywords({
  prefix,
  words,
  interval = 2400,
}: {
  prefix: string;
  words: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <p className="text-[0.98rem] text-muted flex items-baseline gap-1.5 mb-5" aria-live="off">
      <span>{prefix}</span>
      {/* key remounts the span so the swap animation replays on every change */}
      <span key={index} className="hero-word font-medium text-accent">
        {words[index]}
      </span>
    </p>
  );
}
