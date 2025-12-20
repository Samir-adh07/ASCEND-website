import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Valuation | Ascend LLC",
  description:
    "Professional business valuation services in Nepal. DCF, comparable company analysis, and precedent transactions.",
}

export default function ValuationPage() {
  const methods = [
    "Discounted Cash Flow (DCF) analysis",
    "Comparable company analysis",
    "Precedent transaction analysis",
    "Asset-based valuation",
    "Industry-specific multiples",
    "Control premium and minority discount analysis",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Business Valuation</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Accurate, defensible valuations for M&A, fundraising, and strategic planning
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Professional Valuation Services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Accurate business valuations are critical for successful transactions. Our methodologies combine
              traditional finance principles with deep market insights to deliver valuations that stand up to scrutiny
              from buyers, investors, and auditors.
            </p>
          </div>

          <div className="mb-12 rounded-lg border bg-card p-8">
            <h3 className="mb-6 text-2xl font-bold text-card-foreground">Our Valuation Methods Include:</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {methods.map((method, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{method}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">For M&A Transactions</h3>
              <p className="text-muted-foreground">
                Provide buyers and sellers with credible valuations that facilitate negotiations and support deal
                pricing. Our valuations consider market conditions, growth prospects, and comparable transactions.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">For Fundraising</h3>
              <p className="text-muted-foreground">
                Help startups and growth companies understand their value and negotiate equity terms with investors. Our
                valuations balance ambition with market reality.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">For Strategic Planning</h3>
              <p className="text-muted-foreground">
                Support long-term strategic decisions with regular valuation updates that track value creation and
                identify opportunities for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Get a Professional Valuation
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Understand your business's true worth with a comprehensive, defensible valuation.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Request Valuation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
