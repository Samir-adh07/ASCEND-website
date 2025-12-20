import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, TrendingUp, Shield, Users, FileText, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "What We Do | Ascend LLC",
  description:
    "Ascend is an experienced M&A firm serving Nepal's most promising enterprises. We assist with capital raising, exits, and strategic transactions.",
}

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">What We Do</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Ascend is an experienced M&A firm serving Nepal's most promising enterprises. We assist successful
              business owners with capital raising, exits, and strategic transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <TrendingUp className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Fundraising</h3>
              <p className="mb-4 text-muted-foreground">
                Strategic capital raising for startups and established enterprises. Whether it's Seed, Series A, or
                Private Equity, we connect you with the right partners.
              </p>
              <Link href="/services/fundraising" className="text-sm font-medium text-primary hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Building2 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">M&A Advisory</h3>
              <p className="mb-4 text-muted-foreground">
                Navigating mergers and acquisitions requires more than just numbers. We manage the process from target
                identification to final integration.
              </p>
              <Link href="/services/ma-advisory" className="text-sm font-medium text-primary hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Shield className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Due Diligence</h3>
              <p className="mb-4 text-muted-foreground">
                Led by a Chartered Accountant, our audit process ensures that every financial, legal, and operational
                risk is identified before the deal is signed.
              </p>
              <Link href="/services/due-diligence" className="text-sm font-medium text-primary hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <FileText className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Business Valuation</h3>
              <p className="mb-4 text-muted-foreground">
                Accurate business valuations are critical for transactions. Our methodologies combine traditional
                finance with market insights.
              </p>
              <Link href="/services/valuation" className="text-sm font-medium text-primary hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Users className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Strategic Advisory</h3>
              <p className="mb-4 text-muted-foreground">
                Beyond transactions, we provide ongoing strategic guidance to help businesses scale and prepare for
                future growth opportunities.
              </p>
              <Link href="/services/ma-advisory" className="text-sm font-medium text-primary hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Globe className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">International Expansion</h3>
              <p className="mb-4 text-muted-foreground">
                Connecting Nepalese businesses with global markets and international investors through our extensive
                network.
              </p>
              <Link href="/contact" className="text-sm font-medium text-primary hover:underline">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Let's discuss how Ascend can help you achieve your business goals.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
