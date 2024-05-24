/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["res.cloudinary.com", "https://www.canva.com/", ""],
    },
    env: {
      URL: "http://localhost:3000",
    },
    reactStrictMode: false,
  };
  
export default nextConfig;