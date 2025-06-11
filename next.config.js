/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: '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',
  },
  images: {
    domains: ['blog.neoncobratattoo.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Optimisation pour le déploiement
  trailingSlash: false,
  output: 'standalone',
}

module.exports = nextConfig
