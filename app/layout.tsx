import type { Metadata } from "next";
// import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// const notoSansJP = Noto_Sans_JP({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: {
    default: "Kochi.Labo | Webエンジニアポートフォリオ",
    template: "%s | Kochi.Labo",
  },
  description:
    "PHP / Laravel・React / Next.js を軸に、バックエンドからフロントエンドまで一貫して開発できるWebエンジニアのポートフォリオサイトです。",
  openGraph: {
    title: "Kochi.Labo | Webエンジニアポートフォリオ",
    description:
      "要件定義から実装まで。課題解決できるWebエンジニアを目指す。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* <body className={notoSansJP.className}> */}
      <body>
        <Nav />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
