import Image from "next/image";

import { JoinButton } from "@/components/join-button";
import { about, club } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-hivis px-5 pt-28 pb-20 text-ink sm:px-10 sm:pt-36 sm:pb-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="inline-block rounded-full bg-ink px-4 py-1.5 text-sm font-bold text-paper sm:text-base">
            {club.shortName}
          </p>
          <h1 className="display-tight mt-6 whitespace-pre-line text-[clamp(3.25rem,10vw,8rem)] leading-[0.95]">
            {about.heading}
          </h1>
          <p className="mt-8 text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold">
            {about.line}
          </p>
          <JoinButton tone="ink" className="mt-10" />
        </div>

        <div className="relative mt-14 aspect-4/3 overflow-hidden rounded-2xl sm:aspect-16/9">
          <Image
            src="/img/pair.webp"
            alt="社員穿著車衣在廟前拉布條的大合照"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
