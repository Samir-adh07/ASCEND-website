"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About the Founder", href: "/about" },
    { name: "Transaction Gallery", href: "/transactions" },
    { name: "Contact Us", href: "/contact" },
  ]

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

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

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} aria-hidden="true">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

          {/* Mobile menu panel */}
          <div
            className="absolute inset-x-0 top-16 z-50 bg-background border-b shadow-lg animate-in slide-in-from-top-2 duration-300"
            onClick={handleMenuClick}
          >
            <div className="px-6 py-4">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted active:bg-muted/80 transition-all duration-200 touch-manipulation"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    <Link
                      href="/contact"
                      className="block rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-3 text-center font-medium transition-all"
                    >
                      Book a Consultation
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
