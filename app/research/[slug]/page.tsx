import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResearchImage from '@/components/ResearchImage';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/researchData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProjectBySlug((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} | Janith Ramanayake`,
    description: project.description,
  };
}

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

          {(project.affiliation || project.period) && (
            <p className="text-sm text-muted mb-4">
              {[project.affiliation, project.period].filter(Boolean).join(' · ')}
            </p>
          )}

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

          <ResearchImage
            image={project.image}
            title={project.title}
            className="rounded-lg border border-line h-60 sm:h-80 mb-10"
            sizes="(min-width: 768px) 768px, 100vw"
            priority
          />

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
