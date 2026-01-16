import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2, User, Tag, BookOpen, ThumbsUp, MessageCircle } from "lucide-react"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/sanity-blog-data"
import { notFound } from "next/navigation"
import PortableTextContent from "@/components/portable-text-content"

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(params.slug),
    getBlogPosts()
  ])

  if (!post) {
    notFound()
  }

  // Get related posts (same category, but not current post)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p._id !== post._id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Button asChild variant="outline" size="sm" className="bg-background/90 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
          <Link href="/blogs" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>

      {/* Hero Section with Featured Image */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={post.image?.asset?.url || "/placeholder.svg"} 
            alt={post.image?.alt || post.title} 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-accent-foreground shadow-lg">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">Ascend Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Content Container */}
          <div className="relative bg-background -mt-20 rounded-t-3xl shadow-2xl border border-border/20">
            <div className="p-8 sm:p-12">
              
              {/* Social Share Bar */}
              <div className="flex items-center justify-between mb-12 pb-6 border-b border-border/30">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
                  <div className="flex gap-2">
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
                      className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
                
                {/* Reading Progress */}
                <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                <PortableTextContent content={post.content} />
              </article>

              {/* Article Footer */}
              <div className="mt-16 pt-8 border-t border-border/30">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <User className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Ascend Team</p>
                      <p className="text-sm text-muted-foreground">M&A and Business Advisory Experts</p>
                    </div>
                  </div>

                  {/* Engagement Actions */}
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      Helpful
                    </Button>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="/contact">Get Expert Advice</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* SEO Keywords (if available) */}
              {post.seo?.keywords && post.seo.keywords.length > 0 && (
                <div className="mt-8 pt-6 border-t border-border/20">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-muted-foreground mr-2">Topics:</span>
                    {post.seo.keywords.map((keyword, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Related Articles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Continue exploring insights in {post.category} and grow your business knowledge
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost._id} href={`/blogs/${relatedPost.slug.current}`}>
                  <article className="group h-full flex flex-col overflow-hidden rounded-2xl border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <Image
                        src={relatedPost.image?.asset?.url || "/placeholder.svg"}
                        alt={relatedPost.image?.alt || relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block rounded-full bg-accent/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-accent-foreground">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-3 line-clamp-2 text-lg font-bold text-card-foreground group-hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="mb-4 flex-1 line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{relatedPost.readTime} min read</span>
                        <span>•</span>
                        <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Get personalized advice from our M&A and business advisory experts
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}