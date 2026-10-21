import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { blogPosts } from '@/lib/blogData'
import { researchProjects } from '@/lib/researchData'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/blog',
    '/news',
    '/research',
    ...blogPosts.filter((p) => p.content).map((p) => `/blog/${p.slug}`),
    ...researchProjects.map((p) => `/research/${p.slug}`),
  ]
  return paths.map((path) => ({ url: `${site.url}${path}` }))
}
