import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

export function SectionHeading({
  index,
  title,
  lead,
  children,
}: {
  index: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="label-mono">{index}</p>
      <h2 className="display-tight mt-4 text-[clamp(2rem,5.5vw,3.75rem)]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-lg text-primary sm:text-xl">{lead}</p>
      ) : null}
      {children}
    </Reveal>
  );
}
