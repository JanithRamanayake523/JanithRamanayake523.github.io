import Image from 'next/image';
import Link from 'next/link';
import { getLatestPosts } from '@/lib/blogData';

export default function Blog() {
  const posts = getLatestPosts(3);

  return (
    <section id="blog" className="py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Writing</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {posts.map((post) => {
            const formatted = new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group overflow-hidden flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="tag w-fit mb-3">{post.category}</span>
                  <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <p className="font-mono text-xs text-faint mt-4">
                    {formatted} · {post.readTime}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <Link href="/blog" className="link-accent text-sm font-medium">
          View all posts →
        </Link>
      </div>
    </section>
  );
}
