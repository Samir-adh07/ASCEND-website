import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, Target, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Insights | Ascend LLC",
  description: "Expert insights on M&A, fundraising, and business growth in Nepal's emerging market.",
}

export default function InsightsPage() {
  const insights = [
    {
      icon: TrendingUp,
      title: "Preparing Your Business for Sale",
      description:
        "Key steps to maximize valuation and attract serious buyers. Learn what international investors look for in Nepalese businesses.",
      readTime: "5 min read",
    },
    {
      icon: Target,
      title: "Fundraising in Nepal's Startup Ecosystem",
      description:
        "Navigate the fundraising landscape in Nepal. From angel investors to Series A, understand your options and how to position your startup.",
      readTime: "7 min read",
    },
    {
      icon: Globe,
      title: "Cross-Border M&A: Opportunities and Challenges",
      description:
        "Insights into selling your Nepalese business to international buyers. Legal considerations, cultural differences, and valuation expectations.",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Insights</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Expert perspectives on M&A, fundraising, and business growth in Nepal's emerging market
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight, index) => {
              const Icon = insight.icon
              return (
                <article
                  key={index}
                  className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <Icon className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-3 text-xl font-semibold text-card-foreground">{insight.title}</h3>
                  <p className="mb-4 text-muted-foreground">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{insight.readTime}</span>
                    <Link href="/contact" className="text-sm font-medium text-primary hover:underline">
                      Read more →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Stay Informed</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get the latest insights on M&A and business growth delivered to your inbox
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Subscribe to Updates</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
