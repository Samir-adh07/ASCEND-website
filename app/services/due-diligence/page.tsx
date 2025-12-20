import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Due Diligence Services | Ascend LLC",
  description:
    "Comprehensive due diligence led by a Chartered Accountant. Financial, legal, and operational risk assessment.",
}

export default function DueDiligencePage() {
  const services = [
    "Financial due diligence and audit",
    "Legal and regulatory compliance review",
    "Operational assessment",
    "Technology and IP evaluation",
    "Market and competitive analysis",
    "Risk identification and mitigation planning",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Due Diligence Services</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Thorough risk assessment before you sign on the dotted line
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Comprehensive Risk Assessment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Led by a Chartered Accountant with extensive audit experience, our due diligence process ensures that
              every financial, legal, and operational risk is identified and assessed before the deal is signed. We help
              buyers make informed decisions and sellers prepare for scrutiny.
            </p>
          </div>

          <div className="mb-12 rounded-lg border bg-card p-8">
            <h3 className="mb-6 text-2xl font-bold text-card-foreground">Our Due Diligence Services Include:</h3>
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
              <h3 className="mb-3 text-xl font-semibold text-foreground">Financial Due Diligence</h3>
              <p className="text-muted-foreground">
                Comprehensive analysis of financial statements, accounting practices, revenue quality, cash flow
                patterns, and working capital requirements. We verify the numbers and identify potential red flags.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Operational Assessment</h3>
              <p className="text-muted-foreground">
                Evaluate business processes, operational efficiency, supply chain risks, customer concentration, and key
                person dependencies to understand the true operational health of the business.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Legal & Compliance</h3>
              <p className="text-muted-foreground">
                Review contracts, licenses, permits, litigation risks, intellectual property rights, and regulatory
                compliance to ensure there are no hidden legal issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Protect Your Investment
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Let us help you identify and mitigate risks before you commit to a transaction.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Request Due Diligence</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
