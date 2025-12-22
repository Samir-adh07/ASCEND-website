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
          <div className="text-center mb-16">
            <div className="inline-block mb-4 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
              WHAT WE OFFER
            </div>
            <h2 className="text-5xl font-serif font-bold tracking-tight text-foreground mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to elevate your business to the next level
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border-2 border-border/50 bg-card shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:border-accent/50"
              >
                <div className="absolute top-4 right-4 z-20 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.badge}
                </div>

                <div className="absolute inset-0 opacity-20 transition-all duration-700 group-hover:opacity-30 group-hover:scale-110">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-accent/5" />

                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-all duration-700" />
                <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-700" />

                <div className="relative p-8 min-h-[320px] flex flex-col">
                  <div className="mb-6 relative inline-flex w-fit">
                    <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative rounded-2xl bg-gradient-to-br from-accent/30 via-accent/20 to-accent/10 p-6 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <service.icon className="h-12 w-12 text-accent transition-all duration-500 group-hover:scale-125" />
                    </div>
                  </div>

                  <h3 className="mb-4 text-2xl font-serif font-bold text-card-foreground transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>Learn More</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-40 -left-20 h-[600px] w-[600px] bg-accent/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 -right-20 h-[500px] w-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
              HOW WE WORK
            </div>
            <h2 className="text-5xl font-serif font-bold tracking-tight text-foreground mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven four-step methodology that ensures successful transactions from initial consultation to post-deal
              support
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-accent/20 transform -translate-x-1/2 hidden lg:block" />

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Central pulse indicator */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                    <div className="relative">
                      <div className="h-6 w-6 rounded-full bg-accent animate-ping absolute opacity-20" />
                      <div className="h-6 w-6 rounded-full bg-accent border-4 border-background shadow-lg relative z-10" />
                    </div>
                  </div>

                  {/* Card - alternating left/right on desktop */}
                  <div
                    className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                  >
                    {/* Content Card */}
                    <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"} group`}>
                      <div className="relative overflow-hidden rounded-2xl border-2 border-accent/20 bg-card p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-accent/40 hover:-translate-y-2">
                        {/* Glowing corner accent */}
                        <div className="absolute top-0 right-0 h-32 w-32 bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />

                        <div className="relative">
                          {/* Step Number Badge */}
                          <div
                            className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                          >
                            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 text-2xl font-bold text-accent-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {step.number}
                            </div>
                            <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent" />
                          </div>

                          <h3 className="text-3xl font-serif font-bold text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>

                          {/* Icon indicator */}
                          <div className={`mt-6 flex ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                            <div className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                              <CheckCircle2 className="h-5 w-5" />
                              <span>Step Complete</span>
                            </div>
                          </div>
                        </div>

                        {/* Decorative corner elements */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className={`hidden lg:block ${index % 2 === 0 ? "" : "lg:col-start-1"}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 rounded-full border-2 border-accent/20 bg-card p-2 pr-6 shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold">
                ✓
              </div>
              <p className="text-muted-foreground font-medium">
                Ready to start your journey?{" "}
                <Link href="/contact" className="text-accent hover:underline font-semibold">
                  Let's talk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 h-96 w-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 h-80 w-80 bg-accent rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-accent">
              WHY ASCEND
            </div>
            <h2 className="text-5xl font-serif font-bold tracking-tight mb-6">Your Trusted M&A Partner</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              We bring a unique combination of local market expertise and global transaction experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: "Founder-Led Perspective",
                description: "Real exit experience with a Multi-Million USD acquisition by a US-based tech firm",
              },
              {
                icon: Target,
                title: "Harvard-Certified Expertise",
                description: "Certificate in Private Equity and Venture Capital (PEVC) from Harvard Business School",
              },
              {
                icon: Users,
                title: "Global Investor Network",
                description:
                  "Deep connections with international investors seeking opportunities in the Himalayan region",
              },
              {
                icon: CheckCircle2,
                title: "CA Rigorous Standards",
                description: "Chartered Accountant (ICAI) led due diligence ensuring thorough financial scrutiny",
              },
              {
                icon: TrendingUp,
                title: "Proven Track Record",
                description: "Successfully raised significant capital for multiple companies across diverse industries",
              },
              {
                icon: Handshake,
                title: "Skin in the Game",
                description: "Having sat on both sides of the table as founder and advisor, we understand your journey",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-primary-foreground/10 hover:border-accent/50 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 h-32 w-32 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors duration-500" />

                <div className="relative">
                  <div className="mb-6 inline-flex rounded-xl bg-accent/20 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/30">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">{item.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent via-accent to-accent/80 p-12 text-center shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 h-full w-full bg-[url('/business-handshake-professional.jpg')] bg-cover bg-center" />
            </div>
            <div className="relative">
              <div className="inline-block mb-4 rounded-full bg-accent-foreground/10 px-4 py-2 text-sm font-semibold text-accent-foreground">
                SUCCESS STORY
              </div>
              <div className="text-6xl font-bold text-accent-foreground mb-4">$10M+ USD</div>
              <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Successfully executed exit to US-based technology firm. Led the entire transaction from initial
                negotiations to final closing.
              </p>
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
