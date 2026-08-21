import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { about } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="ABOUT"
          title={about.heading}
          lead={about.lead}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="space-y-6">
            {about.body.map((paragraph, i) => (
              <Reveal key={paragraph} delay={i * 90}>
                <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="relative aspect-4/3 overflow-hidden rounded-xs lg:aspect-3/4">
            <Image
              src="/img/pair.webp"
              alt="社員在霧中的山路獨自爬坡"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
