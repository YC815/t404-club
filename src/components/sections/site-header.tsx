import Link from "next/link";

import { JoinButton } from "@/components/join-button";
import { club } from "@/content/site";

const nav = [
  { href: "/#about", label: "關於" },
  { href: "/#activities", label: "活動" },
  { href: "/#faq", label: "問答" },
  { href: "/charter", label: "章程" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-10 lg:px-16">
        <Link href="/" className="display-tight text-xl">
          {club.shortName}
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-bold transition-colors hover:bg-muted"
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
