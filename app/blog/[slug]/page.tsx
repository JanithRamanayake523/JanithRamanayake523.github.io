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
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-5">
          <h1 className="font-display text-3xl font-semibold">Post not found</h1>
          <Link href="/blog" className="link-accent">
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
      <main className="min-h-screen pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-5 sm:px-8">
          <Link href="/blog" className="link-accent text-sm">
            ← Back to Blog
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mt-6 mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <span className="tag">{post.category}</span>
            <p className="font-mono text-xs text-faint">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              · {post.readTime}
            </p>
          </div>

          <div className="relative h-60 sm:h-80 rounded-lg overflow-hidden border border-line mb-10">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="prose-academic" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-14 pt-8 border-t border-line">
            <Link href="/blog" className="link-accent text-sm font-medium">
              ← Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
