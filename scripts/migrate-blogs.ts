import { client } from '../lib/sanity'
import { blogPosts } from '../lib/blogs-data'

// Function to convert text content to basic portable text blocks
function textToPortableText(content: string) {
  const paragraphs = content.split('\n\n').filter(p => p.trim())
  
  return paragraphs.map(paragraph => {
    // Handle headings
    if (paragraph.startsWith('**') && paragraph.includes(':')) {
      return {
        _type: 'block',
        _key: Math.random().toString(36).substr(2, 9),
        style: 'h3',
        children: [
          {
            _type: 'span',
            _key: Math.random().toString(36).substr(2, 9),
            text: paragraph.replace(/\*\*/g, '').replace(':', ''),
            marks: []
          }
        ],
        markDefs: []
      }
    }

    // Handle regular paragraphs with bold text
    const children = []
    let currentText = paragraph
    let textStart = 0
    
    // Simple bold text parsing
    const boldRegex = /\*\*(.*?)\*\*/g
    let match
    
    while ((match = boldRegex.exec(paragraph)) !== null) {
      // Add text before bold
      if (match.index > textStart) {
        children.push({
          _type: 'span',
          _key: Math.random().toString(36).substr(2, 9),
          text: paragraph.slice(textStart, match.index),
          marks: []
        })
      }
      
      // Add bold text
      children.push({
        _type: 'span',
        _key: Math.random().toString(36).substr(2, 9),
        text: match[1],
        marks: ['strong']
      })
      
      textStart = match.index + match[0].length
    }
    
    // Add remaining text
    if (textStart < paragraph.length) {
      children.push({
        _type: 'span',
        _key: Math.random().toString(36).substr(2, 9),
        text: paragraph.slice(textStart),
        marks: []
      })
    }

    // If no bold formatting found, just create simple text block
    if (children.length === 0) {
      children.push({
        _type: 'span',
        _key: Math.random().toString(36).substr(2, 9),
        text: paragraph,
        marks: []
      })
    }

    return {
      _type: 'block',
      _key: Math.random().toString(36).substr(2, 9),
      style: 'normal',
      children,
      markDefs: []
    }
  })
}

async function migrateBlogPosts() {
  console.log('Starting blog posts migration...')
  
  for (const post of blogPosts) {
    try {
      console.log(`Migrating: ${post.title}`)
      
      const sanityPost = {
        _type: 'blogPost',
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug
        },
        excerpt: post.excerpt,
        content: textToPortableText(post.content),
        category: post.category,
        readTime: post.readTime,
        publishedAt: new Date(post.publishedAt).toISOString(),
        // Note: Images will need to be uploaded manually through Sanity Studio
        seo: {
          metaDescription: post.excerpt,
          keywords: [post.category, 'Nepal', 'Business', 'Startup']
        }
      }

      const result = await client.create(sanityPost)
      console.log(`✅ Migrated post: ${post.title}`)
      console.log(`   Sanity ID: ${result._id}`)
    } catch (error) {
      console.error(`❌ Failed to migrate post: ${post.title}`, error)
    }
  }
  
  console.log('\nMigration completed!')
  console.log('\nNext steps:')
  console.log('1. Go to https://ascend.sanity.studio/')
  console.log('2. Upload featured images for each blog post')
  console.log('3. Review and edit the migrated content as needed')
}

// Run the migration
migrateBlogPosts().catch(console.error)