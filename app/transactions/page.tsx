import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recent Transactions - Success Stories & M&A Deals",
  description:
    "Explore Ascend LLC's successful M&A transactions including the $2.4M Adex International acquisition. Proven track record in Nepal business exits and fundraising.",
  keywords: [
    "Nepal M&A Transactions",
    "Business Exit Success Stories Nepal",
    "Adex International Acquisition",
    "Nepal Startup Funding",
    "Business Sale Nepal",
    "M&A Deal Nepal",
  ],
  openGraph: {
    title: "Recent Transactions - Success Stories | Ascend LLC",
    description:
      "Proven track record of successful M&A transactions in Nepal, including the $2.4M Adex International exit.",
    url: "https://ascendllc.com/transactions",
    type: "website",
  },
}

export default function TransactionsPage() {
  const transactions = [
    {
      title: "Adex International",
      subtitle: "Technology & Digital Services Company",
      location: "Kathmandu, Nepal",
      acquiredBy: "TekBay Digital (USA)",
      acquirerLocation: "United States",
      dealValue: "$2.4M",
      image: "/technology-company-office-modern.jpg",
      role: "Ascend acted as the exclusive sell-side advisor",
      isAcquisition: true,
      isLogo: false,
    },
    {
      title: "Imperial Medilink",
      subtitle: "Leading Medical Equipment Supplier",
      location: "Kathmandu, Nepal",
      acquiredBy: "Private Investors",
      acquirerLocation: "Nepal",
      dealValue: "USD 1M",
      image: "/images/imperial-medilink.png",
      role: "Ascend acted as Fundraising Consultant",
      isAcquisition: false,
      isLogo: true,
    },
    {
      title: "Sunfarmer",
      subtitle: "Solar Engineering Company",
      location: "Kathmandu, Nepal",
      acquiredBy: "Cosmic Solution",
      acquirerLocation: "Nepal",
      dealValue: "",
      image: "/images/sunfarmer.png",
      role: "Ascend Acted as buy-side Advisor",
      isAcquisition: true,
      isLogo: true,
    },
    {
      title: "Blush Beauty",
      subtitle: "Exclusive reseller of Plum India",
      location: "Kathmandu, Nepal",
      acquiredBy: "Private Investors",
      acquirerLocation: "Nepal",
      dealValue: "USD 500k",
      image: "/images/blush-beauty.png",
      role: "Ascend Acted as Fundraising Consultant",
      isAcquisition: false,
      isLogo: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-24 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/business-handshake-professional.jpg')] bg-cover bg-center opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-5xl font-serif font-bold tracking-tight sm:text-6xl text-balance">
            Recent Transactions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl text-primary-foreground/80">
            Success stories showcasing our expertise in M&A advisory and business transactions
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image with overlay effect */}
                <div className={`relative h-56 w-full overflow-hidden ${transaction.isLogo ? 'bg-white' : 'bg-muted'}`}>
                  <Image
                    src={transaction.image || "/placeholder.svg"}
                    alt={transaction.title}
                    fill
                    className={transaction.isLogo ? 'object-contain p-8 transition-transform duration-300 group-hover:scale-110' : 'object-cover transition-transform duration-500 group-hover:scale-105'}
                  />
                  {!transaction.isLogo && <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />}
                </div>

                {/* Content with refined typography */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-center text-xl font-serif font-semibold text-primary">
                    {transaction.title}
                  </h3>
                  <p className="mb-1 text-center text-sm text-muted-foreground">{transaction.subtitle}</p>
                  <p className="mb-6 text-center text-sm text-muted-foreground">{transaction.location}</p>

                  <div className="mb-4 border-t border-border pt-4">
                    <p className="mb-3 text-center text-xs uppercase tracking-wider text-muted-foreground/70">
                      {transaction.role?.includes("Fundraising") ? "Raised Funds worth" : "was acquired by"}
                    </p>
                    <div className="space-y-1">
                      <p className="text-center text-base font-semibold text-primary">
                        {transaction.role?.includes("Fundraising") ? transaction.dealValue : transaction.acquiredBy}
                      </p>
                      <p className="text-center text-sm text-muted-foreground">
                        {transaction.role?.includes("Fundraising") ? `from ${transaction.acquiredBy}, ${transaction.acquirerLocation}` : transaction.acquirerLocation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium footer with accent color */}
                <div className="bg-primary px-6 py-4 text-center">
                  <p className="text-sm font-medium text-primary-foreground">
                    {transaction.role || "Ascend acted as the exclusive sell-side advisor"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
