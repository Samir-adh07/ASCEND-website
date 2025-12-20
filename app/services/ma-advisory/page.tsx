import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "M&A Advisory | Ascend LLC",
  description:
    "Expert M&A advisory services in Nepal. From target identification to post-merger integration, we guide you through every step.",
}

export default function MAAdvisoryPage() {
  const services = [
    "Target identification and screening",
    "Valuation and financial modeling",
    "Deal structuring and negotiation",
    "Due diligence coordination",
    "Transaction execution",
    "Post-merger integration support",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">M&A Advisory</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Strategic guidance through every phase of your merger or acquisition transaction
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Comprehensive M&A Support</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Navigating mergers and acquisitions requires more than just numbers—it requires strategy, market
              knowledge, and execution excellence. At Ascend, we manage the entire M&A process from target
              identification to final integration, ensuring you achieve optimal outcomes.
            </p>
          </div>

          <div className="mb-12 rounded-lg border bg-card p-8">
            <h3 className="mb-6 text-2xl font-bold text-card-foreground">Our M&A Services Include:</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">For Buyers</h3>
              <p className="text-muted-foreground">
                We help you identify the right acquisition targets, conduct thorough due diligence, negotiate favorable
                terms, and execute seamless integrations that create real value.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">For Sellers</h3>
              <p className="text-muted-foreground">
                We position your business for maximum value, connect you with qualified buyers (both domestic and
                international), and guide you through negotiations to achieve the best possible outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Ready to Explore M&A Opportunities?
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Let's discuss how we can help you achieve your strategic goals.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
