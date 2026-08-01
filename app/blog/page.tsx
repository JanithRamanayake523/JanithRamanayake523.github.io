import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { blogPosts } from '@/lib/blogData';

export const metadata = {
  title: 'Blog — Janith Ramanayake',
  description: 'Thoughts on AI, statistics, and research by Janith Ramanayake.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar alwaysBlue={true} />
      <main className="min-h-screen">
        <PageHeader
          eyebrow="Writing"
          title="The Blog"
          highlight="Blog"
          description="Thoughts on AI, statistics, research, and the journey along the way."
        />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map((post, i) => {
              const dateObj = new Date(post.date);
              const formatted = dateObj.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });

              return (
                <Reveal key={post.slug} delay={(i % 3) * 100} className="h-full">
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
                        <h2 className="font-display text-lg font-semibold leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                          {post.title}
                        </h2>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
