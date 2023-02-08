/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com',
      'links.papareact.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
      'pbs.twimg.com',
      'user-images.githubusercontent.com'],
  }
}

module.exports = nextConfig
