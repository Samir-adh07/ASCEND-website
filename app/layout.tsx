import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, DM_Sans, Work_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ascendllc.com"),
  title: {
    default: "Ascend LLC - M&A Advisory & Business Brokerage in Nepal",
    template: "%s | Ascend LLC",
  },
  description:
    "Leading M&A Advisory in Nepal. Expert business brokerage, fundraising, and valuation services by CA Saurav Subedi. Connecting Nepalese enterprises with global investors for extraordinary results.",
  keywords: [
    "Business Broker Nepal",
    "M&A Advisor Kathmandu",
    "Fundraising for Nepal Startups",
    "Business Valuation Nepal",
    "Saurav Subedi CA",
    "Nepal Business Exit",
    "Private Equity Nepal",
    "Mergers and Acquisitions Nepal",
    "Nepal Investment Advisory",
    "Kathmandu Business Broker",
    "Nepal Startup Funding",
    "Business Sale Nepal",
    "Due Diligence Nepal",
    "Nepal Financial Advisory",
  ],
  authors: [{ name: "Saurav Subedi", url: "https://ascendllc.com/about" }],
  creator: "Ascend LLC",
  publisher: "Ascend LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ascendllc.com",
    title: "Ascend LLC - M&A Advisory & Business Brokerage in Nepal",
    description:
      "Local Insight. Global Capital. Extraordinary Results. Leading M&A advisory firm in Nepal connecting businesses with global investors.",
    siteName: "Ascend LLC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ascend LLC - M&A Advisory Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascend LLC - M&A Advisory & Business Brokerage in Nepal",
    description: "Local Insight. Global Capital. Extraordinary Results. Expert M&A advisory by CA Saurav Subedi.",
    images: ["/og-image.jpg"],
    creator: "@AscendLLC",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Ascend LLC",
              image: "https://ascendllc.com/og-image.jpg",
              "@id": "https://ascendllc.com",
              url: "https://ascendllc.com",
              telephone: "+977-XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kathmandu",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 27.7172,
                longitude: 85.324,
              },
              description:
                "Leading M&A Advisory and Business Brokerage firm in Nepal. Expert services in fundraising, mergers & acquisitions, business valuation, and due diligence.",
              priceRange: "$$$$",
              founder: {
                "@type": "Person",
                name: "Saurav Subedi",
                jobTitle: "Founder & CEO",
                description: "Chartered Accountant with Ivy League training and multi-million USD exit experience",
              },
              areaServed: {
                "@type": "Country",
                name: "Nepal",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "M&A Advisory",
                      description: "Expert merger and acquisition advisory services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fundraising",
                      description: "Strategic capital raising for startups and enterprises",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Valuation",
                      description: "Professional business valuation services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Due Diligence",
                      description: "Comprehensive financial and operational due diligence",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.linkedin.com/company/ascend-llc",
                "https://twitter.com/AscendLLC",
                "https://www.facebook.com/AscendLLC",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
