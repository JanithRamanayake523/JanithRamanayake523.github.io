import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { researchProjects, type ResearchProject } from '@/lib/researchData';

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Status({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] ${
        dark ? 'bg-white/12 text-white' : 'bg-accent-soft text-accent'
      }`}
    >
      <span
        className={`pulse-dot w-1.5 h-1.5 rounded-full ${dark ? 'text-emerald-300' : 'text-accent'}`}
        style={{ backgroundColor: 'currentColor' }}
      />
      In progress
    </span>
  );
}

function since(p: ResearchProject) {
  return p.period ? p.period.replace(/\s*-\s*Present$/, '') : undefined;
}

function Featured({ project }: { project: ResearchProject }) {
  return (
    <Reveal as="article" className="research-card relative overflow-hidden rounded-2xl bg-[#0c6f50] text-white">
      <Link
        href={`/research/${project.slug}`}
        className="group relative z-[1] block p-6 sm:p-9 lg:p-10"
      >
        {/* Decorative: faint grid + slowly drifting rings */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="research-rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="font-mono text-sm text-emerald-200/80">01</span>
              <Status dark />
              <span className="text-xs text-emerald-100/80">
                {project.affiliation}
                {since(project) && ` · Since ${since(project)}`}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-[2rem] font-semibold leading-tight">
              {project.title}
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-emerald-50/85">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white lg:self-end">
            Read more
            <span className="research-arrow grid place-items-center w-9 h-9 rounded-full bg-white text-[#0c6f50]">
              <Arrow />
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

function Card({
  project,
  index,
  delay,
}: {
  project: ResearchProject;
  index: number;
  delay: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="research-card card relative overflow-hidden">
      <Link
        href={`/research/${project.slug}`}
        className="group relative z-[1] flex h-full flex-col p-6"
      >
        {/* Large faint index numeral */}
        <span
          className="research-num absolute top-5 right-6 font-display text-[4rem] font-semibold leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          {String(index).padStart(2, '0')}
        </span>

        <div className="relative">
          <Status />
        </div>

        <h3 className="relative mt-4 font-display text-xl font-semibold leading-snug text-ink group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="relative mt-1.5 text-xs text-faint">
          {project.affiliation}
          {since(project) && ` · Since ${since(project)}`}
        </p>
        <p className="relative mt-3 text-sm leading-relaxed text-muted line-clamp-5">
          {project.description}
        </p>

        <div className="relative mt-auto pt-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Read more
            <Arrow className="research-arrow" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Research() {
  const [lead, ...rest] = researchProjects.filter((p) => p.status === 'Ongoing');
  const completed = researchProjects.length - (rest.length + 1);

  return (
    <section id="research" className="py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Ongoing Research</h2>

        <div className="space-y-5">
          <Featured project={lead} />
          <div className="grid md:grid-cols-3 gap-5">
            {rest.map((p, i) => (
              <Card key={p.slug} project={p} index={i + 2} delay={i * 110} />
            ))}
          </div>
        </div>

        <Link href="/research" className="mt-8 inline-block link-accent text-sm font-medium">
          View all research{completed > 0 ? ` including ${completed} completed` : ''} →
        </Link>
      </div>
    </section>
  );
}
