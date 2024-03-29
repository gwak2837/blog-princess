const withPWA = require('next-pwa')({
  buildExcludes: [/app-build-manifest\.json$/],
  customWorkerDir: 'src/worker',
  dest: 'public',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
      ],
    },
  ],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'oaidalleapiprodscus.blob.core.windows.net' }],
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = withPWA(nextConfig)
