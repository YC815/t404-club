import Link from "next/link";

import { club, links } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display-tight text-2xl">{club.name}</p>
          <p className="label-mono mt-2">{club.englishName}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:items-end">
          <Link
            href="/charter"
            className="transition-colors hover:text-foreground"
          >
            組織章程
          </Link>
          <a
            href={`mailto:${links.email}`}
            className="transition-colors hover:text-foreground"
          >
            {links.email}
          </a>
          {links.instagram ? (
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          ) : null}
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl text-xs text-muted-foreground">
        首屏與內頁影像取自 Pexels，依 Pexels License 使用，出處記錄於
        <code className="mx-1 font-mono">public/frames/CREDITS.md</code>。
      </p>
    </footer>
  );
}
