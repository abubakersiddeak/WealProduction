/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@react-pdf/renderer'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", // অথবা প্রয়োজনমতো নির্দিষ্ট path pattern দিন
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
