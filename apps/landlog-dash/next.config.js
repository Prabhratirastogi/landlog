/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['ui', 'utils']);

const nextConfig = {
  reactStrictMode: true
};

module.exports = withTM(nextConfig);
