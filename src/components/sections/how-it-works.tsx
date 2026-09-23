import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { rideSteps, term } from "@/content/site";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 bg-ink px-5 py-20 text-paper sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display-tight text-[clamp(2.5rem,7vw,5.5rem)]">
            一次約騎
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <ol className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-6">
            {rideSteps.map((step, i) => (
              <li
                key={step}
                className="display-tight flex items-center gap-4 text-[clamp(2rem,5.5vw,4.5rem)] sm:gap-6"
              >
                <span className={i === rideSteps.length - 1 ? "text-hivis" : ""}>
                  {step}
                </span>
                {i < rideSteps.length - 1 ? (
                  <span aria-hidden="true" className="text-primary">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-20 sm:mt-28">
          <h2 className="display-tight text-[clamp(2.5rem,7vw,5.5rem)]">
            一學期
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {term.map((item, i) => (
            <Reveal
              as="li"
              key={item.when}
              delay={i * 50}
              className="rounded-2xl bg-paper/8 p-5 sm:p-7"
            >
              <p className="text-base font-bold text-hivis sm:text-lg">
                {item.when}
              </p>
              <p className="display-tight mt-2 text-[clamp(1.75rem,3.6vw,2.75rem)]">
                {item.what}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80} className="mt-12">
          <Link
            href="/charter"
            className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-4 text-base font-bold text-ink transition-colors hover:bg-hivis"
          >
            章程全文
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
