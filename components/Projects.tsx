import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { getLatestProjects } from '@/lib/projectsData';

export default function Projects() {
  const projects = getLatestProjects(3);

  return (
    <section id="projects" className="relative py-28 bg-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Things I've built"
          highlight="built"
          description="Applied machine learning and data science projects — from credit scoring to generative AI agents."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100} className="h-full">
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

                  {/* Hover actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#04060c]/60 backdrop-blur-[2px]">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="px-5 py-2.5 rounded-full text-sm font-semibold bg-accent text-[#04060c] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-shadow"
                    >
                      Explore
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
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

        <Reveal className="text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-ink border border-line hover:border-accent/50 hover:bg-accent/5 hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Projects
            <svg className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
