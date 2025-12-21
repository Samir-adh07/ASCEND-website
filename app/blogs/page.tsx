"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All" },
  { id: "market-insights", name: "Market Insights" },
  { id: "ma-strategy", name: "M&A Strategy" },
  { id: "fundraising", name: "Fundraising" },
  { id: "valuation", name: "Valuation" },
  { id: "nepal-business", name: "Nepal Business" },
]

const blogPosts = [
  {
    id: 1,
    title: "Essential M&A Considerations for Nepal Startups",
    excerpt:
      "Navigating the complexities of mergers and acquisitions in Nepal requires understanding both local market dynamics and international buyer expectations. This guide covers key considerations for startup founders.",
    category: "ma-strategy",
    date: "2025.01.15",
    readTime: "8 min read",
    image: "/ma-strategy-blog.jpg",
  },
  {
    id: 2,
    title: "Fundraising Guide: Connecting Nepal Entrepreneurs with Global Investors",
    excerpt:
      "The global investment landscape is evolving rapidly. Learn how Nepalese entrepreneurs can position their companies to attract international venture capital and private equity investors.",
    category: "fundraising",
    date: "2025.01.12",
    readTime: "10 min read",
    image: "/fundraising-guide-blog.jpg",
  },
  {
    id: 3,
    title: "Valuing Your Nepal Business: A Comprehensive Framework",
    excerpt:
      "Business valuation is both an art and a science. Discover the methodologies used by leading advisors to determine accurate valuations for your business in today's market.",
    category: "valuation",
    date: "2025.01.10",
    readTime: "12 min read",
    image: "/valuation-framework-blog.jpg",
  },
  {
    id: 4,
    title: "Nepal Tech Sector Trends: What Investors Are Looking For",
    excerpt:
      "The Nepalese tech ecosystem is experiencing unprecedented growth. Explore the latest market trends and what international investors prioritize when evaluating Nepal-based tech companies.",
    category: "market-insights",
    date: "2025.01.08",
    readTime: "9 min read",
    image: "/tech-trends-blog.jpg",
  },
  {
    id: 5,
    title: "Due Diligence Checklist: Preparing Your Company for Exit",
    excerpt:
      "Proper preparation is critical for a successful exit. This comprehensive checklist covers financial, legal, and operational aspects you need to address before approaching buyers.",
    category: "ma-strategy",
    date: "2025.01.05",
    readTime: "11 min read",
    image: "/due-diligence-blog.jpg",
  },
  {
    id: 6,
    title: "From Founder to Advisor: Lessons from a Multimillion Dollar Exit",
    excerpt:
      "Drawing from real experience, learn the critical lessons and insights gained from taking a company from conception to a successful multimillion-dollar acquisition.",
    category: "nepal-business",
    date: "2025.01.02",
    readTime: "7 min read",
    image: "/founder-lessons-blog.jpg",
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts =
    selectedCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="absolute inset-0">
          <img
            src="/business-handshake-professional.jpg"
            alt="Professional business environment"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold tracking-tight text-balance">Insights & Knowledge</h1>
          <p className="mt-4 text-xl text-primary-foreground/90 max-w-2xl">
            Expert perspectives on M&A, fundraising, and building successful businesses in Nepal
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-background/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group relative overflow-hidden rounded-2xl border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-accent/90 backdrop-blur-sm px-4 py-1 text-sm font-semibold text-accent-foreground">
                      {categories.find((c) => c.id === post.category)?.name}
                    </span>
                  </div>
                </div>

                <div className="relative p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  <p className="mb-6 text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all duration-300"
                  >
                    Read Article
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Let's discuss how Ascend can help you achieve extraordinary results.
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8">
            <Link href="/contact">
              Book a Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
