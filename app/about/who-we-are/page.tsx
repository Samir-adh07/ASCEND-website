import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Briefcase, GraduationCap, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Who We Are | Ascend LLC",
  description:
    "Meet Saurav Subedi, CA, MBA (Cornell). A Chartered Accountant who has successfully navigated a multimillion-dollar exit to a US-based firm.",
}

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Who We Are</h1>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Led by proven expertise and backed by real-world success in high-stakes M&A transactions
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">Meet Saurav Subedi, CA, MBA</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Saurav Subedi is a Chartered Accountant who has successfully navigated a multimillion-dollar exit to a
                  US-based firm. With a background in audit, advisory, and corporate transactions, Saurav has spent
                  years understanding how businesses grow, scale, and ultimately get sold.
                </p>
                <p>
                  His education at Cornell University's Ivy League MBA program sharpened his understanding of global
                  capital markets, while his hands-on experience founding and selling a business gave him insider
                  knowledge of what international investors look for in a target company.
                </p>
                <p>
                  Now, through Ascend, Saurav applies those lessons to help other entrepreneurs in Nepal achieve
                  extraordinary results—connecting them with strategic buyers and investors who can unlock their full
                  potential.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-[400px] w-full rounded-lg bg-muted"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Credentials</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-accent p-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Chartered Accountant</h3>
              <p className="text-sm text-muted-foreground">Professional accounting and audit expertise</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-accent p-4">
                <GraduationCap className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Cornell MBA</h3>
              <p className="text-sm text-muted-foreground">Ivy League business education</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-accent p-4">
                <Briefcase className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Successful Exit</h3>
              <p className="text-sm text-muted-foreground">Multi-million USD transaction experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-accent p-4">
                <Globe className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Global Network</h3>
              <p className="text-sm text-muted-foreground">Connections across international markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            Work with Proven Expertise
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            Partner with someone who has lived the journey from startup to successful exit.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
