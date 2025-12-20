import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Financial Services | Ascend LLC",
  description: "M&A advisory for financial services companies in Nepal.",
}

export default function FinancialPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Financial Services</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Strategic advisory for fintech and financial services companies
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Our Financial Services Focus</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nepal's financial services sector is evolving with new fintech solutions, digital payment platforms, and
              innovative financial products. We help financial services companies navigate regulatory requirements while
              pursuing growth and M&A opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Discuss Your Financial Services Business
          </h2>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
