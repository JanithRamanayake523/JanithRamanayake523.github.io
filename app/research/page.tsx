import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import ResearchImage from '@/components/ResearchImage';
import { researchProjects } from '@/lib/researchData';

export const metadata = {
  title: 'Research — Janith Ramanayake',
  description: 'Research projects by Janith Ramanayake.',
};

export default function ResearchPage() {
  return (
    <>
      <Navbar alwaysBlue={true} />
      <main className="min-h-screen">
        <PageHeader
          title="Research"
          description="Projects across machine learning, signal processing, and applied data science."
        />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <div className="space-y-6">
            {researchProjects.map((project) => (
              <Link key={project.slug} href={`/research/${project.slug}`} className="block group">
                <article className="card p-5 flex flex-col sm:flex-row gap-5">
                  <div className="shrink-0 sm:w-44">
                    <ResearchImage
                      image={project.image}
                      title={project.title}
                      className="rounded-md w-full h-32 sm:h-28 border border-line"
                      sizes="(min-width: 640px) 176px, 100vw"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h2 className="font-medium text-ink leading-snug group-hover:text-accent transition-colors">
                        {project.title}
                      </h2>
                    </div>
                    {(project.affiliation || project.period) && (
                      <p className="text-xs text-faint mb-1.5">
                        {[project.affiliation, project.period].filter(Boolean).join(' · ')}
                      </p>
                    )}
                    <p className="text-sm text-muted leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`tag ${project.status === 'Ongoing' ? '' : 'opacity-70'}`}>
                        {project.status}
                      </span>
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
