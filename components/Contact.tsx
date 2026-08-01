'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/lib/site';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Static-export friendly: opens the visitor's mail client with a prefilled message
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    'w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-line text-ink placeholder:text-faint focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15 transition-all duration-300';

  return (
    <section id="contact" className="relative py-28 bg-surface/40 overflow-hidden">
      <div className="aurora w-[420px] h-[420px] -bottom-40 -left-40 bg-accent2/15" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="06 · Contact"
          title="Let's work together"
          highlight="together"
          description="Interested in collaboration, research, or PhD supervision? My inbox is always open."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <Reveal className="space-y-5">
            <a
              href={`mailto:${site.email}`}
              className="card p-6 flex items-start gap-4 group block"
            >
              <span className="w-11 h-11 shrink-0 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold text-ink mb-1 group-hover:text-accent transition-colors">Email</h3>
                <p className="text-muted text-sm break-all">{site.email}</p>
              </div>
            </a>

            <div className="card p-6 flex items-start gap-4">
              <span className="w-11 h-11 shrink-0 rounded-xl bg-accent2/10 border border-accent2/25 flex items-center justify-center text-accent2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold text-ink mb-1">Office</h3>
                {site.office.map((line) => (
                  <p key={line} className="text-muted text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-ink mb-4">Elsewhere</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { name: 'GitHub', url: site.links.github },
                  { name: 'LinkedIn', url: site.links.linkedin },
                  { name: 'ResearchGate', url: site.links.researchgate },
                  { name: 'Google Scholar', url: site.links.scholar },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg border border-line text-sm text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
                  >
                    {link.name}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="card p-7 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={inputClasses}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className={inputClasses}
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={6}
                required
                className={`${inputClasses} resize-y min-h-[140px]`}
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#04060c] bg-gradient-to-r from-accent to-accent2 hover:shadow-[0_0_35px_-5px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message
                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
