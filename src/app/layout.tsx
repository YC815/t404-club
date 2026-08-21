import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono } from "next/font/google";

import { SmoothScroll } from "@/components/smooth-scroll";
import { club } from "@/content/site";
import "./globals.css";

// 只載拉丁字。中文交給系統字（見 globals.css 的 --font-cjk），省下數 MB 的思源黑體。
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
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
  themeColor: "#0d1013",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`${archivo.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xs focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          跳到主要內容
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
