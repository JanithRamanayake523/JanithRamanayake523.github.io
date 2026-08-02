import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
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
          title="Writing"
          description="Notes on AI, statistics, research, and the journey along the way."
        />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <ul className="divide-y divide-line">
            {blogPosts.map((post) => {
              const dateObj = new Date(post.date);
              const formatted = dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              });

              return (
                <li key={post.slug} className="py-5">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-faint shrink-0 w-24">
                        {formatted}
                      </span>
                      <div className="min-w-0">
                        <h2 className="text-ink font-medium group-hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-sm text-muted mt-1 leading-relaxed">{post.excerpt}</p>
                        <p className="text-xs text-faint mt-2">
                          {post.category} · {post.readTime}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
