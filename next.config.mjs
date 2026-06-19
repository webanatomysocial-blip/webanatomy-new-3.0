/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // output: 'export',
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'production' 
          ? 'https://webanatomy.mosol9.in/api/:path*' 
          : 'http://localhost:8000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
