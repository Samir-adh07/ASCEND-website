import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/bgremovedascend.png"
              alt="Ascend LLC"
              width={160}
              height={40}
              className="h-9 w-auto mb-4 brightness-0 invert"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Local Insight. Global Capital. Extraordinary Results.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/transactions" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary-foreground">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">Fundraising</li>
              <li className="text-primary-foreground/80">M&A Advisory</li>
              <li className="text-primary-foreground/80">Business Brokerage</li>
              <li className="text-primary-foreground/80">Valuation</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary-foreground">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">Chakupat, Lalitpur, Nepal</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:Saurav@ascend.llc"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Saurav@ascend.llc
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="mt-0.5 h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/saurav-subedi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ascend LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
