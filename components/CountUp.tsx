'use client';

import { useEffect, useRef, useState } from 'react';

/** Counts up to `to` once it scrolls into view. Renders the final value without JS. */
export default function CountUp({
  to,
  decimals = 2,
  duration = 1200,
  className,
}: {
  to: number;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    setValue(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          // rAF timestamps can precede `start` by a frame; clamp so we never show "-0"
          const t = Math.min(Math.max((now - start) / duration, 0), 1);
          const eased = 1 - Math.pow(1 - t, 3); // ease-out
          setValue(to * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <p ref={ref} className={className}>
      {value.toFixed(decimals)}
    </p>
  );
}
