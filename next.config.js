/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // ✅ THIS LINE ENABLES STATIC EXPORT

  images: {
    unoptimized: true, // ✅ Disable image optimization for export
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, { isServer }) => {
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };

    config.performance = {
      ...config.performance,
      maxAssetSize: 1024000,
      maxEntrypointSize: 1024000,
      hints: false,
    };

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
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;
