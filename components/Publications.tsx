import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: 'Presentation' | 'Abstract';
  links: { label: string; url: string }[];
}

const publications: Publication[] = [
  {
    title:
      'Representation Separability of Signal-to-Image Transformations for Sleep Stage Classification Using Pretrained Vision Transformers',
    authors: 'Janith R.R.H. Ramanayake, Chandima N.P.G. Arachchige',
    venue: 'International Conference in Data Science',
    year: '2025',
    type: 'Presentation',
    links: [
      { label: 'Slides', url: '#' },
      {
        label: 'Proceedings',
        url: 'https://science.cmb.ac.lk/icds/icds-2025/proceedings/',
      },
      { label: 'Code', url: '#' },
    ],
  },
  {
    title:
      'Machine Learning Framework for Predicting Thermophysical Properties of Polymers from SMILES Representations',
    authors:
      'Sundaresan Abilash, Anton S. Perera, Janith R.R.H. Ramanayake, Jaliya Amarathunga, Kaveen T Nagodawithana',
    venue: 'Ruhuna International Science and Technology Conference',
    year: '2026',
    type: 'Abstract',
    links: [
      { label: 'PDF', url: '#' },
      { label: 'Slides', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
];

export default function Publications() {
  return (
    <section id="publications" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 · Publications"
          title="Papers & presentations"
          highlight="presentations"
        />

        <div className="space-y-5 max-w-4xl mx-auto">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 120}>
              <article className="card p-7 sm:p-8 group">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="tag">{pub.type}</span>
                  <span className="font-mono text-xs text-faint">
                    {pub.venue} · {pub.year}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                  {pub.title}
                </h3>
                <p className="text-muted text-sm italic mb-5">{pub.authors}</p>
                <div className="flex flex-wrap gap-5">
                  {pub.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-ink transition-colors duration-300"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
