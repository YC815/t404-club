import Link from "next/link";

import { JoinButton } from "@/components/join-button";
import { club } from "@/content/site";

const nav = [
  { href: "/#about", label: "我們是誰" },
  { href: "/#activities", label: "平常在幹嘛" },
  { href: "/#faq", label: "常見問題" },
  { href: "/charter", label: "章程" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="display-tight text-lg">{club.shortName}</span>
          <span className="label-mono hidden sm:inline">
            {club.englishName}
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-xs px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <JoinButton size="md" />
        </nav>
      </div>
    </header>
  );
}
