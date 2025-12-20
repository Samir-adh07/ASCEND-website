import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Schedule a Consultation",
  description:
    "Contact Ascend LLC for M&A advisory, fundraising, and business brokerage services in Nepal. Schedule a consultation with CA Saurav Subedi today.",
  keywords: [
    "Contact M&A Advisor Nepal",
    "Business Consultation Nepal",
    "M&A Advisory Contact Kathmandu",
    "Saurav Subedi Contact",
    "Schedule Business Consultation",
  ],
  openGraph: {
    title: "Contact Us - Schedule a Consultation | Ascend LLC",
    description: "Get in touch with Nepal's leading M&A advisory firm. Schedule a consultation today.",
    url: "https://ascendllc.com/contact",
    type: "website",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
