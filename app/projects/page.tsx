import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { projects } from '@/lib/projectsData';

export const metadata = {
  title: 'Projects — Janith Ramanayake',
  description: 'Machine learning and data science projects by Janith Ramanayake.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar alwaysBlue={true} />
      <main className="min-h-screen">
        <PageHeader
          title="Projects"
          description="Machine learning, deep learning, and data science work — end to end."
        />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  <h2 className="font-medium text-sm text-ink leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {project.title}
                  </h2>
                  <p className="text-xs text-muted mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
