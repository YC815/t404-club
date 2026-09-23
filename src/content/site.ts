// 全站文案與連結的單一來源。改字不用碰元件。
// 空字串代表「還沒有」，元件會自動顯示成尚未開放而不是壞掉的連結。
//
// 首頁只放一眼讀得完的大字。一句話講不完的，交給 /charter。
// 細節（幹部職掌、社費、入社程序、社員權利）一律不在這裡重述，交給 /charter。

export const club = {
  name: "臺北市數位實驗高級中等學校自行車社",
  shortName: "數位實中自行車社",
  englishName: "T-School Cycling Club",
  school: "臺北市數位實驗高級中等學校",
} as const;

export const links = {
  /** Google 表單建好後貼在這裡，入社按鈕會自動啟用。 */
  joinForm: "https://forms.gle/AZxX3BNW7MypRF9U7",
  /** 例：https://www.instagram.com/xxxxx */
  instagram: "",
  email: "11430112@tschool.tp.edu.tw",
} as const;

export const about = {
  heading: "環島之後，\n繼續騎。",
  line: "不用很強，還想騎就好。",
} as const;

/** 三件固定在做的事。stat 是大字，title 是一句話。 */
export const activities = [
  { stat: "1–2", unit: "次／月", title: "常態約騎" },
  { stat: "換胎", unit: "落鏈・路況", title: "技術社課" },
  { stat: "1", unit: "天", title: "一日北高" },
] as const;

/** 一次約騎的流程，只留動詞。細節看章程。 */
export const rideSteps = ["公告", "報名", "分組", "上路", "收車"] as const;

/** 一學期的節奏。 */
export const term = [
  { when: "開學", what: "招生" },
  { when: "每月", what: "約騎" },
  { when: "期中", what: "技術社課" },
  { when: "期末", what: "破百挑戰" },
  { when: "寒假", what: "兩天一夜" },
  { when: "全年", what: "一日北高" },
] as const;

/** 新生最常卡住的三題。答案要一眼讀完。 */
export const faq = [
  { q: "沒有公路車？", a: "可以，什麼車都行。" },
  { q: "會很硬嗎？", a: "不會，想去再去。" },
  { q: "要準備什麼？", a: "一頂安全帽。" },
] as const;

/**
 * 社團自己的照片。檔案放 public/media/，在這裡登記。
 * 陣列留空時整個照片牆區塊不會渲染。
 */
export const gallery: { src: string; alt: string; span?: "wide" | "tall" }[] = [
  // 範例：{ src: "/media/2026-huandao-01.jpg", alt: "環島第三天，台九線", span: "wide" },
];

export const join = {
  heading: "來騎車。",
  lead: "學期中也能加入。",
} as const;
