import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { getLatestPosts } from '@/lib/blogData';

export default function Blog() {
  const latestPosts = getLatestPosts(3);

  return (
    <section id="blog" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="05 · Blog"
          title="Notes & writing"
          highlight="writing"
          description="Thoughts on AI, statistics, research, and the journey along the way."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {latestPosts.map((post, i) => {
            const dateObj = new Date(post.date);
            const formatted = dateObj.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });

            return (
              <Reveal key={post.slug} delay={i * 100} className="h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full group">
                  <article className="card overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 tag backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="font-mono text-xs text-faint mb-3">
                        {formatted} · {post.readTime}
                      </p>
                      <h3 className="font-display text-lg font-semibold leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed flex-1">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-accent">
                        Read article
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-ink border border-line hover:border-accent/50 hover:bg-accent/5 hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Posts
            <svg className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
