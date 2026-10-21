import Image from 'next/image';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import {
  education,
  researchExperience,
  teachingExperience,
  degreeBreakdown,
  type HistoryEntry,
} from '@/lib/site';

// Bento layout: a few tiles, each picked from the data in lib/site.ts
const [msc, certificate, bsc, advancedLevel] = education;
const [moratuwaRole, peradeniyaRole, internship] = researchExperience;
const totalCredits = degreeBreakdown.reduce((sum, a) => sum + a.credits, 0);

function Logo({ item, size = 'md' }: { item: HistoryEntry; size?: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'w-10 h-10' : 'w-12 h-12';
  return (
    <div
      className={`shrink-0 ${box} rounded-lg border border-line bg-white flex items-center justify-center p-1`}
    >
      {item.logo ? (
        <Image
          src={item.logo}
          alt={`${item.place} logo`}
          width={40}
          height={40}
          className="object-contain max-h-9 w-auto"
        />
      ) : (
        <span className="font-display text-xs font-semibold text-accent">
          {item.monogram ?? item.place.slice(0, 2)}
        </span>
      )}
    </div>
  );
}

// Renders 'Jun 2026 - Jun 2027 (expected)' / 'Jul 2026 - Present' / 'Aug 2019'
// as a calendar chip with an arrow between the dates.
function DateRange({ period, dark }: { period: string; dark?: boolean }) {
  const expected = period.includes('(expected)');
  const [start, end] = period.replace(/\s*\(expected\)/, '').split(' - ');
  const present = end === 'Present';

  return (
    <span
      className={`mt-2 inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5 rounded-full border px-2.5 py-1 font-mono text-[0.7rem] leading-none ${
        dark
          ? 'border-white/20 bg-white/10 text-emerald-50'
          : 'border-line bg-base/70 text-muted'
      }`}
    >
      <svg
        className="w-3 h-3 shrink-0 opacity-70"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
      </svg>
      <span className={dark ? 'text-white' : 'text-ink'}>{start}</span>
      {end && (
        <>
          <span aria-hidden="true" className="opacity-60">→</span>
          {present ? (
            <span className={`inline-flex items-center gap-1 font-semibold ${dark ? 'text-emerald-200' : 'text-accent'}`}>
              <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-current" />
              Present
            </span>
          ) : (
            <span className={dark ? 'text-white' : 'text-ink'}>{end}</span>
          )}
        </>
      )}
      {expected && <span className="opacity-70">(expected)</span>}
    </span>
  );
}

// Category pills at the top of each tile, each with its own muted tint
const TONES = {
  green: { backgroundColor: '#e0f2ea', color: '#0e8a63', borderColor: '#c6e7d8' },
  blue: { backgroundColor: '#e3effa', color: '#25619b', borderColor: '#c5dcf1' },
  amber: { backgroundColor: '#fbf1da', color: '#8a5a00', borderColor: '#f0dcae' },
  violet: { backgroundColor: '#eee8f9', color: '#5b3fa0', borderColor: '#d9cdf1' },
  rose: { backgroundColor: '#fce9ee', color: '#a3294a', borderColor: '#f4cbd6' },
} as const;

function Label({
  children,
  tone = 'green',
  className = 'mb-3.5',
}: {
  children: React.ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <p className={className}>
      <span
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em]"
        style={TONES[tone]}
      >
        {children}
      </span>
    </p>
  );
}

export default function About() {
  return (
    <section id="experience" className="py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Education & Experience</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Now: the focal tile */}
          <Reveal as="article" delay={0} className="relative overflow-hidden md:col-span-2 rounded-2xl p-6 sm:p-7 bg-[#0c6f50] text-white shadow-[0_18px_40px_-24px_rgba(12,111,80,0.8)]">
            {/* Slow ambient glow behind the content */}
            <div className="now-glow" aria-hidden="true" />

            <p
              className="now-item flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-emerald-100/80 mb-5"
              style={{ '--i': 0 } as React.CSSProperties}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-emerald-300 animate-ping opacity-60" />
                <span className="relative w-2 h-2 rounded-full bg-emerald-300" />
              </span>
              Now
            </p>

            <div className="now-item flex gap-4 mb-6" style={{ '--i': 1 } as React.CSSProperties}>
              <Logo item={msc} />
              <div className="min-w-0">
                <h3 className="font-display text-xl sm:text-2xl font-semibold leading-snug">
                  {msc.title}
                </h3>
                <p className="text-emerald-50/85">{msc.place}</p>
                <DateRange period={msc.period} dark />
                <p className="text-sm text-emerald-50/80 mt-2.5 leading-relaxed">{msc.detail}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[moratuwaRole, peradeniyaRole].map((role, i) => (
                <div
                  key={role.place}
                  className="now-item now-role flex gap-3 rounded-xl bg-white/10 border border-white/15 p-4"
                  style={{ '--i': 2 + i } as React.CSSProperties}
                >
                  <Logo item={role} size="sm" />
                  <div className="min-w-0">
                    <h4 className="font-medium leading-snug">{role.title}</h4>
                    <p className="text-sm text-emerald-50/85">{role.place}</p>
                    <DateRange period={role.period} dark />
                    <p className="text-sm text-emerald-50/80 mt-2 leading-relaxed">{role.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* BSc: GPA highlight */}
          <Reveal as="article" delay={90} className="card p-6 sm:p-7 flex flex-col">
            <Label tone="green">Degree</Label>
            <div className="flex items-center gap-4">
              <CountUp to={3.87} className="font-display text-[2.6rem] font-semibold text-ink leading-none" />
              <p className="text-sm text-muted leading-snug">
                GPA out of 4.00
                <br />
                First Class · {totalCredits} credits
              </p>
            </div>

            {/* Credits and GPA by subject area */}
            <ul className="mt-3 space-y-2">
              {degreeBreakdown.map((area) => (
                <li
                  key={area.subject}
                  className="rounded-lg border border-line bg-base/70 px-3 py-1"
                >
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-xs text-ink">{area.subject}</span>
                    <span className="flex items-baseline gap-3 whitespace-nowrap">
                      <span className="text-xs text-faint">{area.credits} credits</span>
                      <span className="font-mono font-semibold text-accent w-9 text-right">
                        {area.gpa.toFixed(2)}
                      </span>
                    </span>
                  </div>
                  <div className="mt-1 h-[3px] rounded-full bg-[#d6d6ce] overflow-hidden">
                    <div
                      className="reveal-bar h-full rounded-full bg-accent"
                      style={{ width: `${(area.gpa / 4) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted leading-snug mt-2 mb-2">
              Thesis: Enhancing Sleep Stage Classification with Vision Transformers
            </p>
            <div className="flex gap-3 mt-auto">
              <Logo item={bsc} size="sm" />
              <div className="min-w-0">
                <h3 className="font-medium text-ink leading-snug">{bsc.title}</h3>
                <p className="text-sm text-muted">{bsc.place}</p>
                <DateRange period={bsc.period} />
              </div>
            </div>
          </Reveal>

          {/* Research internship */}
          <Reveal as="article" delay={180} className="card p-6 flex flex-col">
            <Label tone="blue">Research</Label>
            <div className="flex gap-3">
              <Logo item={internship} size="sm" />
              <div className="min-w-0">
                <h3 className="font-medium text-ink leading-snug">{internship.title}</h3>
                <p className="text-sm text-muted">{internship.place}</p>
                <DateRange period={internship.period} />
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed mt-4">{internship.detail}</p>
          </Reveal>

          {/* Teaching */}
          <Reveal as="article" delay={270} className="card p-6">
            <Label tone="amber">Teaching</Label>
            <ul className="space-y-4">
              {teachingExperience.map((role) => (
                <li key={role.title} className="flex gap-3">
                  <Logo item={role} size="sm" />
                  <div className="min-w-0">
                    <h3 className="font-medium text-ink leading-snug">{role.title}</h3>
                    <p className="text-sm text-muted">{role.place}</p>
                    <DateRange period={role.period} />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Certificate */}
          <Reveal as="article" delay={360} className="card p-6 flex flex-col">
            <Label tone="violet">Certificate</Label>
            <div className="flex gap-3">
              <Logo item={certificate} size="sm" />
              <div className="min-w-0">
                <h3 className="font-medium text-ink leading-snug">{certificate.title}</h3>
                <p className="text-sm text-muted">{certificate.place}</p>
                <DateRange period={certificate.period} />
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed mt-4">{certificate.detail}</p>
          </Reveal>

          {/* A/L strip */}
          {/* High school: card styling, kept compact */}
          <Reveal as="article" delay={450} className="card md:col-span-3 px-5 py-4 grid md:grid-cols-[1fr_auto_auto] gap-x-10 gap-y-3 items-center">
            <div className="flex items-center gap-3">
              <Logo item={advancedLevel} size="sm" />
              <div className="min-w-0">
                <Label tone="rose" className="mb-1.5">
                  High School
                </Label>
                <h3 className="text-sm font-medium text-ink leading-snug">{advancedLevel.title}</h3>
                <p className="text-xs text-muted">{advancedLevel.place}</p>
                <DateRange period={advancedLevel.period} />
              </div>
            </div>

            <ul className="space-y-1 md:min-w-[14rem]">
              {advancedLevel.results?.map((r) => (
                <li
                  key={r.subject}
                  className="flex items-center justify-between gap-6 rounded-md border border-line bg-base/70 pl-2.5 pr-1 py-0.5 text-xs text-muted"
                >
                  {r.subject}
                  <span className="rounded bg-accent-soft px-2 py-px font-mono text-[0.7rem] font-semibold text-accent">
                    {r.grade}
                  </span>
                </li>
              ))}
            </ul>

            {advancedLevel.detail && (
              <div className="md:border-l md:border-line md:pl-8">
                <span className="tag !text-sm !px-3.5 !py-1">
                  <strong className="font-display font-semibold mr-1.5">
                    {advancedLevel.detail.match(/^Top \d+%/)?.[0] ?? advancedLevel.detail}
                  </strong>
                  {advancedLevel.detail.replace(/^Top \d+%\s*/, '')}
                </span>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
