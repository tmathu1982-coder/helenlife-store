/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lệnh bài 1: Bỏ qua kiểm tra lỗi TypeScript khi build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Lệnh bài 2: Bỏ qua kiểm tra cảnh báo ESLint khi build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Cấu hình tải ảnh từ Lark
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.larksuite.com',
      },
      {
        protocol: 'https',
        hostname: '**.feishu.cn',
      },
    ],
  },
};

module.exports = nextConfig;