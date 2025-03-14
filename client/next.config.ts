import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gtzyhzmsbukqrxnztxjc.supabase.co'
      },
      {
        protocol: 'https',
        hostname: 'dkptlbbfulctevfupufg.supabase.co'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      }
    ]
  },
  reactStrictMode: false
}

export default nextConfig
