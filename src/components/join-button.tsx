import { links } from "@/content/site";

/**
 * 表單連結還沒填時不渲染死連結，改成明示「即將開放」。
 * 這樣招生期間先上線也不會出現點了沒反應的按鈕。
 */
export function JoinButton({
  className = "",
  size = "lg",
  tone = "primary",
}: {
  className?: string;
  size?: "lg" | "md";
  /** primary：紅底白字；ink：黑底白字，放在紅色區塊上用。 */
  tone?: "primary" | "ink";
}) {
  const base =
    size === "lg" ? "px-9 py-5 text-lg" : "px-5 py-2.5 text-sm";

  if (!links.joinForm) {
    return (
      <span
        className={`inline-flex cursor-not-allowed items-center rounded-full bg-muted font-bold text-muted-foreground ${base} ${className}`}
        aria-disabled="true"
      >
        入社表單即將開放
      </span>
    );
  }

  const color =
    tone === "ink"
      ? "bg-ink text-paper hover:bg-ink/85"
      : "bg-primary text-primary-foreground hover:bg-primary/90";

  return (
    <a
      href={links.joinForm}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full font-bold transition-colors ${color} ${base} ${className}`}
    >
      加入社團
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
