import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  // Un-comment the lines below and replace 'ResumeIQ' with your repo name for GitHub Pages deployment
  // basePath: '/ResumeIQ',
  // assetPrefix: '/ResumeIQ/',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
