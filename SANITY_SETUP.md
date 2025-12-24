# Sanity CMS Integration Setup Guide

## Overview

This project now integrates with Sanity CMS for blog content management. You can manage blog posts through Sanity's Studio interface instead of hardcoding them in TypeScript files.

## Setup Instructions

### 1. Create a Sanity Account

1. Visit [sanity.io](https://www.sanity.io/) and create an account
2. Create a new project or use an existing one

### 2. Get Your Project Credentials

1. Go to your Sanity project dashboard
2. Navigate to **Settings** → **API**
3. Copy your **Project ID**
4. Create an API token:
   - Click "Add API token"
   - Name it (e.g., "ASCEND Website")
   - Set permissions to "Editor" or "Admin"
   - Copy the generated token

### 3. Configure Environment Variables

Update your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

### 4. Start Sanity Studio

Run the following command to start Sanity Studio locally:

```bash
npm run sanity
```

This will open Sanity Studio at `http://localhost:3333` where you can:
- Create and edit blog posts
- Upload and manage images
- Preview content before publishing

### 5. Deploy Sanity Studio (Optional)

To deploy Sanity Studio for team access:

```bash
npm run sanity:deploy
```

This will give you a URL where team members can access the CMS.

## Features

### Content Management
- Rich text editor with formatting options
- Image uploads with alt text
- SEO metadata (meta description, keywords)
- Category management
- Publishing date control
- Read time estimation

### Blog Post Schema
Each blog post includes:
- Title and slug (URL-friendly version)
- Excerpt (short description)
- Rich content with images, headings, links
- Category selection
- Read time in minutes
- Published date
- Featured image with alt text
- SEO settings

### Integration Points
- **Blog listing page**: Fetches all posts from Sanity
- **Individual blog pages**: Renders rich content with PortableText
- **Category filtering**: Filter posts by category
- **Related posts**: Shows posts from the same category
- **Image optimization**: Automatic image optimization via Sanity CDN

## Content Migration

If you have existing blog content, you can use the migration script:

```bash
npx ts-node scripts/migrate-blogs.ts
```

Note: This will migrate text content. You'll need to upload images manually through Sanity Studio.

## Development Workflow

1. **Content Creation**: Use Sanity Studio to create/edit blog posts
2. **Preview**: Content appears immediately on your website
3. **Collaboration**: Team members can access Sanity Studio to manage content
4. **Version Control**: All content is stored in Sanity's cloud, with revision history

## File Structure

```
├── lib/
│   ├── sanity.ts                 # Sanity client configuration
│   └── sanity-blog-data.ts       # Blog data fetching functions
├── components/
│   └── portable-text-content.tsx # Rich content renderer
├── sanity/
│   └── schemaTypes/
│       ├── blogPost.ts           # Blog post schema
│       └── index.ts              # Schema exports
├── sanity.config.ts              # Main Sanity configuration
└── scripts/
    └── migrate-blogs.ts          # Data migration script
```

## Commands

- `npm run sanity` - Start Sanity Studio locally
- `npm run sanity:build` - Build Sanity Studio for production
- `npm run sanity:deploy` - Deploy Sanity Studio

## Support

For Sanity-specific issues, refer to:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community)