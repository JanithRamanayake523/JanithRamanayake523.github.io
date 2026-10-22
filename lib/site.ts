// Central place for identity, links, and reusable content
// ------------------------------------------------------------------
// NOTE: entries marked [DUMMY] are placeholders — edit them here and
// the whole site updates.

export const site = {
  name: 'Janith Ramanayake',
  firstName: 'Janith',
  // Shown under the name in the header area
  headline: 'Research Engineer & MSc Student · University of Moratuwa',
  description:
    'I work on machine learning and statistics — unlocking patterns in signals, images, and language.',
  url: 'https://janithramanayake523.github.io',
  email: 'janithramanayake523@gmail.com',
  office: [
    'Room 311, Department of Statistics',
    'University of Colombo',
    'Sri Lanka',
  ],
  cvUrl: '/assets/cv.pdf',
  photo: '/assets/Janith.png',
  links: {
    github: 'https://github.com/JanithRamanayake523',
    linkedin: 'https://www.linkedin.com/in/janithramanayake523',
    researchgate:
      'https://www.researchgate.net/profile/Janith-Ramanayake?ev=hdr_xprf',
    scholar: '#', // [DUMMY] — add Google Scholar URL
  },
}

// ---- News / Updates (newest first; the 5 most recent are shown on the
// home page, everything is on /news) ----
// `date` is 'YYYY/MM' (or just 'YYYY' when the month is unknown).
// `title` is the one-line headline; `text` is the full sentence shown on /news.
export type NewsType = 'Role' | 'Research' | 'Talk' | 'Education' | 'Achievement'

export interface NewsItem {
  date: string
  type: NewsType
  title: string
  text: string
}

export const news: NewsItem[] = [
  {
    date: '2026/07',
    type: 'Role',
    title: 'Joined University of Moratuwa as Research Engineer',
    text: 'I joined the Department of Computer Science & Engineering at the University of Moratuwa as a Research Engineer. My work there is on the socio-cultural alignment of large language models for Sinhala.',
  },
  {
    date: '2026/06',
    type: 'Education',
    title: 'Started MSc (by Research) at University of Moratuwa',
    text: 'Started my MSc (by Research) in Computer Science & Engineering at Moratuwa. My thesis is on the same topic, the socio-cultural alignment of LLMs for Sinhala.',
  },
  {
    date: '2026/06',
    type: 'Role',
    title: 'Started part-time Research Assistant role at University of Peradeniya',
    text: 'I also started a part-time Research Assistant role at the University of Peradeniya, where I’m looking at how gamification can improve cybersecurity awareness.',
  },
  {
    date: '2026/06',
    type: 'Education',
    title: 'Completed Certificate Programme in Quantum Computing with Honours',
    text: 'It was a great experience, and I finished with Honours. I started from the fundamentals of quantum computing and went all the way to advanced topics like quantum annealing and quantum ML. The best part was getting hands-on experience with Sri Lanka’s first and only quantum computer.',
  },
  {
    date: '2026',
    type: 'Research',
    title: 'Two conference papers accepted at ICTer 2026 and SICASH 2026',
    text: 'Two of my papers got accepted. One is on quantum mutual information for causal feature selection (ICTer 2026), and the other is on signal-to-image transformation pipelines for sleep stage classification (SICASH 2026).', // month unknown
  },
  {
    date: '2026/02',
    type: 'Education',
    title: 'Started Certificate Programme in Quantum Computing at University of Colombo',
    text: 'I started the Certificate Programme in Quantum Computing at the Center for Mathematical Modeling, University of Colombo. Really excited to explore a completely new area of science.',
  },
  {
    date: '2026/01',
    type: 'Research',
    title: 'Joint research on polymer properties accepted at RISTCon 2026',
    text: 'I worked on this with 3 chemistry researchers and 1 mathematics researcher, and it was a great experience to apply ML in a completely different domain. Our work on predicting the thermophysical properties of polymers was accepted at the Ruhuna International Science and Technology Conference (RISTCon 2026).',
  },
  {
    date: '2026/01',
    type: 'Role',
    title: 'Appointed as Visiting Lecturer for the BSc (External) in Applied Data Analytics',
    text: 'I got appointed as a Visiting Lecturer for the BSc (External) in Applied Data Analytics degree at the Department of Statistics, University of Colombo. I will be conducting the lectures for the module DA 2002 - Operating Systems.',
  },
  {
    date: '2025/11',
    type: 'Achievement',
    title: 'Achieved IELTS Academic Band 7.0',
    text: 'Got an overall band 7.0 in IELTS Academic, and I only had one month to prepare for it. Really happy with how it turned out.',
  },
  {
    date: '2025/11',
    type: 'Research',
    title: 'Presented at my first conference, ICDS 2025',
    text: 'This was my very first conference, and I also got my first abstract published there. I presented part of my undergraduate research on representation separability of signal-to-image transformations for sleep stage classification. A big moment for me, and I learned a lot from the experience.',
  },
  {
    date: '2025/10',
    type: 'Talk',
    title: 'Delivered a one-day workshop on building data-driven applications',
    text: 'I conducted a one-day workshop on how to develop and manage a data-driven application end to end with modern frameworks. It was great to have both undergraduate students and industry professionals in the room.',
  },
  {
    date: '2025/09',
    type: 'Talk',
    title: 'Delivered an R programming workshop for final year students',
    text: 'I ran a workshop for final year undergraduates of the BSc (Hons) in Science and Management degree, showing them how to use the R programming language in their research projects.',
  },
  {
    date: '2025/08',
    type: 'Education',
    title: 'Graduation ceremony at the University of Colombo',
    text: 'The long-awaited day finally came! Walking across the stage to receive my BSc (Hons) in Data Science made all those years of dedication and hard work feel worth it. So proud of this moment, and so thankful to everyone who stood by me on the way here.',
  },
  {
    date: '2025/08',
    type: 'Achievement',
    title: 'Awarded the Dean’s Award for Academic Excellence',
    text: 'I received the Dean’s Award for Academic Excellence, given to students who keep a GPA above 3.7 in all 8 semesters. Only 40 students got it out of a cohort of 550+. It means a lot, because it rewards staying consistent through the whole degree. Thank you to my lecturers and friends for the support.',
  },
  {
    date: '2025/08',
    type: 'Role',
    title: 'Promoted to Temporary Assistant Lecturer',
    text: 'A few months into teaching at the department, I was promoted from Temporary Instructor to Temporary Assistant Lecturer, which comes with a bigger role in teaching and supporting students.',
  },
  {
    date: '2025/05',
    type: 'Role',
    title: 'Joined the Department of Statistics as a Temporary Instructor',
    text: 'This is where my academic journey starts. I’m very happy to be back in the same department where I studied, and I’m looking forward to giving back and learning alongside the next generation of students.',
  },
  {
    date: '2025/05',
    type: 'Education',
    title: 'Officially graduated with BSc (Hons) in Data Science, First Class',
    text: 'It’s official, I have graduated with a First Class! I’m grateful to everyone who helped me along the way, and to the people of Sri Lanka for the free education that made all this possible.',
  },
  {
    date: '2025/04',
    type: 'Role',
    title: 'Completed internship at the Central Bank of Sri Lanka',
    text: 'My internship at the Statistics Department of the Central Bank of Sri Lanka is over. I was an Intern Research Scientist in Data Science and mainly worked on two research projects, one on a consumer confidence index and the other on financial sentiment modeling.',
  },
  {
    date: '2025/03',
    type: 'Research',
    title: 'Successfully defended my undergraduate thesis',
    text: 'I defended my undergraduate thesis on sleep stage classification with vision transformers. Big thanks to my supervisor Dr. Chandima Arachchige, the evaluators and my friends for their support.',
  },
  {
    date: '2024/11',
    type: 'Role',
    title: 'Started internship at the Central Bank of Sri Lanka',
    text: 'I started my internship at the Statistics Department of the Central Bank of Sri Lanka as an Intern Research Scientist in Data Science. It was a mandatory part of my degree.',
  },
  {
    date: '2024/07',
    type: 'Achievement',
    title: 'Won Most Popular Project at IntelliHack NextGen Hackathon',
    text: 'My team Rapid_Vortex took part in IntelliHack NextGen, Sri Lanka’s oldest AI/ML Hackathon, organized by the IEEE Computer Society Student Chapter at UCSC. We built HappyHire, a generative AI recruitment management agent, and it won the Most Popular Project award.',
  },
  {
    date: '2024/06',
    type: 'Achievement',
    title: 'Ranked 3rd at Predicta ML Hackathon',
    text: 'Team codeX took part in Predicta, a Kaggle-based ML Hackathon organized by the IEEE Student Branch at the University of Peradeniya, and we finished 3rd on the private leaderboard.',
  },
  {
    date: '2023/12',
    type: 'Achievement',
    title: 'Selected for the final round of Mini Hackathon',
    text: 'Team codeX took part in Mini Hackathon, an ML Hackathon organized by the Stat Circle at the University of Colombo, and we made it to the final round.',
  },
  {
    date: '2023/04',
    type: 'Education',
    title: 'Selected for the competitive BSc (Hons) in Data Science programme',
    text: 'I got selected for the BSc (Hons) in Data Science programme at the Department of Statistics, University of Colombo, which is very competitive. Only 15 students are picked out of a cohort of 350+, based on how they do in applied mathematics, statistics and computer science over the first two years.',
  },
  {
    date: '2021/04',
    type: 'Education',
    title: 'Started BSc in Physical Science at University of Colombo',
    text: 'My university journey began with the BSc in Physical Science at the Faculty of Science, University of Colombo, the top-ranked university in Sri Lanka and home to the country’s top science faculty.',
  },
]

export const researchInterests = [
  'Computational Statistics',
  'Causal Inference',
  'Deep Learning',
  'LLMs',
  'Agentic Systems',
]

export interface HistoryEntry {
  title: string
  place: string
  period: string
  /** One short line of context (thesis, GPA, what the role involves) */
  detail?: string
  /** Subject grades, shown as chips */
  results?: { subject: string; grade: string }[]
  /** Logo image path; if omitted, `monogram` initials are shown instead */
  logo?: string
  monogram?: string
}

export const education: HistoryEntry[] = [
  {
    title: 'MSc (By Research) in Computer Science & Engineering',
    place: 'University of Moratuwa',
    period: 'Jun 2026 - Jun 2027 (expected)',
    detail: 'Thesis: Socio-Cultural Alignment of Large Language Models for Sinhala',
    logo: '/assets/uom.png',
  },
  {
    title: 'Certificate in Quantum Computing',
    place: 'University of Colombo',
    period: 'Jan 2026 - Jun 2026',
    detail: 'Honours · Qiskit, quantum algorithms, QUBO and quantum annealing',
    logo: '/assets/uoc.png',
  },
  {
    title: 'BSc (Hons) in Data Science',
    place: 'University of Colombo',
    period: 'Apr 2021 - Apr 2025',
    detail: 'First Class, GPA 3.87/4.00 · Thesis on sleep stage classification with vision transformers',
    logo: '/assets/uoc.png',
  },
  {
    title: 'GCE Advanced Level, Physical Science',
    place: 'Mahinda College, Galle',
    period: 'Aug 2019',
    detail: 'Top 6% Nationally',
    results: [
      { subject: 'Combined Mathematics', grade: 'B' },
      { subject: 'Physics', grade: 'B' },
      { subject: 'Chemistry', grade: 'B' },
    ],
    logo: '/assets/mahinda.png',
  },
]

export const researchExperience: HistoryEntry[] = [
  {
    title: 'Research Engineer',
    place: 'University of Moratuwa',
    period: 'Jul 2026 - Present',
    detail: 'Socio-cultural alignment of large language models for Sinhala',
    logo: '/assets/uom.png',
  },
  {
    title: 'Research Assistant (Part-Time)',
    place: 'University of Peradeniya',
    period: 'Jun 2026 - Present',
    detail: 'Improving cybersecurity awareness through gamification',
    logo: '/assets/uop.webp',
  },
  {
    title: 'Intern Data Scientist',
    place: 'Central Bank of Sri Lanka',
    period: 'Nov 2024 - Apr 2025',
    detail: 'Economic indicators from alternative data and machine learning',
    logo: '/assets/cbsl.png',
  },
]

export const teachingExperience: HistoryEntry[] = [
  {
    title: 'Visiting Lecturer',
    place: 'University of Colombo',
    period: 'Jan 2026 - Jun 2026',
    detail: 'DA 2002 Operating Systems, BSc (External) in Applied Data Analytics',
    logo: '/assets/uoc.png',
  },
  {
    title: 'Temporary Assistant Lecturer',
    place: 'University of Colombo',
    period: 'May 2025 - Jun 2026',
    detail: 'Statistical computing, probability, exploratory data analysis and statistical inference',
    logo: '/assets/uoc.png',
  },
]

// BSc (Hons) in Data Science: credits and GPA by subject area
export const degreeBreakdown = [
  // Applied (18 credits, 4.00) + Pure (14 credits, 3.81), credit-weighted
  { subject: 'Mathematics', credits: 32, gpa: 3.92 },
  { subject: 'Statistics', credits: 35, gpa: 3.94 },
  { subject: 'Computer Science', credits: 57, gpa: 3.8 },
]

// ---- Publications (newest first) ----
export type PublicationKind = 'Conference Paper' | 'Presentation' | 'Abstract'

export interface Publication {
  title: string
  authors?: string
  venue: string
  year: string
  /** Short month, e.g. 'Oct'; shown beside the year when known */
  month?: string
  kind: PublicationKind
  /** e.g. 'Accepted' */
  status?: string
  /** Abstract text, shown on the reader sheet when present */
  abstract?: string
  topics: string[]
  /** Code repository; the button shows as 'coming soon' until set */
  github?: string
  /** Official publication page; the button shows as 'coming soon' until set */
  publicationUrl?: string
}

export const publications: Publication[] = [
  {
    title:
      'Quantum Mutual Information for Causal Feature Selection: An Empirical Study of Feature Recovery and Treatment Effect Estimation',
    authors: 'Janith R.R.H. Ramanayake',
    venue: 'International Conference on Advances in ICT for Emerging Regions (ICTer 2026)',
    year: '2026',
    month: 'Nov',
    kind: 'Conference Paper',
    status: 'Accepted',
    abstract:
      'We investigate whether Quantum Mutual Information (QMI), defined through the von Neumann entropy of angle-encoded density matrices, provides a useful lens on causal feature selection. Using six synthetic data-generating processes (DGPs) and an IHDP-inspired synthetic benchmark, we compare QMI-based confounder selection with information-theoretic, kernel (HSIC), regularization and tree-based selectors, and ask how well feature recovery predicts downstream average treatment effect (ATE) estimation. Our central finding is that confounder-recovery F1 is only a weak predictor of ATE error: it explains about 4% of the variance across DGPs and 8–13% on identical simulation draws, and within draws the association vanishes once n ≥ 500. On the IHDP-inspired benchmark, methods with F1 between 0.51 and 1.00, including QMI-CFS, are statistically tied in ATE error. We argue that this weak coupling is expected from adjustment-set theory and recommend evaluating causal feature selectors jointly on recovery and estimation. As a selector, QMI is competitive with k-NN mutual information but is outperformed in recovery by tree-based wrappers on four of six DGPs. We find no evidence of quantum advantage: QMI is best understood as a bandwidth-free, fixed-kernel dependency estimator.',
    topics: [
      'Quantum Mutual Information',
      'Causal Inference',
      'Feature Selection',
      'Treatment Effect Estimation',
      'Quantum-Inspired Methods',
    ],
  },
  {
    title:
      'Systematic Evaluation of Signal-to-Image Transformation Pipelines for Vision Transformer-based Sleep Stage Classification',
    authors: 'Janith R.R.H. Ramanayake, Chandima N.P.G. Arachchige',
    venue: 'SLIIT International Conference on Advancements in Sciences and Humanities (SICASH 2026)',
    year: '2026',
    month: 'Oct',
    kind: 'Conference Paper',
    status: 'Accepted',
    abstract:
      'Sleep stage classification is a critical prerequisite for diagnosing sleep disorders and assessing sleep quality. While Vision Transformers (ViTs) have demonstrated remarkable success in image recognition, existing ViT-based approaches to polysomnography (PSG) sleep staging rely mainly on spectrogram or raw-signal inputs, and the optimal transformation of one-dimensional physiological signals into image representations suitable for ViT processing has not been systematically investigated. This paper presents a comprehensive evaluation of four image transformation techniques - Gramian Angular Summation Field (GASF), Gramian Angular Difference Field (GADF), Markov Transition Field (MTF), and spectrogram - for ViT-based sleep stage classification using the CAP Sleep Database (80 recordings, 80,667 epochs) with subject-wise 5-fold cross-validation. Experimental results demonstrate that GASF achieves the highest classification accuracy at 78.5% among the four transformations. Furthermore, Discrete Wavelet Transform (DWT) downsampling at 128 Hz optimizes performance, yielding 80.3% accuracy. Fine-tuning an ImageNet pre-trained ViT-B/16 model on balanced GASF representations (class balance obtained through DCGAN-based synthetic augmentation) achieves 86.2% accuracy (macro-F1 0.853), representing an improvement of 11.4 percentage points over training from scratch and 10.0 percentage points over a ResNet-50 baseline. These results indicate that GASF encoding with DWT resampling to 128 Hz is an effective preprocessing pipeline for ViT-based sleep stage classification, and that transfer learning from natural image pre-training is highly effective for PSG-derived representations.',
    topics: [
      'Sleep Stage Classification',
      'Vision Transformer',
      'Gramian Angular Field',
      'Signal to Image Transformation',
      'Transfer Learning',
    ],
  },
  {
    title:
      'Machine Learning Framework for Predicting Thermophysical Properties of Polymers from SMILES Representations',
    authors:
      'Sundaresan Abilash, Anton S. Perera, Janith R.R.H. Ramanayake, Jaliya Amarathunga, Kaveen T Nagodawithana',
    venue: 'Ruhuna International Science and Technology Conference (RISTCon 2026)',
    year: '2026',
    month: 'Jan',
    kind: 'Abstract',
    topics: [
      'Polymer Informatics',
      'Machine Learning',
      'Graph Neural Networks',
      'Molecular Descriptors',
      'Thermophysical Properties',
    ],
  },
  {
    title:
      'Representation Separability of Signal-to-Image Transformations for Sleep Stage Classification Using Pretrained Vision Transformers',
    authors: 'Janith R.R.H. Ramanayake, Chandima N.P.G. Arachchige',
    venue: 'International Conference in Data Science (ICDS 2025)',
    year: '2025',
    month: 'Nov',
    kind: 'Abstract',
    status: 'Presented',
    topics: [
      'Sleep Stage Classification',
      'Vision Transformers',
      'Signal-to-Image Transformation',
      'Deep Learning',
    ],
    publicationUrl: 'https://science.cmb.ac.lk/icds/icds-2025/proceedings/',
  },
]
