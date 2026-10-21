import Link from 'next/link';
import NewsTimeline from '@/components/NewsTimeline';
import { news } from '@/lib/site';

const RECENT_COUNT = 5;

export default function News() {
  return (
    <section id="news" className="py-14 bg-band">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">News</h2>

        <NewsTimeline items={news.slice(0, RECENT_COUNT)} />

        {news.length > RECENT_COUNT && (
          <div className="md:pl-[calc(8rem+1.5rem)] mt-6">
            <Link href="/news" className="link-accent text-sm font-medium">
              Older news →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
