import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { gallery } from "@/content/site";

/** 社團自己的照片。gallery 是空的就整區不渲染，不讓版面開天窗。 */
export function Gallery() {
  if (gallery.length === 0) return null;

  return (
    <section
      id="gallery"
      className="scroll-mt-20 border-t border-border px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="GALLERY" title="我們自己拍的" />

        <ul className="mt-16 grid auto-rows-[minmax(0,18rem)] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((photo, i) => (
            <Reveal
              as="li"
              key={photo.src}
              delay={(i % 4) * 70}
              className={`relative overflow-hidden rounded-xs ${
                photo.span === "wide"
                  ? "col-span-2"
                  : photo.span === "tall"
                    ? "row-span-2"
                    : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
