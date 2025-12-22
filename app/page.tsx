import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, TrendingUp, Shield, Globe, Target, Award, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Ascend LLC - Leading M&A Advisory in Nepal. Bridging Nepal's most promising enterprises with global investors. Expert services in fundraising, business exits, and strategic transactions.",
  openGraph: {
    title: "Ascend LLC - M&A Advisory & Business Brokerage in Nepal",
    description:
      "Local Insight. Global Capital. Extraordinary Results. Led by CA Saurav Subedi with multi-million USD exit experience.",
    url: "https://ascendllc.com",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with premium gradient overlay */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src="/business-handshake-professional.jpg"
            alt="Professional business environment"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm backdrop-blur-sm">
              ✨ Leading M&A Advisory in Nepal
            </div>
            <h1 className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance">
              Local Insight. Global Capital. <span className="text-accent">Extraordinary Results.</span>
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-primary-foreground/90 sm:text-2xl text-pretty">
              Bridging Nepal's most promising enterprises with a global network of investors. Led by a founder who has
              lived the full lifecycle of a multimillion dollar exit.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg h-14 px-8"
              >
                <Link href="/contact">
                  Book a Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-lg h-14 px-8"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ascend Section with enhanced cards */}
      <section className="relative bg-background py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 h-72 w-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/3 right-10 h-96 w-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Why Ascend</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Combining local market expertise with international investment networks
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <img
                  src="/global-business-network-connections-world-map.jpg"
                  alt="Global network"
                  className="h-full w-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                />
              </div>
              <div className="absolute top-0 right-0 h-40 w-40 bg-accent/10 rounded-full -mr-20 -mt-20 transition-all duration-700 group-hover:scale-150 group-hover:bg-accent/20" />
              <div className="absolute bottom-0 left-0 h-32 w-32 bg-primary/5 rounded-full -ml-16 -mb-16 transition-all duration-700 group-hover:scale-150" />
              <div className="relative p-8">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative inline-flex rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 p-5 ring-2 ring-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Globe className="h-10 w-10 text-accent" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-card-foreground group-hover:text-accent transition-colors duration-300">
                  Global Reach, Local Roots
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand the nuances of the Nepalese market, but our network spans across the world's leading
                  financial hubs.
                </p>
                <div className="mt-6 h-1 w-0 bg-accent rounded-full transition-all duration-500 group-hover:w-20" />
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <img
                  src="/professional-business-advisor-expert-consultation-.jpg"
                  alt="Expert advisory"
                  className="h-full w-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                />
              </div>
              <div className="absolute top-0 right-0 h-40 w-40 bg-accent/10 rounded-full -mr-20 -mt-20 transition-all duration-700 group-hover:scale-150 group-hover:bg-accent/20" />
              <div className="absolute bottom-0 left-0 h-32 w-32 bg-primary/5 rounded-full -ml-16 -mb-16 transition-all duration-700 group-hover:scale-150" />
              <div className="relative p-8">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative inline-flex rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 p-5 ring-2 ring-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Award className="h-10 w-10 text-accent" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-card-foreground group-hover:text-accent transition-colors duration-300">
                  Expert-Led Advisory
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't just consult; we execute. Our advice is rooted in Chartered Accountancy and elite Ivy League
                  training.
                </p>
                <div className="mt-6 h-1 w-0 bg-accent rounded-full transition-all duration-500 group-hover:w-20" />
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <img
                  src="/successful-business-deal-achievement-trophy-succes.jpg"
                  alt="Proven success"
                  className="h-full w-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                />
              </div>
              <div className="absolute top-0 right-0 h-40 w-40 bg-accent/10 rounded-full -mr-20 -mt-20 transition-all duration-700 group-hover:scale-150 group-hover:bg-accent/20" />
              <div className="absolute bottom-0 left-0 h-32 w-32 bg-primary/5 rounded-full -ml-16 -mb-16 transition-all duration-700 group-hover:scale-150" />
              <div className="relative p-8">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative inline-flex rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 p-5 ring-2 ring-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Target className="h-10 w-10 text-accent" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-card-foreground group-hover:text-accent transition-colors duration-300">
                  Proof of Concept
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our founder has successfully navigated the complexities of selling a homegrown startup to a US-based
                  firm—we know exactly what international buyers are looking for.
                </p>
                <div className="mt-6 h-1 w-0 bg-accent rounded-full transition-all duration-500 group-hover:w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section with premium imagery */}
      <section className="relative bg-secondary py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">What We Do</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Ascend is an experienced M&A firm serving Nepal's most promising enterprises. We assist successful
              business owners with capital raising, exits, and strategic transactions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/services" className="group">
              <div className="relative h-full rounded-2xl border bg-card overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/professional-financial-charts-and-growth-graphs-on.jpg"
                    alt="Fundraising"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl" />
                      <div className="relative rounded-2xl bg-accent p-4 shadow-2xl ring-2 ring-accent/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <TrendingUp className="h-10 w-10 text-accent-foreground" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="rounded-full bg-accent/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-accent-foreground">
                      Capital Solutions
                    </div>
                  </div>
                </div>
                <div className="relative p-8">
                  <h3 className="mb-4 text-2xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                    Fundraising
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Strategic capital raising for startups and established enterprises. Whether it's Seed, Series A, or
                    Private Equity, we connect you with the right partners.
                  </p>
                  <div className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all duration-300">
                    Learn more{" "}
                    <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="relative h-full rounded-2xl border bg-card overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/corporate-merger-handshake-business-deal-modern-of.jpg"
                    alt="M&A Advisory"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl" />
                      <div className="relative rounded-2xl bg-accent p-4 shadow-2xl ring-2 ring-accent/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Building2 className="h-10 w-10 text-accent-foreground" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="rounded-full bg-accent/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-accent-foreground">
                      Strategic Deals
                    </div>
                  </div>
                </div>
                <div className="relative p-8">
                  <h3 className="mb-4 text-2xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                    M&A Advisory
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Navigating mergers and acquisitions requires more than just numbers; it requires strategy. We manage
                    the process from target identification to final integration.
                  </p>
                  <div className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all duration-300">
                    Learn more{" "}
                    <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="relative h-full rounded-2xl border bg-card overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/financial-audit-documents-analysis-professional-wo.jpg"
                    alt="Due Diligence"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl" />
                      <div className="relative rounded-2xl bg-accent p-4 shadow-2xl ring-2 ring-accent/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Shield className="h-10 w-10 text-accent-foreground" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="rounded-full bg-accent/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-accent-foreground">
                      Risk Mitigation
                    </div>
                  </div>
                </div>
                <div className="relative p-8">
                  <h3 className="mb-4 text-2xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                    Due Diligence
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Led by a Chartered Accountant, our audit process ensures that every financial, legal, and
                    operational risk is identified before the deal is signed.
                  </p>
                  <div className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all duration-300">
                    Learn more{" "}
                    <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-xl"
            >
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section with premium styling */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/business-handshake-professional.jpg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 text-center md:grid-cols-3">
            <div className="group">
              <div className="mb-3 text-6xl font-bold text-accent">$10M+</div>
              <div className="text-xl text-primary-foreground/80">Recent Transaction Value</div>
              <div className="mt-2 h-1 w-20 mx-auto bg-accent rounded-full transition-all group-hover:w-32" />
            </div>
            <div className="group">
              <div className="mb-3 text-6xl font-bold text-accent">Multi-Million</div>
              <div className="text-xl text-primary-foreground/80">USD Exit Experience</div>
              <div className="mt-2 h-1 w-20 mx-auto bg-accent rounded-full transition-all group-hover:w-32" />
            </div>
            <div className="group">
              <div className="mb-3 text-6xl font-bold text-accent">Global</div>
              <div className="text-xl text-primary-foreground/80">Investor Network</div>
              <div className="mt-2 h-1 w-20 mx-auto bg-accent rounded-full transition-all group-hover:w-32" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with premium design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary py-24">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-20 h-64 w-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 h-80 w-80 bg-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Ready to Start Your Next Chapter?
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
            Let's discuss how Ascend can help you achieve extraordinary results.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg shadow-xl"
          >
            <Link href="/contact">
              Contact Us Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
