import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { gallery } from "@/content/site";

/** 社團自己的照片。gallery 是空的就整區不渲染，不讓版面開天窗。 */
export function Gallery() {
  if (gallery.length === 0) return null;

  return (
    <section
      id="gallery"
      className="scroll-mt-16 px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display-tight text-[clamp(2.5rem,7vw,5.5rem)]">
            我們自己拍的
          </h2>
        </Reveal>

        <ul className="mt-12 grid auto-rows-[minmax(0,18rem)] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((photo, i) => (
            <Reveal
              as="li"
              key={photo.src}
              delay={(i % 4) * 70}
              className={`relative overflow-hidden rounded-2xl ${
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
