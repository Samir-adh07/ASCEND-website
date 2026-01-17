import type { Metadata } from "next"
import BlogsClient from "./blogs-client"
import { getBlogPosts } from "@/lib/sanity-blog-data"

export const metadata: Metadata = {
  title: "Blogs | Ascend LLC",
  description:
    "Read insights on M&A, fundraising, business valuation, and Nepal's entrepreneurial ecosystem from Ascend's expert advisors.",
  keywords: "M&A blog, fundraising guides, business valuation, Nepal startups, entrepreneurship",
}

// Revalidate every 60 seconds to fetch new blog posts
export const revalidate = 60

export default async function BlogsPage() {
  const posts = await getBlogPosts()
  return <BlogsClient initialPosts={posts} />
}
