import { client } from './sanity'
import { PortableTextBlock } from '@portabletext/types'
import { BLOG_POSTS_QUERY, BLOG_POST_BY_SLUG_QUERY } from './sanity'
import { blogPosts as fallbackPosts, BlogPost as LegacyBlogPost } from './blogs-data'

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

// Convert fallback blog post to Sanity format
function convertToSanityFormat(post: LegacyBlogPost): SanityBlogPost {
  return {
    _id: post.id,
    title: post.title,
    slug: {
      current: post.slug
    },
    excerpt: post.excerpt,
    content: [
      {
        _type: 'block',
        _key: 'content',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span',
            text: post.content,
            marks: []
          }
        ],
        markDefs: []
      }
    ] as PortableTextBlock[],
    category: post.category,
    readTime: post.readTime,
    publishedAt: post.publishedAt,
    image: {
      asset: {
        _id: 'placeholder',
        url: post.image || '/placeholder.svg'
      },
      alt: post.title
    }
  }
}

// Fetch all blog posts from Sanity
export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  try {
    const posts = await client.fetch(BLOG_POSTS_QUERY)
    return posts && posts.length > 0 ? posts : fallbackPosts.map(convertToSanityFormat)
  } catch (error) {
    console.error('Error fetching blog posts, using fallback data:', error)
    return fallbackPosts.map(convertToSanityFormat)
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  try {
    const post = await client.fetch(BLOG_POST_BY_SLUG_QUERY, { slug })
    if (post) return post
    
    // Fallback to static data
    const fallbackPost = fallbackPosts.find(p => p.slug === slug)
    return fallbackPost ? convertToSanityFormat(fallbackPost) : null
  } catch (error) {
    console.error('Error fetching blog post, using fallback data:', error)
    const fallbackPost = fallbackPosts.find(p => p.slug === slug)
    return fallbackPost ? convertToSanityFormat(fallbackPost) : null
  }
}

// Convert Sanity blog post to legacy format (for backward compatibility)
export function convertToLegacyFormat(post: SanityBlogPost): BlogPost {
  return {
    id: post._id,
    slug: post.slug.current,
    title: post.title,
    excerpt: post.excerpt,
    content: '', // We'll handle this with PortableText component
    category: post.category,
    readTime: post.readTime,
    publishedAt: post.publishedAt,
    image: post.image?.asset?.url || '',
  }
}