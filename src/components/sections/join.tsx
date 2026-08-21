import Image from "next/image";

import { JoinButton } from "@/components/join-button";
import { Reveal } from "@/components/reveal";
import { join, links } from "@/content/site";

export function Join() {
  return (
    <section
      id="join"
      className="relative scroll-mt-20 overflow-hidden border-t border-border"
    >
      <Image
        src="/img/front.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-background/80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:px-10 sm:py-40 lg:px-16">
        <Reveal className="max-w-3xl">
          <p className="label-mono">JOIN</p>
          <h2 className="display-tight mt-4 text-[clamp(2.5rem,8vw,5.5rem)]">
            {join.heading}
          </h2>
          <p className="mt-6 text-xl text-primary sm:text-2xl">{join.lead}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {join.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <JoinButton />
            {links.instagram ? (
              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xs border border-border px-8 py-4 text-base transition-colors hover:border-foreground"
              >
                看我們的 Instagram
              </a>
            ) : (
              <span className="text-sm text-muted-foreground">
                Instagram 籌備中
              </span>
            )}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            有問題直接寫信：{" "}
            <a
              href={`mailto:${links.email}`}
              className="text-foreground underline underline-offset-4"
            >
              {links.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
