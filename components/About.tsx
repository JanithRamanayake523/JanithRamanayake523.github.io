import Image from 'next/image';
import { education, experience, type HistoryEntry } from '@/lib/site';

function EntryList({
  title,
  items,
}: {
  title: string;
  items: HistoryEntry[];
}) {
  return (
    <div className="bg-card border border-line rounded-2xl p-6 sm:p-7">
      <h3 className="font-display text-xl font-semibold mb-5">{title}</h3>
      <div className="space-y-3.5">
        {items.map((item) => (
          <div
            key={`${item.title}-${item.period}`}
            className="flex items-center gap-4 px-5 py-4 bg-base/40 border border-line rounded-xl transition-all duration-300 hover:-translate-y-[3px] hover:border-[#aedcc8] hover:shadow-[0_10px_30px_-18px_rgba(28,35,51,0.25)]"
          >
            <div className="shrink-0 w-14 h-14 rounded-lg border border-line bg-white flex items-center justify-center p-1.5">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={`${item.place} logo`}
                  width={48}
                  height={48}
                  className="object-contain max-h-11 w-auto"
                />
              ) : (
                <span className="font-display text-sm font-semibold text-accent">
                  {item.monogram ?? item.place.slice(0, 2)}
                </span>
              )}
            </div>
            <div className="min-w-0">
              <h4 className="font-medium text-ink leading-snug">{item.title}</h4>
              <p className="text-sm text-muted">
                {item.place}
                {item.period && <span className="text-faint"> · {item.period}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="experience" className="py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Education & Experience</h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <EntryList title="Education" items={education} />
          <EntryList title="Professional Experience" items={experience} />
        </div>
      </div>
    </section>
  );
}
