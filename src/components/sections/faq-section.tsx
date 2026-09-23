import { Reveal } from "@/components/reveal";
import { faq } from "@/content/site";

/** 答案都只有一句，直接攤開，不藏在折疊裡。 */
export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-16 px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display-tight text-[clamp(2.5rem,7vw,5.5rem)]">
            你可能想問
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {faq.map((item, i) => (
            <Reveal
              as="li"
              key={item.q}
              delay={i * 70}
              className="rounded-2xl bg-card p-7 sm:p-8"
            >
              <p className="text-xl font-bold text-primary sm:text-2xl">
                {item.q}
              </p>
              <p className="display-tight mt-4 text-[clamp(2rem,3.6vw,2.75rem)]">
                {item.a}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
