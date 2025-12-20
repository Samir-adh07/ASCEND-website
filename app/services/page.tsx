import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, LogOut, Building2, Briefcase, Calculator, FileSearch, Handshake, ChevronRight } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Services - M&A Advisory, Fundraising & Business Valuation",
  description:
    "Comprehensive M&A advisory services in Nepal: Fundraising, Business Exits, M&A Advisory, Business Brokerage, Valuation, Due Diligence, and Negotiation services by expert CA Saurav Subedi.",
  keywords: [
    "M&A Advisory Nepal",
    "Business Fundraising Nepal",
    "Business Valuation Nepal",
    "Due Diligence Nepal",
    "Business Brokerage Kathmandu",
    "Exit Strategy Nepal",
    "Private Equity Nepal",
  ],
  openGraph: {
    title: "Services - M&A Advisory & Business Brokerage in Nepal | Ascend LLC",
    description: "Expert M&A advisory, fundraising, valuation, and business brokerage services in Nepal.",
    url: "https://ascendllc.com/services",
    type: "website",
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Fundraising",
      description:
        "Strategic capital raising for startups and established enterprises. Whether it's Seed, Series A, or Private Equity, we connect you with the right partners.",
      image: "/professional-financial-charts-and-growth-graphs-on.jpg",
      badge: "Capital",
    },
    {
      icon: LogOut,
      title: "Exits & Divestitures",
      description:
        'Planning your exit? We help founders maximize their lifecycle value, ensuring your business is "exit-ready" for global acquisition.',
      image: "/business-handshake-professional.jpg",
      badge: "Strategy",
    },
    {
      icon: Building2,
      title: "M&A Advisory",
      description:
        "Navigating mergers and acquisitions requires more than just numbers; it requires strategy. We manage the process from target identification to final integration.",
      image: "/corporate-merger-handshake-business-deal-modern-of.jpg",
      badge: "Advisory",
    },
    {
      icon: Briefcase,
      title: "Business Brokerage",
      description:
        "Confidential and professional brokerage services for buying or selling mid-market businesses in Nepal.",
      image: "/technology-company-office-modern.jpg",
      badge: "Brokerage",
    },
    {
      icon: Calculator,
      title: "Valuation",
      description:
        "Rigorous, data-backed business valuations that stand up to the scrutiny of international investors and regulatory bodies.",
      image: "/financial-services-banking-professional.jpg",
      badge: "Analysis",
    },
    {
      icon: FileSearch,
      title: "Due Diligence Audit",
      description:
        "Led by a Chartered Accountant, our audit process ensures that every financial, legal, and operational risk is identified before the deal is signed.",
      image: "/financial-audit-documents-analysis-professional-wo.jpg",
      badge: "Audit",
    },
    {
      icon: Handshake,
      title: "Negotiations",
      description:
        'We act as the "bridge" in the room, handling high-stakes buying and selling negotiations to ensure our clients get the best possible terms.',
      image: "/startup-office-team-collaboration.jpg",
      badge: "Deal Making",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-24 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/business-handshake-professional.jpg')] bg-cover bg-center opacity-5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-serif font-bold tracking-tight sm:text-6xl text-balance">Our Services</h1>
          <p className="text-xl leading-relaxed text-primary-foreground/90">
            Comprehensive M&A advisory and business brokerage services tailored for Nepal's dynamic market.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-40 left-10 h-96 w-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 h-80 w-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Corner Badge */}
                <div className="absolute top-4 right-4 z-20 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground backdrop-blur-sm">
                  {service.badge}
                </div>

                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 opacity-10 transition-all duration-700 group-hover:opacity-20 group-hover:scale-110">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />

                <div className="relative p-8">
                  {/* Enhanced Icon with Glow and Rotation */}
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 p-5 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-accent/20">
                    <service.icon className="h-12 w-12 text-accent transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <h3 className="mb-4 text-2xl font-serif font-bold text-card-foreground transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  {/* Decorative Bottom Bar */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 group-hover:w-full rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary py-24">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-20 h-64 w-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 h-80 w-80 bg-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Let's Discuss Your Needs
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
            Schedule a consultation to explore how our services can help your business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 shadow-xl"
          >
            <Link href="/contact">
              Book a Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
