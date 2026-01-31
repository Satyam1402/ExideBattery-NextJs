import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://chatlyfy.com; connect-src 'self' https://chatlyfy.com wss://chatlyfy.com;"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
