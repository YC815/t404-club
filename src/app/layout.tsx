import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono, Noto_Sans_TC } from "next/font/google";

import { club } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

// 只給標題用的 Black 一個字重。Google 依 unicode-range 切片，瀏覽器只抓頁面上出現的字。
const notoTC = Noto_Sans_TC({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-noto-tc",
  display: "swap",
  preload: false,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "把高一環島那股勁留下來的地方。固定約騎、技術社課，一起挑戰一日北高。不論你騎什麼車都歡迎。";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: `${club.shortName}｜${club.englishName}`,
    template: `%s｜${club.shortName}`,
  },
  description,
  openGraph: {
    title: `${club.shortName}｜${club.englishName}`,
    description,
    type: "website",
    locale: "zh_TW",
    siteName: club.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f5ef",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`${archivo.variable} ${notoTC.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          跳到主要內容
        </a>
        {children}
      </body>
    </html>
  );
}
