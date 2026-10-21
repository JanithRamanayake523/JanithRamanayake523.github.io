import type { Metadata } from 'next'
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: '/' },
  icons: { icon: '/assets/logo.png' },
  title: 'Janith Ramanayake',
  description:
    'Master\u2019s student and researcher working on machine learning, deep learning, and statistical modeling, with a focus on language models for low-resource languages.',
  keywords: [
    'Janith Ramanayake',
    'Machine Learning',
    'Deep Learning',
    'Statistics',
    'Computer Vision',
    'NLP',
    'University of Colombo',
  ],
  openGraph: {
    title: 'Janith Ramanayake',
    description:
      'Master\u2019s student and researcher in machine learning and statistics at the University of Moratuwa.',
    type: 'website',
    url: site.url,
    images: [{ url: site.photo, width: 896, height: 1195, alt: site.name }],
  },
  twitter: {
    card: 'summary',
    title: 'Janith Ramanayake',
    images: [site.photo],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: site.name,
              url: site.url,
              image: `${site.url}${site.photo}`,
              jobTitle: 'Research Engineer',
              affiliation: { '@type': 'CollegeOrUniversity', name: 'University of Moratuwa' },
              sameAs: [site.links.github, site.links.linkedin, site.links.researchgate],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
