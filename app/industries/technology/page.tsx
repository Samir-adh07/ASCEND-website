import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cloud, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Technology Industry | Ascend LLC",
  description: "M&A and investment advisory for technology companies in Nepal. Software, SaaS, and tech startups.",
}

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Technology Industry Expertise
            </h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Connecting Nepal's innovative tech companies with global investors and strategic buyers
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Our Technology Focus</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nepal's technology sector is experiencing rapid growth, with innovative startups creating solutions for
              both local and international markets. Our founder successfully sold a technology company to a US-based
              buyer, giving us unique insights into what international acquirers look for in tech businesses.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Code className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Software & SaaS</h3>
              <p className="text-muted-foreground">
                B2B and B2C software companies, subscription-based services, and enterprise solutions
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Smartphone className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Mobile & Apps</h3>
              <p className="text-muted-foreground">
                Mobile application developers, platform businesses, and app-based services
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Cloud className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Cloud Services</h3>
              <p className="text-muted-foreground">
                Cloud infrastructure, hosting services, and cloud-based business solutions
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Zap className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Emerging Tech</h3>
              <p className="text-muted-foreground">
                AI/ML, blockchain, fintech, and other cutting-edge technology sectors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Let's Discuss Your Tech Business
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Whether you're fundraising, seeking an exit, or exploring strategic options
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
