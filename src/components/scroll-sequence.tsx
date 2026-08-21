"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import manifest from "../../public/frames/manifest.json";
import { club, heroLines } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = manifest.frameCount;
const BATCH_SIZE = 8;

function framePath(variant: "desktop" | "mobile", index: number) {
  return `/frames/${variant}/${String(index + 1).padStart(4, "0")}.webp`;
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** 以 cover 的方式把整張幀畫滿畫布，維持比例、裁掉溢出的部分。 */
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
) {
  const scale = Math.max(width / img.width, height / img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  ctx.drawImage(img, (width - w) / 2, (height - h) / 2, w, h);
}

export function ScrollSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // 手機或使用者開了節省流量時，改用小尺寸序列（2.3 MB 對 4.9 MB）。
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData ?? false;
    const variant: "desktop" | "mobile" =
      window.innerWidth < 768 || saveData ? "mobile" : "desktop";

    const images: (HTMLImageElement | undefined)[] = new Array(FRAME_COUNT);
    let current = 0;
    let cancelled = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = canvas;
      canvas.width = Math.round(clientWidth * dpr);
      canvas.height = Math.round(clientHeight * dpr);
      render(current);
    };

    function render(index: number) {
      const clamped = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(index)));
      // 這一幀還沒下載完就沿用前一幀，寧可停格也不要閃白。
      const img = images[clamped] ?? images[current];
      if (!img || !ctx || !canvas) return;
      current = images[clamped] ? clamped : current;
      drawCover(ctx, img, canvas.width, canvas.height);
    }

    let trigger: ScrollTrigger | undefined;
    let timeline: gsap.core.Timeline | undefined;

    const start = async () => {
      // 先把第一幀畫出來，讓首屏立刻有東西看。
      images[0] = await loadImage(framePath(variant, 0));
      if (cancelled) return;
      resize();
      setProgress(1 / FRAME_COUNT);

      for (let i = 1; i < FRAME_COUNT; i += BATCH_SIZE) {
        const batch = Array.from(
          { length: Math.min(BATCH_SIZE, FRAME_COUNT - i) },
          (_, k) => i + k,
        );
        const loaded = await Promise.all(
          batch.map((n) => loadImage(framePath(variant, n)).catch(() => undefined)),
        );
        if (cancelled) return;
        batch.forEach((n, k) => (images[n] = loaded[k]));
        setProgress((i + batch.length) / FRAME_COUNT);
      }

      setReady(true);
      if (reduced) return;

      // 幀圖到齊才接上捲動，避免捲到一半卡在沒有影像的區段。
      const state = { frame: 0 };
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });
      trigger = timeline.scrollTrigger;

      timeline.to(
        state,
        {
          frame: FRAME_COUNT - 1,
          ease: "none",
          duration: 3,
          onUpdate: () => render(state.frame),
        },
        0,
      );

      if (titleRef.current) {
        timeline.to(
          titleRef.current,
          { autoAlpha: 0, y: -32, duration: 0.35, ease: "power1.in" },
          0.2,
        );
      }

      lineRefs.current.forEach((el, i) => {
        if (!el) return;
        const at = 0.7 + i * 0.75;
        timeline!
          .fromTo(
            el,
            { autoAlpha: 0, y: 28 },
            { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" },
            at,
          )
          .to(
            el,
            { autoAlpha: 0, y: -28, duration: 0.25, ease: "power2.in" },
            at + 0.5,
          );
      });

      ScrollTrigger.refresh();
    };

    void start();
    window.addEventListener("resize", resize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", resize);
      trigger?.kill();
      timeline?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[420vh] motion-reduce:h-auto"
      aria-label="社團首頁主視覺"
    >
      <div className="sticky top-0 h-svh overflow-hidden motion-reduce:static motion-reduce:h-auto motion-reduce:min-h-svh">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full motion-reduce:h-svh"
          aria-hidden="true"
        />
        {/* 影像上壓一層漸層，讓文字在任何一幀上都讀得到。 */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/25 to-background"
          aria-hidden="true"
        />

        <div className="relative flex h-full flex-col justify-between px-6 py-8 motion-reduce:min-h-svh sm:px-10 lg:px-16">
          <div
            ref={titleRef}
            className="max-w-3xl pt-[18svh] motion-reduce:pt-[12svh]"
          >
            <p className="label-mono">{club.school}</p>
            <h1 className="display-tight mt-4 text-[clamp(2.75rem,9vw,7rem)]">
              自行車社
            </h1>
            <p className="display-tight mt-2 text-[clamp(1rem,2.6vw,1.9rem)] text-primary">
              T-SCHOOL CYCLING CLUB
            </p>
          </div>

          {/* 隨捲動依序浮現的三句話；動態關閉時全部靜態列出。 */}
          <div className="pointer-events-none absolute inset-x-6 top-1/2 -translate-y-1/2 motion-reduce:static motion-reduce:mt-12 motion-reduce:translate-y-0 motion-reduce:space-y-8 sm:inset-x-10 lg:inset-x-16">
            {heroLines.map((line, i) => (
              <div
                key={line.text}
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                className="motion-safe:absolute motion-safe:inset-x-0 motion-safe:opacity-0"
              >
                <p className="display-tight max-w-2xl text-[clamp(1.75rem,5.5vw,4rem)]">
                  {line.text}
                </p>
                <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
                  {line.note}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-end justify-between gap-6">
            <p className="label-mono hidden sm:block">往下捲動</p>
            <div className="w-full max-w-[9rem] sm:max-w-[12rem]">
              <div
                className="h-px w-full bg-border"
                role="progressbar"
                aria-label="主視覺影像載入進度"
                aria-valuenow={Math.round(progress * 100)}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-px bg-primary transition-[width] duration-300"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
              <p className="label-mono mt-2">
                {ready ? "已就緒" : `載入中 ${Math.round(progress * 100)}%`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
