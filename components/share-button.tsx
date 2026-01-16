"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

interface ShareButtonProps {
  title: string
  excerpt: string
}

export default function ShareButton({ title, excerpt }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: excerpt,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = window.location.href
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleShare}
      className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Share2 className="h-4 w-4" />
      Share
    </Button>
  )
}