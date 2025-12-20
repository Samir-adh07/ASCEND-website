import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, GraduationCap, TrendingUp, Globe, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Saurav Subedi - Chartered Accountant & M&A Advisor",
  description:
    "Meet Saurav Subedi FCA - Chartered Accountant with Harvard PEVC training and multi-million USD exit experience. Leading M&A advisor in Nepal with proven track record.",
  keywords: [
    "Saurav Subedi CA",
    "Chartered Accountant Nepal",
    "Harvard Business School Nepal",
    "M&A Advisor Nepal",
    "Business Exit Expert Nepal",
    "PEVC Certificate",
  ],
  openGraph: {
    title: "About Saurav Subedi - Expert M&A Advisor in Nepal | Ascend LLC",
    description:
      "Chartered Accountant with Harvard training and multi-million USD exit experience. Leading M&A advisory in Nepal.",
    url: "https://ascendllc.com/about",
    type: "profile",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-24 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/business-handshake-professional.jpg')] bg-cover bg-center opacity-5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-serif font-bold tracking-tight sm:text-6xl text-balance">
            About the Founder
          </h1>
          <p className="text-2xl text-primary-foreground/90">Meet Saurav Subedi, FCA</p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl bg-muted shadow-2xl aspect-[4/5]">
                <img
                  src="/business-executive-portrait.jpg"
                  alt="Saurav Subedi"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="mb-8 text-4xl font-serif font-bold tracking-tight text-foreground">
                A Unique Perspective
              </h2>
              <div className="space-y-6 text-lg text-foreground leading-relaxed text-justify">
                <p>
                  Saurav Subedi is a seasoned Chartered Accountant (ICAI) with a singular mission: to elevate the
                  Nepalese business ecosystem to a global standard.
                </p>
                <p>
                  With a Certificate in Private Equity and Venture Capital (PEVC) from Harvard Business School, Saurav
                  combines technical financial mastery with elite strategic insight. He is not just an advisor; he is a
                  successful entrepreneur.
                </p>
                <p>
                  Saurav founded and scaled a startup in Nepal, eventually leading it to a high-profile Multi Million
                  USD acquisition by a US-based technology firm.
                </p>
                <p>
                  Having sat on both sides of the table as a founder and as an advisor, Saurav brings a unique
                  perspective to every transaction. He has raised significant capital for multiple companies and
                  maintains deep connections with global investors looking for the next big opportunity in the Himalayan
                  region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl">
              Credentials & Experience
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Combining world-class education with real-world entrepreneurial success
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden flex flex-col items-center text-center rounded-2xl bg-white p-10 shadow-2xl transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(74,222,128,0.4)] hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -translate-y-12 translate-x-12 transition-transform group-hover:scale-150" />
              <div className="relative mb-6 rounded-2xl bg-accent/10 p-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                <Award className="h-12 w-12 text-accent" />
              </div>
              <h3 className="mb-3 text-2xl font-serif font-bold text-foreground">Chartered Accountant</h3>
              <p className="text-base font-medium text-accent">ICAI Certified</p>
              <div className="mt-4 h-1 w-16 bg-accent/30 rounded-full transition-all group-hover:w-24 group-hover:bg-accent" />
            </div>
            <div className="group relative overflow-hidden flex flex-col items-center text-center rounded-2xl bg-white p-10 shadow-2xl transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(74,222,128,0.4)] hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -translate-y-12 translate-x-12 transition-transform group-hover:scale-150" />
              <div className="relative mb-6 rounded-2xl bg-accent/10 p-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                <GraduationCap className="h-12 w-12 text-accent" />
              </div>
              <h3 className="mb-3 text-2xl font-serif font-bold text-foreground">Harvard Trained</h3>
              <p className="text-base font-medium text-accent">PEVC Certificate, HBS</p>
              <div className="mt-4 h-1 w-16 bg-accent/30 rounded-full transition-all group-hover:w-24 group-hover:bg-accent" />
            </div>
            <div className="group relative overflow-hidden flex flex-col items-center text-center rounded-2xl bg-white p-10 shadow-2xl transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(74,222,128,0.4)] hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -translate-y-12 translate-x-12 transition-transform group-hover:scale-150" />
              <div className="relative mb-6 rounded-2xl bg-accent/10 p-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                <TrendingUp className="h-12 w-12 text-accent" />
              </div>
              <h3 className="mb-3 text-2xl font-serif font-bold text-foreground">Successful Exit</h3>
              <p className="text-base font-medium text-accent">Multi-Million USD Acquisition</p>
              <div className="mt-4 h-1 w-16 bg-accent/30 rounded-full transition-all group-hover:w-24 group-hover:bg-accent" />
            </div>
            <div className="group relative overflow-hidden flex flex-col items-center text-center rounded-2xl bg-white p-10 shadow-2xl transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(74,222,128,0.4)] hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -translate-y-12 translate-x-12 transition-transform group-hover:scale-150" />
              <div className="relative mb-6 rounded-2xl bg-accent/10 p-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                <Globe className="h-12 w-12 text-accent" />
              </div>
              <h3 className="mb-3 text-2xl font-serif font-bold text-foreground">Global Network</h3>
              <p className="text-base font-medium text-accent">International Investors</p>
              <div className="mt-4 h-1 w-16 bg-accent/30 rounded-full transition-all group-hover:w-24 group-hover:bg-accent" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background py-24">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-20 h-64 w-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 h-80 w-80 bg-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Work With an Expert Who Has Been There
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
            Benefit from real-world experience in building, scaling, and successfully exiting a business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 shadow-xl"
          >
            <Link href="/contact">
              Schedule a Meeting
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
