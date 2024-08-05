/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/ciphertrust/' : '',
  basePath: isProd ? '/ciphertrust' : '',
  images: {
    unoptimized: true,
  },
};