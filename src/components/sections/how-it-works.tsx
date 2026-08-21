import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-t border-border px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="HOW IT WORKS"
          title={howItWorks.heading}
          lead={howItWorks.lead}
        />

        <Reveal className="mt-16">
          <p className="label-mono">一次約騎</p>
        </Reveal>
        <ol className="mt-5 grid gap-px overflow-hidden rounded-xs border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {howItWorks.ride.map((item, i) => (
            <Reveal
              as="li"
              key={item.step}
              delay={i * 60}
              className="flex flex-col gap-2 bg-background p-6"
            >
              <span className="display-tight text-3xl text-primary">
                {item.step}
              </span>
              <h3 className="display-tight text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16">
          <p className="label-mono">一學期</p>
        </Reveal>
        <ul className="mt-5 border-t border-border">
          {howItWorks.term.map((item, i) => (
            <Reveal
              as="li"
              key={item.when}
              delay={i * 50}
              className="grid gap-1 border-b border-border py-5 md:grid-cols-[8rem_1fr] md:gap-10"
            >
              <p className="label-mono">{item.when}</p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {item.what}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80} className="mt-10 flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {howItWorks.note}
          </p>
          <Link
            href="/charter"
            className="group inline-flex items-center gap-3 self-start text-base text-primary underline-offset-4 hover:underline"
          >
            讀組織章程全文
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
