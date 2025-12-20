import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Deal News | Ascend LLC",
  description: "Latest news and updates on M&A transactions and business deals in Nepal.",
}

export default function DealNewsPage() {
  const news = [
    {
      date: "December 2024",
      title: "Ascend Facilitates $2.4M Technology Startup Exit",
      description:
        "Successfully advised on the sale of a Kathmandu-based technology startup to a US-based strategic buyer, marking one of the largest tech exits in Nepal's startup ecosystem.",
      category: "M&A Transaction",
    },
    {
      date: "November 2024",
      title: "Series A Round Closed for Healthcare Platform",
      description:
        "Guided a healthcare technology company through a successful Series A fundraising round with participation from international venture capital firms.",
      category: "Fundraising",
    },
    {
      date: "October 2024",
      title: "Manufacturing Firm Attracts Strategic Investment",
      description:
        "Advised a manufacturing business in securing strategic investment from regional partners, enabling expansion into new markets.",
      category: "Investment",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Deal News</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Stay updated on the latest M&A transactions and business deals we've facilitated
            </p>
          </div>
        </div>
      </section>

      {/* News Items */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {news.map((item, index) => (
              <article key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {item.category}
                  </span>
                </div>
                <h2 className="mb-3 text-2xl font-bold text-foreground">{item.title}</h2>
                <p className="text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Want to Be Our Next Success Story?
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Let's discuss how we can help you achieve extraordinary results.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
