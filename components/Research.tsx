import Image from 'next/image';
import Link from 'next/link';
import { getLatestProjects } from '@/lib/researchData';

export default function Research() {
  const projects = getLatestProjects(3);

  return (
    <section id="research" className="py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Research</h2>
        <div className="space-y-6 mb-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/research/${project.slug}`} className="block group">
              <article className="card p-5 flex flex-col sm:flex-row gap-5">
                <div className="shrink-0 sm:w-44">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={350}
                    height={200}
                    className="rounded-md object-cover w-full h-32 sm:h-28 border border-line"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-medium text-ink leading-snug group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-3">{project.description}</p>
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
        <Link href="/research" className="link-accent text-sm font-medium">
          View all research →
        </Link>
      </div>
    </section>
  );
}
