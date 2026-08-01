import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import Reveal from '@/components/ui/Reveal';
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
          eyebrow="Portfolio"
          title="All Projects"
          highlight="Projects"
          description="Machine learning, deep learning, and data science work — end to end."
        />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 100} className="h-full">
                <article className="card overflow-hidden h-full flex flex-col group">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#04060c]/60 backdrop-blur-[2px]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="px-5 py-2.5 rounded-full text-sm font-semibold bg-accent text-[#04060c] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-shadow"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-display text-lg font-semibold leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-5 flex-1 line-clamp-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
