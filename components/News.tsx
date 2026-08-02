import { news, glance } from '@/lib/site';

export default function News() {
  return (
    <section id="news" className="py-14 bg-band">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
          {/* Updates */}
          <div>
            <h2 className="section-title">Updates</h2>
            <ul className="space-y-4">
              {news.map((item, i) => (
                <li key={i} className="flex gap-4 text-[0.95rem]">
                  <span className="font-mono text-xs text-faint pt-1 shrink-0 w-16">
                    {item.date}
                  </span>
                  <span className="text-[#3d4457] leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* At a Glance */}
          <div>
            <h2 className="section-title">At a Glance</h2>
            <dl className="border border-line rounded-lg divide-y divide-line text-sm bg-card">
              {glance.map((item) => (
                <div key={item.label} className="px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-faint mb-0.5">
                    {item.label}
                  </dt>
                  <dd className="text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
