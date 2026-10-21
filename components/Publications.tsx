'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import { publications, type PublicationKind } from '@/lib/site';

const OWN_NAME = 'Janith R.R.H. Ramanayake';

// Masthead colors per publication type (inline so they never depend on class scanning).
// `color` is the text on the strip; `pillText` is the text on the white status pill.
interface Tone {
  backgroundColor: string;
  color: string;
  borderColor: string;
  pillText: string;
}

const KIND_TONES: Record<PublicationKind, Tone> = {
  // Dark green strip with white text
  'Conference Paper': {
    backgroundColor: '#0c6f50',
    color: '#ffffff',
    borderColor: '#09573e',
    pillText: '#0c6f50',
  },
  Presentation: {
    backgroundColor: '#e3effa',
    color: '#25619b',
    borderColor: '#c5dcf1',
    pillText: '#25619b',
  },
  // The regular soft green used across the site
  Abstract: {
    backgroundColor: '#e0f2ea',
    color: '#0e8a63',
    borderColor: '#c6e7d8',
    pillText: '#0e8a63',
  },
};

const KIND_DOTS: Record<PublicationKind, string> = {
  'Conference Paper': '#0c6f50',
  Presentation: '#25619b',
  Abstract: '#0e8a63',
};

// Bold my own name in an author list
function Authors({ text }: { text: string }) {
  const [before, after] = text.split(OWN_NAME);
  if (after === undefined) return <>{text}</>;
  return (
    <>
      {before}
      <strong className="font-semibold text-ink">{OWN_NAME}</strong>
      {after}
    </>
  );
}

function LinkButton({
  label,
  url,
  icon,
}: {
  label: string;
  url?: string;
  icon: 'github' | 'doc';
}) {
  const glyph =
    icon === 'github' ? (
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    ) : (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6"
      />
    );
  const content = (
    <>
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {glyph}
      </svg>
      {label}
    </>
  );

  if (!url) {
    return (
      <span
        className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-4 py-2 text-sm font-medium text-faint cursor-default"
        title="Link coming soon"
      >
        {content}
        <span className="text-xs font-normal">· soon</span>
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-[#0a6b4c] transition-colors"
    >
      {content}
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
      </svg>
    </a>
  );
}

export default function Publications() {
  const [active, setActive] = useState(0);
  const pub = publications[active];

  // Running totals shown above the index
  const counts = [
    { label: 'Publications', value: publications.length },
    {
      label: 'Conference papers',
      value: publications.filter((p) => p.kind === 'Conference Paper').length,
    },
    { label: 'Abstracts', value: publications.filter((p) => p.kind === 'Abstract').length },
  ];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setActive((i) => (i + 1) % publications.length);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setActive((i) => (i - 1 + publications.length) % publications.length);
    }
  };

  return (
    <section id="publications" className="py-14 bg-band">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Publications</h2>

        <Reveal className="grid lg:grid-cols-[minmax(0,22rem)_1fr] gap-6 lg:gap-8 items-start">
          {/* Index */}
          <div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {counts.map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl border border-line bg-card px-3 py-2.5 text-center"
                >
                  <CountUp
                    to={c.value}
                    decimals={0}
                    duration={900}
                    className="font-display text-2xl font-semibold text-accent leading-none"
                  />
                  <p className="mt-1.5 text-[0.7rem] leading-tight text-muted">{c.label}</p>
                </div>
              ))}
            </div>
            <div
              role="tablist"
              aria-label="Publications"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="space-y-2"
            >
              {publications.map((p, i) => {
                const on = i === active;
                return (
                  <button
                    key={p.title}
                    role="tab"
                    id={`pub-tab-${i}`}
                    aria-selected={on}
                    aria-controls="pub-sheet"
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`group relative w-full text-left rounded-xl border px-4 py-3 pl-5 transition-all duration-300 cursor-pointer hover:translate-x-1 ${
                      on
                        ? 'translate-x-1.5 bg-card border-accent shadow-[0_10px_30px_-18px_rgba(14,138,99,0.55)]'
                        : 'border-line bg-card/50 hover:bg-card hover:border-[#aedcc8]'
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full origin-center transition-all duration-300 ${
                        on ? 'scale-y-100' : 'scale-y-50'
                      }`}
                      style={{ backgroundColor: KIND_DOTS[p.kind], opacity: on ? 1 : 0.35 }}
                    />
                    <span className="flex items-center justify-between gap-3 font-mono text-[0.7rem] text-faint">
                      <span>{p.month ? `${p.year} ${p.month}` : p.year}</span>
                      <span>{p.kind}</span>
                    </span>
                    <span
                      className={`mt-1 block text-sm leading-snug line-clamp-2 ${
                        on ? 'text-ink font-medium' : 'text-muted'
                      }`}
                    >
                      {p.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sheet */}
          <div
            key={active}
            id="pub-sheet"
            role="tabpanel"
            aria-labelledby={`pub-tab-${active}`}
            className="relative overflow-hidden lg:min-h-[35rem] rounded-2xl border border-line bg-card shadow-[0_18px_40px_-28px_rgba(28,35,51,0.35)]"
          >
            {/* Tinted header strip, like a journal masthead */}
            <div
              className="pub-in relative overflow-hidden px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 border-b"
              style={{
                '--i': 0,
                backgroundColor: KIND_TONES[pub.kind].backgroundColor,
                borderColor: KIND_TONES[pub.kind].borderColor,
              } as React.CSSProperties}
            >
              {/* One light sweep across the strip when a work opens */}
              <span className="pub-shine" aria-hidden="true" />
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: KIND_TONES[pub.kind].color }}
                >
                  {pub.kind}
                </span>
                {pub.status && (
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium"
                    style={{ color: KIND_TONES[pub.kind].pillText }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {pub.status}
                  </span>
                )}
              </div>
              <span
                className="flex items-center gap-3 font-display text-2xl font-semibold leading-none"
                style={{ color: KIND_TONES[pub.kind].color }}
              >
                <span>{pub.year}</span>
                {pub.month && (
                  <>
                    <span aria-hidden="true" className="h-5 w-px bg-current opacity-40" />
                    <span className="uppercase">{pub.month}</span>
                  </>
                )}
              </span>
            </div>

            <div className="px-6 sm:px-8 py-7">
              <h3
                className="pub-in font-display text-2xl sm:text-[1.75rem] font-semibold text-ink leading-snug"
                style={{ '--i': 1 } as React.CSSProperties}
              >
                {pub.title}
              </h3>

              {pub.authors && (
                <p className="pub-in mt-4 text-[0.95rem] text-muted leading-relaxed" style={{ '--i': 2 } as React.CSSProperties}>
                  <Authors text={pub.authors} />
                </p>
              )}

              <p className="pub-in mt-4 flex items-start gap-2.5 text-[0.95rem] text-ink" style={{ '--i': 3 } as React.CSSProperties}>
                <svg
                  className="w-4 h-4 mt-1 shrink-0 text-faint"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" />
                </svg>
                {pub.venue}
              </p>

              {/* Keywords */}
              <div className="pub-in mt-7 pt-5 border-t border-dashed border-line" style={{ '--i': 4 } as React.CSSProperties}>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-faint mb-3">
                  Keywords
                </p>
                <div className="flex flex-wrap gap-2">
                  {pub.topics.map((t, i) => (
                    <span
                      key={t}
                      className="tag pub-chip"
                      style={{ '--c': i } as React.CSSProperties}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code and official publication */}
              <div className="pub-in mt-7 flex flex-wrap justify-center gap-2.5" style={{ '--i': 6 } as React.CSSProperties}>
                <LinkButton label="GitHub" url={pub.github} icon="github" />
                <LinkButton label="Official publication" url={pub.publicationUrl} icon="doc" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
