import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projectsData';

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
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
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-5">
          <h1 className="font-display text-4xl font-bold">Project not found</h1>
          <Link href="/projects" className="text-accent hover:underline">
            ← Back to Projects
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
        <article className="max-w-4xl mx-auto px-5 sm:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-10">
            {project.title}
          </h1>

          <div className="relative rounded-2xl overflow-hidden border border-line mb-12">
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="card p-7 sm:p-10 mb-8">
            <h2 className="font-display text-2xl font-semibold mb-5">
              About this <span className="gradient-text">project</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6">{project.description}</p>
            {project.fullDescription && (
              <div
                className="prose-dark"
                dangerouslySetInnerHTML={{ __html: project.fullDescription }}
              />
            )}
          </div>

          {((project.challenges && project.challenges.length > 0) ||
            (project.outcomes && project.outcomes.length > 0)) && (
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {project.challenges && project.challenges.length > 0 && (
                <div className="card p-7 sm:p-8">
                  <h3 className="font-display text-xl font-semibold mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    Challenges
                  </h3>
                  <ul className="space-y-3 text-muted text-sm leading-relaxed">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="mt-2 w-1 h-1 shrink-0 rounded-full bg-amber-300" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.outcomes && project.outcomes.length > 0 && (
                <div className="card p-7 sm:p-8">
                  <h3 className="font-display text-xl font-semibold mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/25 flex items-center justify-center text-emerald-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Outcomes
                  </h3>
                  <ul className="space-y-3 text-muted text-sm leading-relaxed">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="mt-2 w-1 h-1 shrink-0 rounded-full bg-emerald-300" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Links */}
          <div className="relative rounded-2xl overflow-hidden border border-line">
            <Image
              src={project.image}
              alt=""
              width={1000}
              height={300}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#04060c]/85 backdrop-blur-sm" />
            <div className="relative flex flex-wrap items-center justify-center gap-4 px-8 py-14">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#04060c] bg-gradient-to-r from-accent to-accent2 hover:shadow-[0_0_35px_-5px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-ink border border-white/25 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View Live Demo
                </a>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
