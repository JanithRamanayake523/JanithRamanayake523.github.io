import Image from 'next/image';
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

        <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
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
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="tag w-fit mb-3">{post.category}</span>
                    <h2 className="font-display text-xl font-semibold leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
