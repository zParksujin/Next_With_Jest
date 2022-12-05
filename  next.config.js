const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
