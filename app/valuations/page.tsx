import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, FileText, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Valuations | Ascend LLC",
  description:
    "Professional business valuation services in Nepal. Get accurate, defensible valuations for M&A, fundraising, and strategic planning.",
}

export default function ValuationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Business Valuations</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Know your business's true worth with professional, defensible valuations
            </p>
          </div>
        </div>
      </section>

      {/* Why Valuation Matters */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Why Valuation Matters</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Whether you're selling, raising capital, or planning for the future, an accurate valuation is essential
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
              <Calculator className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">M&A Transactions</h3>
              <p className="text-sm text-muted-foreground">Set realistic expectations and negotiate from strength</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
              <TrendingUp className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">Fundraising</h3>
              <p className="text-sm text-muted-foreground">Justify your valuation to potential investors</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
              <FileText className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">Strategic Planning</h3>
              <p className="text-sm text-muted-foreground">Track value creation over time</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
              <Shield className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">Tax & Compliance</h3>
              <p className="text-sm text-muted-foreground">Meet regulatory requirements with confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation Process */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Our Valuation Process</h2>
          </div>
          <div className="space-y-8">
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Initial Consultation</h3>
              </div>
              <p className="ml-11 text-muted-foreground">
                We understand your business, industry, and the purpose of the valuation
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Data Collection</h3>
              </div>
              <p className="ml-11 text-muted-foreground">
                Gather financial statements, operational data, and market information
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Analysis & Modeling</h3>
              </div>
              <p className="ml-11 text-muted-foreground">
                Apply multiple valuation methodologies including DCF, comparables, and precedent transactions
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Report Delivery</h3>
              </div>
              <p className="ml-11 text-muted-foreground">
                Provide a comprehensive valuation report with clear explanations and supporting analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Get Your Business Valued Today
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Contact us for a professional business valuation tailored to your specific needs
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Request a Valuation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
