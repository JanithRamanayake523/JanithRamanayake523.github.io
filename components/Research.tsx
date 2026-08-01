import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

interface ResearchProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const currentResearch: ResearchProject[] = [
  {
    title: 'GAN-Powered Raman Spectroscopy: Synthetic Spectra for Low-Sample Analysis',
    description:
      'Developed generative adversarial models to synthesize realistic Raman spectra for data augmentation in low-sample environments. Designed peak-aware GAN architectures to preserve spectral signatures, improved dataset balance, and enhanced machine learning performance for chemical and biomedical classification tasks.',
    image: '/assets/research/raman.jpg',
    tags: ['GAN', 'Chemometrics', 'Synthetic Data Generation'],
  },
  {
    title: 'Image-Based Embedding of EEG Signals for Neural Pattern Classification',
    description:
      'Developed techniques to extract informative embeddings from EEG signals represented as images. Focused on capturing discriminative neural patterns to improve classification performance and enhance feature separability for downstream analysis.',
    image: '/assets/research/eeg.jpg',
    tags: ['EEG Signal Processing', 'Transformers'],
  },
];

const completedResearch: ResearchProject[] = [
  {
    title:
      'Enhancing Sleep Stage Classification with Vision Transformers: A Study on Image Transformations, Data Augmentation, and Model Optimization',
    description:
      'Investigated vision transformer models for sleep stage classification by converting EEG signals into images. Evaluated multiple image representations, applied GAN-based augmentation to handle class imbalance, and fine-tuned state-of-the-art ViT architectures for performance benchmarking.',
    image: '/assets/hero.jpg',
    tags: ['EEG Signal Processing', 'Vision Transformers'],
  },
  {
    title:
      'A Data Driven Approach to Measuring Consumer Confidence in Sri Lanka with Google Search Trends and Deep Learning',
    description:
      'Developed a real-time Consumer Confidence Index for Sri Lanka using Google Search Trends and deep learning models. This data-driven approach replaces discontinued survey-based indices and validates consumer sentiment against key economic indicators and national events.',
    image: '/assets/research/cci.jpg',
    tags: ['Economics', 'Deep Learning'],
  },
  {
    title: 'Cross-Lingual Sentiment Modeling for Financial Texts in English, Sinhala, and Tamil',
    description:
      'Built a domain-adapted sentiment analysis model for trilingual financial content in Sri Lanka. The project combines curated data, LLM fine-tuning, and translation strategies to improve sentiment classification in low-resource languages like Sinhala and Tamil.',
    image: '/assets/research/sentiment.webp',
    tags: ['NLP', 'LLM'],
  },
];

function ResearchCard({
  project,
  index,
  status,
}: {
  project: ResearchProject;
  index: number;
  status: 'ongoing' | 'completed';
}) {
  return (
    <Reveal delay={(index % 3) * 100} className="h-full">
      <article className="card overflow-hidden h-full flex flex-col group">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-transparent to-transparent" />
          <span
            className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono backdrop-blur-md border ${
              status === 'ongoing'
                ? 'bg-emerald-400/10 border-emerald-400/30 text-emerald-300'
                : 'bg-accent2/10 border-accent2/30 text-indigo-300'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                status === 'ongoing' ? 'bg-emerald-400 status-dot' : 'bg-indigo-400'
              }`}
            />
            {status === 'ongoing' ? 'Ongoing' : 'Completed'}
          </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-lg font-semibold leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Research() {
  return (
    <section id="research" className="relative py-28 bg-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 · Research"
          title="What I'm exploring"
          highlight="exploring"
          description="Research at the intersection of deep learning, signal processing, and statistical modeling."
        />

        <div className="grid md:grid-cols-2 gap-7 mb-16">
          {currentResearch.map((project, i) => (
            <ResearchCard key={project.title} project={project} index={i} status="ongoing" />
          ))}
        </div>

        <Reveal className="flex items-center gap-4 mb-10">
          <span className="h-px flex-1 bg-line" />
          <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-faint">
            Completed Work
          </h3>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {completedResearch.map((project, i) => (
            <ResearchCard key={project.title} project={project} index={i} status="completed" />
          ))}
        </div>
      </div>
    </section>
  );
}
