import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Users, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Sell Your Business | Ascend LLC",
  description: "Thinking about selling your business? Let Ascend connect you with qualified buyers.",
}

export default function SellBusinessPage() {
  const benefits = [
    "Access to qualified domestic and international buyers",
    "Professional business valuation",
    "Confidential marketing process",
    "Expert negotiation support",
    "Due diligence coordination",
    "Transaction structuring guidance",
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Sell Your Business</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Maximize value and find the right buyer for your life's work
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Why Sell Through Ascend?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Selling your business is one of the most important decisions you'll make. Our proven process ensures you
              achieve maximum value while maintaining confidentiality throughout the transaction.
            </p>
          </div>

          <div className="mb-12 rounded-lg border bg-card p-8">
            <h3 className="mb-6 text-2xl font-bold text-card-foreground">What You Get:</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Maximize Your Value</h3>
                <p className="text-muted-foreground">
                  Our founder successfully exited his own business for multiple millions. We know how to position your
                  company to attract premium offers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Access to Qualified Buyers</h3>
                <p className="text-muted-foreground">
                  Our network includes strategic buyers, private equity firms, and high-net-worth individuals actively
                  seeking opportunities in Nepal.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Confidential Process</h3>
                <p className="text-muted-foreground">
                  We protect your confidentiality throughout the sale process, ensuring employees, customers, and
                  competitors remain unaware until you're ready to announce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Our Selling Process</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We discuss your goals, timeline, and what you're looking for in a buyer",
              },
              {
                step: "2",
                title: "Business Preparation",
                description: "Prepare financials, create marketing materials, and conduct valuation",
              },
              {
                step: "3",
                title: "Buyer Identification",
                description: "Confidentially market to qualified buyers matching your criteria",
              },
              {
                step: "4",
                title: "Negotiation & Due Diligence",
                description: "Manage offers, negotiations, and coordinate the due diligence process",
              },
              {
                step: "5",
                title: "Transaction Close",
                description: "Guide you through closing and ensure smooth transition to new ownership",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border bg-card p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-card-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Ready to Explore Selling Your Business?
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Schedule a confidential consultation to discuss your options
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
