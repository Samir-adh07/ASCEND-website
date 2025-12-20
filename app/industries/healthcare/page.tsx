import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Activity, Stethoscope, Pill } from "lucide-react"

export const metadata: Metadata = {
  title: "Healthcare Industry | Ascend LLC",
  description:
    "M&A advisory for healthcare businesses in Nepal. Hospitals, clinics, pharmacies, and health tech companies.",
}

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Healthcare Industry Expertise
            </h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Strategic advisory for healthcare providers and health technology companies
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Our Healthcare Focus</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nepal's healthcare sector is evolving rapidly with new hospitals, specialized clinics, and innovative
              health technology solutions. We help healthcare businesses navigate M&A, fundraising, and strategic
              partnerships while ensuring compliance with regulatory requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Heart className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Hospitals & Clinics</h3>
              <p className="text-muted-foreground">
                Multi-specialty hospitals, specialty clinics, and outpatient care facilities
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Activity className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Health Technology</h3>
              <p className="text-muted-foreground">
                Digital health platforms, telemedicine, and healthcare software solutions
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Stethoscope className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Diagnostic Services</h3>
              <p className="text-muted-foreground">Pathology labs, imaging centers, and diagnostic service providers</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Pill className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Pharmacies & Distribution</h3>
              <p className="text-muted-foreground">Pharmacy chains, pharmaceutical distribution, and retail health</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Discuss Your Healthcare Business
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Let's explore how we can help you achieve your strategic goals
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
