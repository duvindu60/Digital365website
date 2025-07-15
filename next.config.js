/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, { isServer }) => {
    // Memory optimization settings
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };

    // Performance configuration for builds
    config.performance = {
      ...config.performance,
      maxAssetSize: 1024000,
      maxEntrypointSize: 1024000,
      hints: false,
    };

    // Dev environment cache settings
    if (process.env.NODE_ENV === 'development') {
      config.cache = false;
    }

    return config;
  },
  experimental: {
    optimizePackageImports: ['@/components'],
    esmExternals: 'loose',
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
  // Entry caching settings
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;
