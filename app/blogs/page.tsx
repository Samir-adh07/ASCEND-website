import type { Metadata } from "next"
import BlogsClient from "./blogs-client"

export const metadata: Metadata = {
  title: "Blogs | Ascend LLC",
  description:
    "Read insights on M&A, fundraising, business valuation, and Nepal's entrepreneurial ecosystem from Ascend's expert advisors.",
  keywords: "M&A blog, fundraising guides, business valuation, Nepal startups, entrepreneurship",
}

export default function BlogsPage() {
  return <BlogsClient />
}
