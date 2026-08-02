import type { Metadata } from 'next'
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google'
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
  title: 'Janith Ramanayake',
  description:
    'Master\u2019s student and researcher working on machine learning, deep learning, and statistical modeling. Graduate Teaching Assistant at the University of Colombo.',
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
      'Master\u2019s student and researcher in machine learning and statistics at the University of Colombo.',
    type: 'website',
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
      <body>{children}</body>
    </html>
  )
}
