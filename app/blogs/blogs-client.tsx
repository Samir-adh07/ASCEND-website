"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { getBlogPosts, type SanityBlogPost } from "@/lib/sanity-blog-data"

const categories = ["Market Insights", "M&A Strategy", "Fundraising", "Valuation", "Nepal Business"] as const

export default function BlogsClient() {
  const [allPosts, setAllPosts] = useState<SanityBlogPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPosts() {
      try {
        const posts = await getBlogPosts()
        setAllPosts(posts)
      } catch (error) {
        console.error('Error loading blog posts:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])

  const filteredPosts = selectedCategory 
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 h-64 w-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 h-80 w-80 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-balance">Insights & Resources</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Expert perspectives on M&A, fundraising, business valuation, and building in Nepal's dynamic
              entrepreneurial ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? "default" : "outline"}
              className={selectedCategory === null ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
            >
              All Posts
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent"></div>
              <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
            </div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link key={post._id} href={`/blogs/${post.slug.current}`}>
                <article className="group h-full flex flex-col overflow-hidden rounded-2xl border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={post.image?.asset?.url || "/placeholder.svg"}
                      alt={post.image?.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block rounded-full bg-accent/90 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-accent-foreground">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 line-clamp-2 text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mb-4 flex-1 line-clamp-3 text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    {/* Meta Information */}
                    <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime} min read
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all duration-300">
                      Read Article
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">
              {selectedCategory ? `No posts found in "${selectedCategory}" category.` : 'No blog posts available yet.'}
            </p>
            {!selectedCategory && (
              <p className="text-muted-foreground">
                Blog posts will appear here once they're published via Sanity CMS.
              </p>
            )}
          </div>
        )}
      </section>
    </div>
  )
}
