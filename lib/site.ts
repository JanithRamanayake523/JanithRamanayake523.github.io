// Central place for identity, links, and reusable content
// ------------------------------------------------------------------
// NOTE: entries marked [DUMMY] are placeholders — edit them here and
// the whole site updates.

export const site = {
  name: 'Janith Ramanayake',
  firstName: 'Janith',
  // Shown under the name in the header area
  headline: 'Master’s Student in Data Science · University of Colombo', // [DUMMY] — confirm degree/university
  description:
    'I work on machine learning and statistics — unlocking patterns in signals, images, and language.',
  email: 'janithramanayake523@gmail.com',
  office: [
    'Room 311, Department of Statistics',
    'University of Colombo',
    'Sri Lanka',
  ],
  cvUrl: '/assets/cv.pdf',
  photo: '/assets/Janith.png',
  links: {
    github: 'https://github.com/JanithRamanayake',
    linkedin: 'https://www.linkedin.com/in/janithramanayake523',
    researchgate:
      'https://www.researchgate.net/profile/Janith-Ramanayake?ev=hdr_xprf',
    scholar: '#', // [DUMMY] — add Google Scholar URL
  },
}

// ---- News / Updates (newest first; the 5 most recent are shown by
// default, the rest appear under "Older news") ----
export const news = [
  {
    date: '2026/01',
    text: 'Conference abstract on predicting thermophysical properties of polymers accepted at the Ruhuna International Science and Technology Conference (RISTCON 2026).',
  },
  {
    date: '2025/11',
    text: 'Achieved IELTS Academic Overall Band 7.0 (Listening 8.0).',
  },
  {
    date: '2025/11',
    text: 'Presented our paper on representation separability of signal-to-image transformations for sleep stage classification at the International Conference in Data Science (ICDS 2025).',
  },
  {
    date: '2025/05',
    text: 'Started as a Graduate Teaching Assistant at the Department of Statistics, University of Colombo.',
  },
  {
    date: '2025/04',
    text: 'Graduated with a BSc (Hons) in Data Science from the University of Colombo.',
  },
  // ---- Older news ----
  {
    date: '2025/03',
    text: 'Defended my final-year research project on enhancing sleep stage classification with vision transformers.', // [DUMMY] — adjust date/details
  },
  {
    date: '2024/11',
    text: 'Built HappyHire, a generative AI recruitment management agent, with team Rapid Vortex at the IntelliHack competition.',
  },
  {
    date: '2024/06',
    text: 'Launched CrediDecode, an interactive credit score classification and analysis platform.', // [DUMMY] — adjust date
  },
  {
    date: '2023/09',
    text: 'Started working on cross-lingual sentiment modeling for financial texts in English, Sinhala, and Tamil.', // [DUMMY] — adjust date
  },
  {
    date: '2021/09',
    text: 'Completed my research internship as a Data Scientist at the Central Bank of Sri Lanka.',
  },
  {
    date: '2021/04',
    text: 'Started my BSc (Hons) in Data Science at the University of Colombo.',
  },
]

// ---- At a Glance ----
export const glance = [
  {
    label: 'Current Role',
    value: 'Graduate Teaching Assistant, Dept. of Statistics',
  },
  { label: 'Institution', value: 'University of Colombo' },
  {
    label: 'Main Areas',
    value: ['Deep Learning', 'Signal Processing', 'Natural Language Processing'],
  },
  {
    label: 'Previously',
    value: 'Research Intern, Central Bank of Sri Lanka',
  },
]

export const researchInterests = [
  'Machine Learning',
  'Deep Learning',
  'Statistical Modeling',
  'Bayesian Methods',
  'Computer Vision',
  'Natural Language Processing',
]

export interface HistoryEntry {
  title: string
  place: string
  period: string
  /** Logo image path; if omitted, `monogram` initials are shown instead */
  logo?: string
  monogram?: string
}

export const education: HistoryEntry[] = [
  {
    title: 'MSc (By Research) in Data Science',
    place: 'University of Moratuwa',
    period: 'Aug 2026 - Present',
    logo: '/assets/uom.png',
  },
  {
    title: 'BSc (Hons) in Data Science',
    place: 'University of Colombo',
    period: 'Apr 2021 - Apr 2025',
    logo: '/assets/uoc.png',
  },
  {
    title: 'Diploma in Software Engineering',
    place: 'IJSE',
    period: 'Jan 2020 - Sep 2021',
    logo: '/assets/ijse.png',
  },
  {
    title: 'GCE Advanced Level',
    place: 'Mahinda College Galle',
    period: 'Feb 2011 - Aug 2019',
    logo: '/assets/mahinda.png',
  },
]

export const experience: HistoryEntry[] = [
  {
    title: 'Research Assistant',
    place: 'University of Moratuwa',
    period: 'Jul 2026 - Present',
    logo: '/assets/uom.png',
  },
  {
    title: 'Research Assistant (Part-Time)',
    place: 'University of Peradeniya',
    period: 'Jun 2026 - Present',
    logo: '/assets/uop.webp',
  },
  {
    title: 'Temporary Assistant Lecturer',
    place: 'University of Colombo',
    period: 'May 2025 - Jun 2026',
    logo: '/assets/uoc.png',
  },
  {
    title: 'Intern Data Scientist (Research)',
    place: 'Central Bank of Sri Lanka',
    period: 'Jan 2020 - Sep 2021',
    logo: '/assets/cbsl.png',
  },
]
