import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // SSG: 静的ファイルとしてエクスポート（Vercel静的ホスティング用）
  images: {
    // next/image を静的エクスポートで使うための設定
    unoptimized: true,
  },
};

export default nextConfig;
