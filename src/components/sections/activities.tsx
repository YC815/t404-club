import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { activities } from "@/content/site";

export function Activities() {
  return (
    <section
      id="activities"
      className="scroll-mt-20 border-t border-border px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="WHAT WE DO"
          title="我們平常在幹嘛"
          lead="固定在做的就這三件事。"
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-xs border border-border bg-border sm:grid-cols-3">
          {activities.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 70}
              className="flex flex-col gap-4 bg-background p-8 sm:p-10"
            >
              <span className="label-mono">{item.tag}</span>
              <h3 className="display-tight text-2xl sm:text-3xl">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal
          delay={120}
          className="relative mt-12 aspect-21/9 overflow-hidden rounded-xs"
        >
          <Image
            src="/img/drivetrain.webp"
            alt="一整排公路車在夜裡停靠河濱欄杆"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent"
            aria-hidden="true"
          />
          <p className="display-tight absolute bottom-6 left-6 max-w-md text-xl sm:bottom-10 sm:left-10 sm:text-3xl">
            一個人騎會停。
            <br />
            一群人騎不會。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
