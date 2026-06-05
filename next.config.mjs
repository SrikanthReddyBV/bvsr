/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required by Next.js for static HTML exports
  },
};

export default nextConfig;