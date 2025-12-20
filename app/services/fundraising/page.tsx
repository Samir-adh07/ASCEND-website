import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Fundraising Services | Ascend LLC",
  description: "Strategic capital raising for startups and established enterprises. From Seed to Series A and beyond.",
}

export default function FundraisingPage() {
  const services = [
    "Fundraising strategy development",
    "Investor pitch deck creation",
    "Financial modeling and projections",
    "Investor identification and outreach",
    "Term sheet negotiation",
    "Due diligence support",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Fundraising Services</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Connect with the right investors to fuel your business growth
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Strategic Capital Raising</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a startup seeking seed funding or an established enterprise looking for growth capital,
              Ascend connects you with the right investors. Our global network includes angel investors, venture capital
              firms, and private equity partners interested in Nepal's emerging market opportunities.
            </p>
          </div>

          <div className="mb-12 rounded-lg border bg-card p-8">
            <h3 className="mb-6 text-2xl font-bold text-card-foreground">Our Fundraising Services Include:</h3>
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
              <h3 className="mb-3 text-xl font-semibold text-foreground">Seed & Early Stage</h3>
              <p className="text-muted-foreground">
                Help startups articulate their vision, build compelling pitch materials, and connect with angel
                investors and early-stage VCs who understand the Nepalese market.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Series A & Growth Capital</h3>
              <p className="text-muted-foreground">
                Support scaling businesses in raising institutional capital with sophisticated financial modeling,
                investor targeting, and negotiation support.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Private Equity</h3>
              <p className="text-muted-foreground">
                Guide established enterprises through private equity transactions, including growth capital, buyouts,
                and recapitalizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Ready to Raise Capital?
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Let's discuss your fundraising goals and how we can help you connect with the right investors.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
