import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gtzyhzmsbukqrxnztxjc.supabase.co'
      }
    ]
  }
}

export default nextConfig
