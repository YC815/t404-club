import Link from "next/link";

import { club, links } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-12 text-paper sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display-tight text-2xl">{club.shortName}</p>
          <p className="label-mono mt-2 text-paper/60">{club.englishName}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
          <Link href="/charter" className="hover:text-hivis">
            組織章程
          </Link>
          <a href={`mailto:${links.email}`} className="hover:text-hivis">
            {links.email}
          </a>
          {links.instagram ? (
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-hivis"
            >
              Instagram
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
