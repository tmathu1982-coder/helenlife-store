import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// CẤU HÌNH METADATA CHUẨN SEO CHO HELEN LIFE
export const metadata: Metadata = {
  title: "Helen Life | Dinh Dưỡng Xanh Cho Năng Suất Bền",
  description: "CÔNG TY CỔ PHẦN ĐẦU TƯ HELEN LIFE. Đồng hành cùng nhà nông bằng những giải pháp thực tiễn, sản phẩm chất lượng và dịch vụ tận tâm.",
  keywords: [
    "Helen Life",
    "Công ty Helen Life",
    "Phân gà hữu cơ Helen Life",
    "Phân bón sinh học Phước Thắng",
    "Dịch trùn quế cao cấp",
    "Nông nghiệp bền vững",
    "Cải tạo đất"
  ],
  authors: [{ name: "Helen Life" }],
  icons: {
    // Đảm bảo trò đã lưu file logo vào thư mục public với tên "logo-helenlife.png"
    icon: "/logo-helenlife.png", 
    shortcut: "/logo-helenlife.png",
    apple: "/logo-helenlife.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}