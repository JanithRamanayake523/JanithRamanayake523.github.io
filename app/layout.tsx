import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Janith Ramanayake — AI & Statistics Researcher',
  description:
    'Deep learning researcher and data science graduate exploring signals, images, and language through AI and statistical reasoning. Graduate Teaching Assistant at the University of Colombo.',
  keywords: [
    'Janith Ramanayake',
    'Deep Learning',
    'Machine Learning',
    'Statistics',
    'Computer Vision',
    'NLP',
    'University of Colombo',
  ],
  openGraph: {
    title: 'Janith Ramanayake — AI & Statistics Researcher',
    description:
      'Deep learning researcher unlocking hidden patterns in signals, images, and language.',
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
