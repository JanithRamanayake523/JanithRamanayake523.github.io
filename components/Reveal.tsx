'use client';

import { createElement, useLayoutEffect, useRef, useState } from 'react';

/**
 * Fades its content up the first time it scrolls into view. Content stays
 * visible until JS is ready, so nothing is hidden without scripting. Children
 * can hook into the same trigger with `.reveal-armed.is-visible` selectors.
 */
export default function Reveal({
  as = 'div',
  className = '',
  delay = 0,
  children,
}: {
  as?: 'div' | 'article';
  className?: string;
  /** Stagger in ms */
  delay?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    setArmed(true);
    let cleanup: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
          // Once the entrance has played, drop the reveal styles so the
          // element's own hover transitions work without the stagger delay
          cleanup = setTimeout(() => {
            el.classList.remove('reveal', 'reveal-armed', 'is-visible');
            el.style.transitionDelay = '';
          }, delay + 2200);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (cleanup) clearTimeout(cleanup);
    };
  }, [delay]);

  return createElement(
    as,
    {
      ref,
      className: `${className} ${armed ? 'reveal reveal-armed' : ''}`,
      style: armed ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children
  );
}
