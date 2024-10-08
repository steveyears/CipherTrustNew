/** @type {import('next').NextConfig} */
const nextConfig = {}

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  distDir: 'dist',
  assetPrefix: isProd ? '/CipherTrustNew/' : '',
  basePath: isProd ? '/CipherTrustNew' : '',
  images: {
    unoptimized: true,
  },
};
