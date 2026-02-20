const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dmsystems.in",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.technologyadvice.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
