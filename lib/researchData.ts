// Centralized research project data
export interface ResearchProject {
  title: string;
  description: string;
  /** Thumbnail/banner image path; a placeholder is shown when omitted */
  image?: string;
  tags: string[];
  status: 'Ongoing' | 'Completed';
  slug: string;
  /** Where the work is/was carried out */
  affiliation?: string;
  /** e.g. 'Jun 2024 - Mar 2025' */
  period?: string;
}

export const researchProjects: ResearchProject[] = [
  {
    title: 'Socio-Cultural Alignment of Large Language Models for Sinhala',
    description:
      'Investigating how well large language models capture Sri Lankan socio-cultural context when understanding and generating Sinhala, and developing evaluation approaches and alignment techniques to make LLM outputs culturally grounded for a low-resource language community.',
    tags: ['LLMs', 'Low-Resource NLP', 'Sinhala'],
    status: 'Ongoing',
    slug: 'sinhala-llm-alignment',
    affiliation: 'University of Moratuwa',
    period: 'Jul 2026 - Present',
  },
  {
    title: 'Improving Cybersecurity Awareness through Gamification',
    description:
      'Studying how gamification techniques can raise cybersecurity awareness — designing game-based learning interventions and evaluating their impact on users’ security knowledge and everyday behavior.',
    tags: ['Gamification', 'Cybersecurity'],
    status: 'Ongoing',
    slug: 'cybersecurity-awareness-gamification',
    affiliation: 'University of Peradeniya',
    period: 'Jun 2026 - Present',
  },
  {
    title: 'Physics-Informed Spatial Deep Learning for Dengue Prediction',
    description:
      'Developing a physics-informed spatial deep learning framework that integrates satellite-derived environmental data, hotspot-guided spatial feature engineering, and Ross–Macdonald disease transmission dynamics for regional dengue prediction across Sri Lanka.',
    tags: ['Physics-Informed ML', 'Spatial Modeling', 'Deep Learning'],
    status: 'Ongoing',
    slug: 'dengue-prediction-spatial-dl',
    affiliation: 'Personal Project',
  },
  {
    title: 'BiCQNet: Bidirectional Classical–Quantum Neural Network for Image Classification',
    description:
      'Developing a hybrid classical–quantum deep learning architecture that enables bidirectional interaction between CNN feature representations and parameterized quantum circuits through multi-stage quantum–classical feature fusion for enhanced image classification.',
    tags: ['Quantum ML', 'Deep Learning', 'Qiskit'],
    status: 'Ongoing',
    slug: 'bicqnet-quantum-classical',
    affiliation: 'Personal Project',
  },
  {
    title: 'Enhancing Sleep Stage Classification with Vision Transformers',
    description:
      'Investigated signal-to-image transformation techniques (spectrograms, Gramian angular fields) to convert EEG signals into visual representations for sleep stage classification, applied GAN-based synthetic image generation to address class imbalance and improve subject-to-subject invariance, and benchmarked fine-tuned pre-trained Vision Transformer models (ViT-B/16, ViT-B/32, DeiT-B, Swin-B, PVT-Small) against conventional deep learning approaches.',
    image: '/assets/research/eeg.jpg',
    tags: ['EEG Processing', 'Vision Transformers'],
    status: 'Completed',
    slug: 'sleep-stage-vit',
    affiliation: 'Undergraduate Thesis, University of Colombo',
    period: 'Jun 2024 - Mar 2025',
  },
  {
    title: 'Measuring Consumer Confidence in Sri Lanka with Google Search Trends',
    description:
      'Developed a real-time Consumer Confidence Index for Sri Lanka by collecting and engineering high-frequency Google Search Trends features related to economic sentiment, consumption, and employment, training deep learning models (LSTM, GRU, and hybrid architectures), and validating index trends against historical economic indicators and major socio-economic events.',
    image: '/assets/research/cci.jpg',
    tags: ['Economics', 'Deep Learning'],
    status: 'Completed',
    slug: 'consumer-confidence-search-trends',
    affiliation: 'Central Bank of Sri Lanka',
    period: 'Jan 2025 - Mar 2025',
  },
  {
    title: 'Cross-Lingual Sentiment Modeling for Financial Texts',
    description:
      'Curated and annotated a trilingual (English, Sinhala, Tamil) financial text dataset from news articles, press releases, and social media, fine-tuned the Llama 3.2 1B large language model for domain-adapted sentiment classification, and addressed low-resource challenges in Sinhala and Tamil through translation-based augmentation, evaluating performance across languages using precision, recall, and F1-score.',
    image: '/assets/research/sentiment.webp',
    tags: ['NLP', 'LLM Fine-Tuning'],
    status: 'Completed',
    slug: 'cross-lingual-financial-sentiment',
    affiliation: 'Central Bank of Sri Lanka',
    period: 'Nov 2024 - Jan 2025',
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
