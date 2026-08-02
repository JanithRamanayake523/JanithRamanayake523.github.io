import Image from 'next/image';

interface ResearchProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: 'Ongoing' | 'Completed';
}

const projects: ResearchProject[] = [
  {
    title: 'GAN-Powered Raman Spectroscopy: Synthetic Spectra for Low-Sample Analysis',
    description:
      'Generative adversarial models to synthesize realistic Raman spectra for data augmentation in low-sample environments, with peak-aware architectures that preserve spectral signatures for chemical and biomedical classification.',
    image: '/assets/research/raman.jpg',
    tags: ['GAN', 'Chemometrics', 'Synthetic Data'],
    status: 'Ongoing',
  },
  {
    title: 'Image-Based Embedding of EEG Signals for Neural Pattern Classification',
    description:
      'Techniques to extract informative embeddings from EEG signals represented as images, capturing discriminative neural patterns to improve classification and feature separability.',
    image: '/assets/research/eeg.jpg',
    tags: ['EEG Processing', 'Transformers'],
    status: 'Ongoing',
  },
  {
    title: 'Enhancing Sleep Stage Classification with Vision Transformers',
    description:
      'Vision transformer models for sleep stage classification by converting EEG signals into images — evaluating image representations, GAN-based augmentation, and fine-tuned ViT architectures.',
    image: '/assets/hero.jpg',
    tags: ['EEG Processing', 'Vision Transformers'],
    status: 'Completed',
  },
  {
    title: 'Measuring Consumer Confidence in Sri Lanka with Google Search Trends',
    description:
      'A real-time Consumer Confidence Index for Sri Lanka built from Google Search Trends and deep learning, replacing discontinued survey-based indices and validated against key economic indicators.',
    image: '/assets/research/cci.jpg',
    tags: ['Economics', 'Deep Learning'],
    status: 'Completed',
  },
  {
    title: 'Cross-Lingual Sentiment Modeling for Financial Texts',
    description:
      'A domain-adapted sentiment analysis model for trilingual (English, Sinhala, Tamil) financial content in Sri Lanka, combining curated data, LLM fine-tuning, and translation strategies for low-resource languages.',
    image: '/assets/research/sentiment.webp',
    tags: ['NLP', 'LLM'],
    status: 'Completed',
  },
];

export default function Research() {
  return (
    <section id="research" className="py-14">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <h2 className="section-title">Research</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.title} className="card p-5 flex flex-col sm:flex-row gap-5">
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
                  <h3 className="font-medium text-ink leading-snug">{project.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`tag ${
                      project.status === 'Ongoing' ? '' : 'opacity-70'
                    }`}
                  >
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
          ))}
        </div>
      </div>
    </section>
  );
}
