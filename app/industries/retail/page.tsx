import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Store, Globe, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Retail & E-commerce | Ascend LLC",
  description: "M&A advisory for retail and e-commerce businesses in Nepal. Traditional retail and online stores.",
}

export default function RetailPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Retail & E-commerce Expertise
            </h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Advisory services for traditional retail and digital commerce businesses
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Our Retail Focus</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nepal's retail landscape is transforming with the rise of e-commerce and modern retail formats. We help
              retailers navigate this transition, whether through strategic acquisitions, fundraising for expansion, or
              exits to larger players.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <ShoppingBag className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">E-commerce Platforms</h3>
              <p className="text-muted-foreground">
                Online marketplaces, D2C brands, and e-commerce enablers serving Nepalese consumers
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Store className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Traditional Retail</h3>
              <p className="text-muted-foreground">Retail chains, specialty stores, and brick-and-mortar businesses</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Globe className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Omnichannel Retail</h3>
              <p className="text-muted-foreground">
                Businesses combining online and offline presence for seamless customer experiences
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Truck className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Logistics & Fulfillment</h3>
              <p className="text-muted-foreground">
                Delivery services, fulfillment centers, and supply chain solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Let's Discuss Your Retail Business
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Whether you're looking to scale, sell, or find strategic partners
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
