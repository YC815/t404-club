// 把來源影片轉成捲動逐幀序列。用法：node scripts/build-frames.mjs [--probe]
// 需要 ffmpeg 與 cwebp（brew install ffmpeg webp）。
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, readdirSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const SRC = process.env.FRAMES_SRC ?? "";
const OUT = "public/frames";
const TMP = ".frames-tmp";
const FRAME_COUNT = 96;

// 深夜競技感調色：壓暗、降飽和、冷調陰影、加對比。
const GRADE = [
  // 先去噪：暗部森林雜訊最吃 WebP 位元數，去掉可省三成體積且畫面更乾淨。
  "hqdn3d=3:2:4:4",
  "eq=brightness=-0.05:contrast=1.16:saturation=0.55",
  "colorbalance=rs=-0.05:bs=0.08:rm=-0.03:bm=0.05:rh=-0.04:bh=0.04",
  "curves=all='0/0 0.25/0.15 0.5/0.47 0.75/0.79 1/1'",
].join(",");

const VARIANTS = [
  { name: "desktop", width: 1600, height: 900, quality: 52 },
  { name: "mobile", width: 900, height: 506, quality: 48 },
];

function ffprobeDuration(file) {
  const out = execFileSync("ffprobe", [
    "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file,
  ]);
  return parseFloat(out.toString().trim());
}

function extract(file, variant, duration) {
  const dir = join(TMP, variant.name);
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  const fps = FRAME_COUNT / duration;
  execFileSync("ffmpeg", [
    "-v", "error", "-i", file,
    "-vf", `fps=${fps},${GRADE},scale=${variant.width}:${variant.height}:flags=lanczos`,
    "-frames:v", String(FRAME_COUNT),
    join(dir, "%04d.png"),
  ]);
  return dir;
}

function encode(pngDir, variant) {
  const outDir = join(OUT, variant.name);
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });
  const files = readdirSync(pngDir).filter((f) => f.endsWith(".png")).sort();
  for (const f of files) {
    execFileSync("cwebp", [
      "-quiet", "-q", String(variant.quality), "-m", "6", "-sharp_yuv",
      join(pngDir, f), "-o", join(outDir, f.replace(".png", ".webp")),
    ]);
  }
  const bytes = readdirSync(outDir).reduce((n, f) => n + statSync(join(outDir, f)).size, 0);
  console.log(`${variant.name}: ${files.length} 幀，${(bytes / 1024 / 1024).toFixed(2)} MB`);
  return files.length;
}

if (!SRC) {
  console.error("請設定 FRAMES_SRC=<影片路徑>");
  process.exit(1);
}

const duration = ffprobeDuration(SRC);
let count = 0;
for (const v of VARIANTS) {
  count = encode(extract(SRC, v, duration), v);
}
rmSync(TMP, { recursive: true, force: true });

writeFileSync(
  join(OUT, "manifest.json"),
  JSON.stringify({ frameCount: count, width: VARIANTS[0].width, height: VARIANTS[0].height }, null, 2) + "\n",
);
console.log(`manifest 已寫入，共 ${count} 幀`);
