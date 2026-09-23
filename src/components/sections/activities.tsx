import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { activities } from "@/content/site";

const tones = [
  "bg-primary text-primary-foreground",
  "bg-ink text-paper",
  "bg-card text-ink",
];

export function Activities() {
  return (
    <section
      id="activities"
      className="scroll-mt-16 px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display-tight text-[clamp(2.5rem,7vw,5.5rem)]">
            平常在騎什麼
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {activities.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 70}
              className={`flex aspect-square flex-col justify-between rounded-2xl p-7 sm:aspect-auto sm:min-h-80 lg:aspect-square ${tones[i % tones.length]}`}
            >
              <p className="text-xl font-bold sm:text-2xl">{item.title}</p>
              <p>
                <span className="display-tight block text-[clamp(4rem,9vw,7rem)] leading-none">
                  {item.stat}
                </span>
                <span className="mt-2 block text-lg font-bold opacity-80">
                  {item.unit}
                </span>
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal
          delay={120}
          className="relative mt-4 aspect-4/3 overflow-hidden rounded-2xl sm:aspect-21/9"
        >
          <Image
            src="/img/drivetrain.webp"
            alt="一整排公路車在夜裡停靠河濱欄杆"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <p className="display-tight absolute bottom-4 left-4 rounded-xl bg-paper px-5 py-4 text-[clamp(1.5rem,3.5vw,2.75rem)] text-ink sm:bottom-8 sm:left-8 sm:px-7 sm:py-5">
            一個人騎會停。
            <br />
            一群人騎不會。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
