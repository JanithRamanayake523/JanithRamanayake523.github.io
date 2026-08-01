import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { site, education, experience, researchInterests, skillGroups } from '@/lib/site';

function Timeline({
  title,
  items,
  icon,
}: {
  title: string;
  items: typeof education;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
        <span className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
          {icon}
        </span>
        {title}
      </h3>
      <div className="relative pl-6 border-l border-line space-y-6">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} className="relative">
            {/* Timeline node */}
            <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
            <div className="card p-5 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h4 className="font-semibold text-ink leading-snug">{item.title}</h4>
                <p className="text-sm text-muted mt-1">{item.place}</p>
                {item.period && (
                  <p className="font-mono text-xs text-accent/80 mt-1.5">{item.period}</p>
                )}
              </div>
              <div className="shrink-0 w-16 h-16 rounded-xl bg-white/[0.04] border border-line flex items-center justify-center p-2">
                <Image
                  src={item.logo}
                  alt={`${item.place} logo`}
                  width={56}
                  height={56}
                  className="object-contain max-h-12 w-auto"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 · About"
          title="A bit about me"
          highlight="me"
        />

        {/* Bio + photo */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-14 items-start mb-24">
          <Reveal>
            <div className="space-y-5 text-muted text-lg leading-relaxed">
              <p>
                I&apos;m a Data Science graduate with a strong foundation in{' '}
                <span className="text-ink">Statistics, Mathematics, and Computing</span>, backed by
                hands-on experience in Machine Learning, Deep Learning, and Artificial Intelligence.
              </p>
              <p>
                Across my academic and professional journey, I&apos;ve analyzed complex datasets,
                designed predictive models, and built intelligent systems that bridge theory with
                real-world impact — strengthening my ability to think critically, adapt quickly, and
                deliver solutions grounded in solid methodology.
              </p>
              <p>
                Driven by curiosity, I&apos;m now seeking{' '}
                <span className="gradient-text font-semibold">PhD opportunities</span> to deepen my
                research expertise and contribute to meaningful scientific progress.
              </p>
            </div>

            {/* Research interests */}
            <div className="mt-10">
              <p className="eyebrow mb-4">Research interests</p>
              <div className="flex flex-wrap gap-2.5">
                {researchInterests.map((interest) => (
                  <span key={interest} className="tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Portrait */}
          <Reveal delay={150}>
            <div className="relative mx-auto max-w-[340px]">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/30 via-accent2/20 to-accent3/30 blur-xl opacity-60" />
              <div className="relative rounded-2xl overflow-hidden border border-line">
                <Image
                  src={site.photo}
                  alt="Janith Ramanayake"
                  width={340}
                  height={420}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="animate-floaty absolute -bottom-5 -left-5 glass rounded-xl px-4 py-3 border border-line">
                <p className="font-mono text-xs text-accent">currently @</p>
                <p className="text-sm font-semibold text-ink">University of Colombo</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Education + Experience */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <Timeline
            title="Education"
            items={education}
            icon={
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
              </svg>
            }
          />
          <Timeline
            title="Experience"
            items={experience}
            icon={
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>

        {/* Tech skills */}
        <Reveal>
          <p className="eyebrow mb-6 text-center">Toolbox</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 90}>
                <div className="card p-6 h-full">
                  <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-4">
                    {group.label}
                  </h4>
                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-muted text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
