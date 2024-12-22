import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gtzyhzmsbukqrxnztxjc.supabase.co',
      }
    ]
  }
}

export default nextConfig
