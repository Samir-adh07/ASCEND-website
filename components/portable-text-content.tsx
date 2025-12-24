import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(400).url()}
            alt={value.alt || ''}
            width={800}
            height={400}
            className="rounded-lg object-cover"
          />
          {value.alt && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {value.alt}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-3 mt-4">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
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