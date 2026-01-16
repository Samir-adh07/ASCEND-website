import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'mjs0jfmc',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Enable CDN for faster queries
  perspective: 'published', // Only fetch published content
})
// line space
const builder = createImageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}

// GROQ queries
export const BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  readTime,
  publishedAt,
  image {
    asset-> {
      _id,
      url
    },
    alt
  }
}`

export const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  category,
  readTime,
  publishedAt,
  image {
    asset-> {
      _id,
      url
    },
    alt
  },
  seo {
    metaDescription,
    keywords
  }
}`