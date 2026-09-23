import { JoinButton } from "@/components/join-button";
import { Reveal } from "@/components/reveal";
import { join, links } from "@/content/site";

export function Join() {
  return (
    <section
      id="join"
      className="scroll-mt-16 bg-primary px-5 py-24 text-primary-foreground sm:px-10 sm:py-36 lg:px-16"
    >
      <Reveal className="mx-auto max-w-7xl">
        <h2 className="display-tight text-[clamp(4rem,16vw,12rem)] leading-[0.9]">
          {join.heading}
        </h2>
        <p className="mt-6 text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold">
          {join.lead}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <JoinButton tone="ink" />
          {links.instagram ? (
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-paper px-9 py-5 text-lg font-bold text-ink transition-colors hover:bg-hivis"
            >
              Instagram
            </a>
          ) : null}
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center rounded-full bg-paper px-9 py-5 text-lg font-bold text-ink transition-colors hover:bg-hivis"
          >
            寫信問我們
          </a>
        </div>
      </Reveal>
    </section>
  );
}
