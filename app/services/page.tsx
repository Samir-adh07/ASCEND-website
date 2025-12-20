import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  LogOut,
  Building2,
  Briefcase,
  Calculator,
  FileSearch,
  Handshake,
  ChevronRight,
  CheckCircle2,
  Users,
  Target,
  Award,
} from "lucide-react"
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

  const processSteps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We begin with an in-depth consultation to understand your business goals and challenges.",
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Our team develops a customized roadmap tailored to your specific transaction needs.",
    },
    {
      number: "03",
      title: "Execution",
      description: "We manage every aspect of the deal, from due diligence to final negotiations.",
    },
    {
      number: "04",
      title: "Closing & Beyond",
      description: "Ensuring smooth integration and continued support post-transaction.",
    },
  ]

  const stats = [
    { icon: Award, value: "Multi-Million", label: "USD Exit Experience" },
    { icon: Users, value: "Global", label: "Investor Network" },
    { icon: Target, value: "100%", label: "Client Focused" },
    { icon: TrendingUp, value: "Proven", label: "Track Record" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-24 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/business-handshake-professional.jpg')] bg-cover bg-center opacity-5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-serif font-bold tracking-tight sm:text-6xl text-balance">Our Services</h1>
          <p className="text-xl leading-relaxed text-primary-foreground/90">
            Comprehensive M&A advisory and business brokerage services tailored for Nepal's dynamic market.
          </p>
        </div>
      </section>

      <section className="bg-primary/5 py-16 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-accent/10 p-4 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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

      <section className="bg-gradient-to-br from-primary/5 to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful transactions from start to finish
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Decorative number */}
                  <div className="absolute -top-4 -right-4 text-8xl font-bold text-accent/5 group-hover:text-accent/10 transition-colors duration-300">
                    {step.number}
                  </div>

                  <div className="relative">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-accent/10 h-16 w-16 text-2xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                  )}

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 h-96 w-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 h-80 w-80 bg-accent rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold tracking-tight mb-6">Why Choose Ascend?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                We bring a unique combination of local market expertise and global transaction experience.
              </p>

              <div className="space-y-4">
                {[
                  "Founder-led perspective with real exit experience",
                  "Harvard-certified Private Equity expertise",
                  "Deep connections with international investors",
                  "Chartered Accountant rigorous due diligence",
                  "Proven track record in Multi-Million USD transactions",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="mt-1 rounded-full bg-accent/20 p-1 transition-all duration-300 group-hover:bg-accent/30 group-hover:scale-110">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-primary-foreground/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/business-executive-portrait.jpg"
                  alt="Professional business consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl p-6 shadow-2xl max-w-xs">
                <div className="text-3xl font-bold mb-1">$2.4M+</div>
                <div className="text-sm">Successfully executed exit to US tech firm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
