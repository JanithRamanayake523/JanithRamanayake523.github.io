import Image from 'next/image';
import { education, experience } from '@/lib/site';

function EntryList({
  title,
  items,
}: {
  title: string;
  items: typeof education;
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold mb-5">{title}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={`${item.title}-${item.period}`} className="flex items-center gap-4">
            <div className="shrink-0 w-14 h-14 rounded-lg border border-line bg-white flex items-center justify-center p-1.5">
              <Image
                src={item.logo}
                alt={`${item.place} logo`}
                width={48}
                height={48}
                className="object-contain max-h-11 w-auto"
              />
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
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Education & Experience</h2>
        <div className="grid sm:grid-cols-2 gap-12">
          <EntryList title="Education" items={education} />
          <EntryList title="Professional Experience" items={experience} />
        </div>
      </div>
    </section>
  );
}
