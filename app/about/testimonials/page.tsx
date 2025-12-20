import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Client Testimonials | Ascend LLC",
  description: "What our clients say about working with Ascend on their M&A transactions and business growth.",
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "Saurav's expertise and network were instrumental in connecting us with the right investors. His understanding of both local and international markets is unmatched.",
      author: "Tech Startup Founder",
      company: "Kathmandu",
      deal: "Series A Fundraising",
    },
    {
      quote:
        "The due diligence process was thorough and professional. Ascend identified risks we hadn't considered and helped us negotiate better terms.",
      author: "Manufacturing Business Owner",
      company: "Biratnagar",
      deal: "Business Sale",
    },
    {
      quote:
        "Working with Ascend gave us confidence throughout the M&A process. Their attention to detail and strategic guidance made all the difference.",
      author: "Healthcare Services CEO",
      company: "Pokhara",
      deal: "Strategic Partnership",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">What Our Clients Say</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Don't just take our word for it. Hear from business owners who have worked with Ascend.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                <Quote className="mb-4 h-8 w-8 text-primary" />
                <p className="mb-6 text-muted-foreground italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  <div className="mt-2 text-sm font-medium text-primary">{testimonial.deal}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 text-5xl font-bold">100%</div>
              <div className="text-lg text-primary-foreground/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="mb-2 text-5xl font-bold">$2.4M</div>
              <div className="text-lg text-primary-foreground/80">Recent Transaction Value</div>
            </div>
            <div>
              <div className="mb-2 text-5xl font-bold">Global</div>
              <div className="text-lg text-primary-foreground/80">Investor Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Ready to Write Your Success Story?
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Join the growing list of successful entrepreneurs who have worked with Ascend.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
