interface Publication {
  title: string;
  authors: string;
  venue: string;
  type: 'Presentation' | 'Abstract';
  links: { label: string; url: string }[];
}

const publications: Publication[] = [
  {
    title:
      'Representation Separability of Signal-to-Image Transformations for Sleep Stage Classification Using Pretrained Vision Transformers',
    authors: 'Janith R.R.H. Ramanayake, Chandima N.P.G. Arachchige',
    venue: 'International Conference in Data Science (ICDS), 2025',
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
    venue: 'Ruhuna International Science and Technology Conference (RISTCON), 2026',
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
    <section id="publications" className="py-14 bg-band">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Publications & Presentations</h2>
        <ol className="space-y-7">
          {publications.map((pub, i) => (
            <li key={pub.title} className="flex gap-4">
              <span className="font-mono text-sm text-faint pt-0.5 shrink-0">[{i + 1}]</span>
              <div>
                <h3 className="font-medium text-ink leading-snug">{pub.title}</h3>
                <p className="text-sm text-muted mt-1">{pub.authors}</p>
                <p className="text-sm mt-1">
                  <em className="text-muted">{pub.venue}</em>{' '}
                  <span className="tag ml-1 align-middle">{pub.type}</span>
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  {pub.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="link-accent text-sm"
                    >
                      [{link.label}]
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
