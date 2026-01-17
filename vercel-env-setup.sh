#!/bin/bash
# Run this after installing Vercel CLI: npm i -g vercel

echo "Setting up Vercel environment variables..."

vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production
vercel env add NEXT_PUBLIC_SANITY_DATASET production
vercel env add SANITY_API_TOKEN production

echo "Done! Now redeploy your project."
