import { links } from "@/content/site";

/**
 * 表單連結還沒填時不渲染死連結，改成明示「即將開放」。
 * 這樣招生期間先上線也不會出現點了沒反應的按鈕。
 */
export function JoinButton({
  className = "",
  size = "lg",
}: {
  className?: string;
  size?: "lg" | "md";
}) {
  const base =
    size === "lg"
      ? "px-8 py-4 text-base"
      : "px-5 py-2.5 text-sm";

  if (!links.joinForm) {
    return (
      <span
        className={`inline-flex cursor-not-allowed items-center gap-3 rounded-xs border border-border bg-secondary/60 font-medium text-muted-foreground ${base} ${className}`}
        aria-disabled="true"
      >
        入社表單即將開放
      </span>
    );
  }

  return (
    <a
      href={links.joinForm}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-3 rounded-xs bg-primary font-medium text-primary-foreground transition-colors hover:bg-primary/85 ${base} ${className}`}
    >
      填入社表單
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
