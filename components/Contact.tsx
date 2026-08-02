import { site } from '@/lib/site';

export default function Contact() {
  return (
    <section id="contact" className="py-14 bg-band">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Want to chat?</h2>
        <div className="card p-6 sm:p-8">
          <p className="text-[#3d4457] leading-relaxed mb-2">
            I&apos;m always happy to talk about research, collaboration, graduate study, or
            anything else you&apos;d like to discuss. The fastest way to reach me is by email:
          </p>
          <a
            href={`mailto:${site.email}`}
            className="link-accent font-medium text-lg break-all"
          >
            {site.email}
          </a>

          <div className="grid sm:grid-cols-2 gap-6 mt-7 pt-6 border-t border-line text-sm">
            <div>
              <h3 className="text-xs uppercase tracking-wide text-faint mb-1.5">Office</h3>
              {site.office.map((line) => (
                <p key={line} className="text-muted">
                  {line}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wide text-faint mb-1.5">Elsewhere</h3>
              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="link-accent">
                  GitHub
                </a>
                <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="link-accent">
                  LinkedIn
                </a>
                <a href={site.links.researchgate} target="_blank" rel="noopener noreferrer" className="link-accent">
                  ResearchGate
                </a>
                <a href={site.links.scholar} target="_blank" rel="noopener noreferrer" className="link-accent">
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
