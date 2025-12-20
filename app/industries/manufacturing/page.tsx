import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Manufacturing Industry | Ascend LLC",
  description: "M&A advisory for manufacturing businesses in Nepal.",
}

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Manufacturing Industry</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Strategic advisory for manufacturing businesses across Nepal
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Our Manufacturing Focus</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with manufacturing businesses across various sectors including food processing, textiles,
              construction materials, and industrial products. Our services help manufacturers scale operations, access
              capital, and navigate ownership transitions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Discuss Your Manufacturing Business
          </h2>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
