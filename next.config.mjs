/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mnimal-animated-hero',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig