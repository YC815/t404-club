import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faq } from "@/content/site";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-border px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="FAQ"
          title="你八成會想問"
          lead="三題講完。"
        />

        <Reveal delay={80} className="mt-14 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="border-t border-border"
          >
            {faq.map((item) => (
              <AccordionItem
                key={item.q}
                value={item.q}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-6 text-left text-lg hover:no-underline sm:text-xl">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            社費、入社程序與社員權利，全寫在
            <Link
              href="/charter"
              className="ml-1 text-primary underline-offset-4 hover:underline"
            >
              組織章程 →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
