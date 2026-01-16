import { client } from './sanity'
import { PortableTextBlock } from '@portabletext/react'
import { BLOG_POSTS_QUERY, BLOG_POST_BY_SLUG_QUERY } from './sanity'

export interface SanityBlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: PortableTextBlock[]
  category: "Market Insights" | "M&A Strategy" | "Fundraising" | "Valuation" | "Nepal Business"
  readTime: number
  publishedAt: string
  image: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  seo?: {
    metaDescription?: string
    keywords?: string[]
  }
}

// Legacy interface for backward compatibility
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: "Market Insights" | "M&A Strategy" | "Fundraising" | "Valuation" | "Nepal Business"
  readTime: number
  publishedAt: string
  image: string
}

// Fetch all blog posts from Sanity
export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  try {
    const posts = await client.fetch(BLOG_POSTS_QUERY)
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  try {
    const post = await client.fetch(BLOG_POST_BY_SLUG_QUERY, { slug })
    return post || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}