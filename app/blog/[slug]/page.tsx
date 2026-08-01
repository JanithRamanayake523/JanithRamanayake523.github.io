import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllSlugs } from '@/lib/blogData';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.content) {
    return (
      <>
        <Navbar alwaysBlue={true} />
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-5">
          <h1 className="font-display text-4xl font-bold">Post not found</h1>
          <Link href="/blog" className="text-accent hover:underline">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar alwaysBlue={true} />
      <main className="min-h-screen pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-5 sm:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="tag">{post.category}</span>
            <span className="font-mono text-xs text-faint">
              {post.date} · {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-10">
            {post.title}
          </h1>

          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-line mb-12">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="prose-dark" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-16 pt-10 border-t border-line text-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-ink border border-line hover:border-accent/50 hover:bg-accent/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-4 h-4 text-accent group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5 5-5M18 12H6" />
              </svg>
              Back to All Posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
