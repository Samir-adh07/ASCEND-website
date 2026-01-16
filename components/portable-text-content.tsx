import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      
      return (
        <div className="my-12 not-prose">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={urlFor(value).width(1200).height(600).url()}
              alt={value.alt || ''}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          {value.alt && (
            <p className="text-sm text-muted-foreground mt-4 text-center italic">
              {value.alt}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-8 mt-12 text-foreground leading-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-6 mt-10 text-foreground leading-tight border-b border-border/30 pb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-foreground leading-tight">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-3 mt-6 text-foreground leading-tight">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-lg text-foreground/90">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent bg-accent/5 pl-8 py-6 my-8 italic text-foreground/80 rounded-r-lg">
        <div className="text-lg leading-relaxed">
          {children}
        </div>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-foreground/90">{children}</em>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-accent hover:text-accent/80 underline underline-offset-2 font-medium transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground border">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none space-y-3 mb-6 pl-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-3 mb-6 pl-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3">
        <span className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3"></span>
        <div className="flex-1">{children}</div>
      </li>
    ),
    number: ({ children }) => (
      <li className="mb-3 leading-relaxed">{children}</li>
    ),
  },
}

interface PortableTextContentProps {
  content: PortableTextBlock[]
}

export default function PortableTextContent({ content }: PortableTextContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={components} />
    </div>
  )
}