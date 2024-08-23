/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.nea.gov.sg",
        port: "",
        pathname: "/images/default-source/**",
      },
      {
        protocol: "https",
        hostname: "www.nea.gov.sg",
        port: "",
        pathname: "/images/default-source/**",
      },
    ],
  },
};

export default nextConfig;
