// Centralized research project data
export interface ResearchProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: 'Ongoing' | 'Completed';
  slug: string;
}

export const researchProjects: ResearchProject[] = [
  {
    title: 'GAN-Powered Raman Spectroscopy: Synthetic Spectra for Low-Sample Analysis',
    description:
      'Generative adversarial models to synthesize realistic Raman spectra for data augmentation in low-sample environments, with peak-aware architectures that preserve spectral signatures for chemical and biomedical classification.',
    image: '/assets/research/raman.jpg',
    tags: ['GAN', 'Chemometrics', 'Synthetic Data'],
    status: 'Ongoing',
    slug: 'gan-raman-spectroscopy',
  },
  {
    title: 'Image-Based Embedding of EEG Signals for Neural Pattern Classification',
    description:
      'Techniques to extract informative embeddings from EEG signals represented as images, capturing discriminative neural patterns to improve classification and feature separability.',
    image: '/assets/research/eeg.jpg',
    tags: ['EEG Processing', 'Transformers'],
    status: 'Ongoing',
    slug: 'eeg-image-embeddings',
  },
  {
    title: 'Enhancing Sleep Stage Classification with Vision Transformers',
    description:
      'Vision transformer models for sleep stage classification by converting EEG signals into images — evaluating image representations, GAN-based augmentation, and fine-tuned ViT architectures.',
    image: '/assets/research/eeg.jpg',
    tags: ['EEG Processing', 'Vision Transformers'],
    status: 'Completed',
    slug: 'sleep-stage-vit',
  },
  {
    title: 'Measuring Consumer Confidence in Sri Lanka with Google Search Trends',
    description:
      'A real-time Consumer Confidence Index for Sri Lanka built from Google Search Trends and deep learning, replacing discontinued survey-based indices and validated against key economic indicators.',
    image: '/assets/research/cci.jpg',
    tags: ['Economics', 'Deep Learning'],
    status: 'Completed',
    slug: 'consumer-confidence-search-trends',
  },
  {
    title: 'Cross-Lingual Sentiment Modeling for Financial Texts',
    description:
      'A domain-adapted sentiment analysis model for trilingual (English, Sinhala, Tamil) financial content in Sri Lanka, combining curated data, LLM fine-tuning, and translation strategies for low-resource languages.',
    image: '/assets/research/sentiment.webp',
    tags: ['NLP', 'LLM'],
    status: 'Completed',
    slug: 'cross-lingual-financial-sentiment',
  },
];

// Get latest N research projects
export function getLatestProjects(count: number = 3): ResearchProject[] {
  return researchProjects.slice(0, count);
}

// Get research project by slug
export function getProjectBySlug(slug: string): ResearchProject | undefined {
  return researchProjects.find((project) => project.slug === slug);
}

// Get all research project slugs for static generation
export function getAllProjectSlugs(): string[] {
  return researchProjects.map((project) => project.slug);
}
