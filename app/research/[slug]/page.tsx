import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/researchData';

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ResearchProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <Navbar alwaysBlue={true} />
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-5">
          <h1 className="font-display text-3xl font-semibold">Project not found</h1>
          <Link href="/research" className="link-accent">
            ← Back to Research
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
          <Link href="/research" className="link-accent text-sm">
            ← Back to Research
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mt-6 mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className={`tag ${project.status === 'Ongoing' ? '' : 'opacity-70'}`}>
              {project.status}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="relative h-60 sm:h-80 rounded-lg overflow-hidden border border-line mb-10">
            <Image src={project.image} alt={project.title} fill className="object-cover" priority />
          </div>

          <div className="prose-academic">
            <p>{project.description}</p>
          </div>

          <div className="mt-14 pt-8 border-t border-line">
            <Link href="/research" className="link-accent text-sm font-medium">
              ← Back to all research
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
