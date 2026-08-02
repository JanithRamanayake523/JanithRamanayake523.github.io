import { site } from '@/lib/site';

const socials = [
  {
    label: 'GitHub',
    href: site.links.github,
    icon: (
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: site.links.linkedin,
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    ),
  },
  {
    label: 'ResearchGate',
    href: site.links.researchgate,
    icon: (
      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 1-.023.55 5.656 5.656 0 0 1 .833 3.1c0 1.237-.51 2.187-1.527 2.853a4.693 4.693 0 0 1-.664.37v.002c-.57.285-1.237.58-2.01.885-.936.37-1.78.778-2.532 1.227-.752.447-1.402 1.003-1.948 1.663a4.388 4.388 0 0 0-.505.672 6.232 6.232 0 0 1 2.38.505 5.464 5.464 0 0 1 2.103 1.527c.275.31.52.643.73 1 .21.356.38.738.505 1.143a5.756 5.756 0 0 1 .19 1.472c0 .4-.04.797-.124 1.193a5.796 5.796 0 0 1-.5 1.372 4.65 4.65 0 0 1-.87 1.152 4.492 4.492 0 0 1-1.245.818 4.76 4.76 0 0 1-1.505.49 4.932 4.932 0 0 1-.61.04h-1.76c-1.702 0-3.163-.647-4.382-1.943a4.809 4.809 0 0 1-.602-.758l-.002-.004A6.966 6.966 0 0 1 2.46 22.7a5.02 5.02 0 0 1-.037-.615c0-.4.046-.798.14-1.193a5.797 5.797 0 0 1 .557-1.372 4.65 4.65 0 0 1 .93-1.153c.337-.324.714-.586 1.125-.79a4.76 4.76 0 0 1 1.508-.488 4.931 4.931 0 0 1 .614-.038h1.773c1.695 0 3.157-.647 4.377-1.944.305-.324.565-.687.774-1.084.21-.398.352-.822.425-1.272a5.225 5.225 0 0 0 .09-.966 3.253 3.253 0 0 0-2.843-3.235 5.577 5.577 0 0 0-.574-.032h-.168c-1.785 0-3.267-.63-4.444-1.894C11.73 5.558 11.25 4.123 11.25 2.45A2.37 2.37 0 0 1 11.278 0h8.308z" />
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-[#0e8a63] via-[#0c6f50] to-[#084a35]"
    >
      {/* Decorative glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-emerald-300/15 blur-3xl pointer-events-none" />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-200/80 mb-4">
          Get in touch
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-5">
          Want to chat?
        </h2>
        <p className="text-emerald-50/85 text-lg leading-relaxed max-w-xl mx-auto mb-9">
          I&apos;m always happy to talk about research, collaboration, or graduate study.
          The fastest way to reach me is by email — I usually reply within a day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-9">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2.5 bg-white text-[#0c6f50] font-semibold px-7 py-3.5 rounded-full hover:shadow-[0_12px_35px_-10px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {site.email}
          </a>
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/35 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/25 text-emerald-50/90 hover:text-white hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {social.icon}
              </svg>
            </a>
          ))}
        </div>

        <p className="text-sm text-emerald-100/60">
          {site.office.join(' · ')}
        </p>
      </div>
    </section>
  );
}
