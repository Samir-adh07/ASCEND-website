import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Businesses for Sale | Ascend LLC",
  description: "Current business listings available for acquisition in Nepal.",
}

export default function BusinessListingsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Current Business Listings
            </h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Explore acquisition opportunities in Nepal's growing economy
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-lg text-muted-foreground">
              Our current business listings are confidential and shared only with qualified buyers. Contact us to
              receive information about available opportunities that match your investment criteria.
            </p>
          </div>

          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 text-center">
            <Building2 className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="mb-4 text-2xl font-bold text-card-foreground">Confidential Opportunities Available</h2>
            <p className="mb-6 text-muted-foreground">
              We represent several businesses across technology, healthcare, retail, and manufacturing sectors. Sign an
              NDA to receive detailed information about our current listings.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Why Buy Through Ascend?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">Vetted Opportunities</h3>
              <p className="text-muted-foreground">
                All businesses have been thoroughly evaluated for financial health and growth potential
              </p>
            </div>
            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">Deal Support</h3>
              <p className="text-muted-foreground">
                We facilitate the entire process from initial introduction through closing
              </p>
            </div>
            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">Confidentiality</h3>
              <p className="text-muted-foreground">
                All transactions are handled with the utmost discretion and confidentiality
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
