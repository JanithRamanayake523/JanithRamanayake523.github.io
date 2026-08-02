import Image from 'next/image';
import Link from 'next/link';
import { getLatestProjects } from '@/lib/projectsData';

export default function Projects() {
  const projects = getLatestProjects(3);

  return (
    <section id="projects" className="py-14 bg-band">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Selected Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="card overflow-hidden group block"
            >
              <div className="relative h-36 overflow-hidden border-b border-line">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={220}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm text-ink leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag text-[0.7rem]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/projects" className="link-accent text-sm font-medium">
          View all projects →
        </Link>
      </div>
    </section>
  );
}
