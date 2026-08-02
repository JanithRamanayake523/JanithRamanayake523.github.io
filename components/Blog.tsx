import Link from 'next/link';
import { getLatestPosts } from '@/lib/blogData';

export default function Blog() {
  const posts = getLatestPosts(5);

  return (
    <section id="blog" className="py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Writing</h2>
        <ul className="divide-y divide-line mb-8">
          {posts.map((post) => {
            const dateObj = new Date(post.date);
            const formatted = dateObj.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-baseline gap-4 py-3.5 group"
                >
                  <span className="font-mono text-xs text-faint shrink-0 w-24">
                    {formatted}
                  </span>
                  <span className="text-ink group-hover:text-accent transition-colors flex-1">
                    {post.title}
                  </span>
                  <span className="text-xs text-faint shrink-0 hidden sm:inline">
                    {post.readTime}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/blog" className="link-accent text-sm font-medium">
          View all posts →
        </Link>
      </div>
    </section>
  );
}
