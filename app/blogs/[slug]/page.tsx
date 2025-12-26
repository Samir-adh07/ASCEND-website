"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { getBlogPost, getAllBlogPosts } from "@/lib/blogs-data"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const allPosts = getAllBlogPosts()

  if (!post) {
    notFound()
  }

  // Get related posts (same category, but not current post)
  const relatedPosts = allPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4">
          <Button asChild variant="ghost" className="hover:bg-muted/50">
            <Link href="/blogs" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-72 w-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-accent/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-accent">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-balance">{post.title}</h1>
          <div className="flex flex-wrap gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {post.readTime} min read
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative h-96 w-full overflow-hidden bg-muted">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      {/* Article Content */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-foreground mb-2">Share this article</p>
              <div className="flex gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.excerpt,
                        url: window.location.href,
                      })
                    }
                  }}
                  className="gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 bg-secondary/30">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Related Articles</h2>
            <p className="text-muted-foreground">Explore more insights from our blog</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blogs/${relatedPost.slug}`}>
                <article className="group h-full flex flex-col overflow-hidden rounded-2xl border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 line-clamp-2 text-lg font-bold text-card-foreground group-hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="mb-4 flex-1 line-clamp-2 text-sm text-muted-foreground">{relatedPost.excerpt}</p>
                    <div className="text-sm text-muted-foreground">{relatedPost.readTime} min read</div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
