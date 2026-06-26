/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.3', '192.168.1.3:3000'],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'production' 
          ? 'https://webanatomy.in/api/:path*' 
          : 'http://187.127.182.107/api/:path*',
      },
    ];
  },
};

export default nextConfig;
