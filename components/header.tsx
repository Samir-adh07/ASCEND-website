"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About the Founder", href: "/about" },
    { name: "Transaction Gallery", href: "/transactions" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <Image
              src="/ascend-logo.png"
              alt="Ascend"
              width={160}
              height={40}
              className="h-9 w-auto transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-muted/50 active:bg-muted transition-colors touch-manipulation"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium shadow-sm">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        
        {/* Mobile menu panel */}
        <div className={`absolute inset-x-0 top-0 z-[70] bg-background border-b shadow-lg transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Image 
                  src="/ascend-logo.png" 
                  alt="Ascend" 
                  width={160} 
                  height={40} 
                  className="h-8 w-auto" 
                  priority
                  loading="eager"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground hover:bg-muted/50 active:bg-muted transition-colors touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className={`mt-6 space-y-1 transition-all duration-300 delay-75 ${
              mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted active:bg-muted/80 transition-all duration-200 touch-manipulation transform ${
                    mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ 
                    transitionDelay: mobileMenuOpen ? `${100 + index * 50}ms` : '0ms' 
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className={`pt-4 transition-all duration-300 delay-300 ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80 touch-manipulation transition-all duration-200">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Book a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
