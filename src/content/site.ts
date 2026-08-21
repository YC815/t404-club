// 全站文案與連結的單一來源。改字不用碰元件。
// 空字串代表「還沒有」，元件會自動顯示成尚未開放而不是壞掉的連結。
//
// 首頁刻意只留「一定要知道」的資訊，正文控制在 400 字以內。
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

/** 首屏隨捲動依序浮現的三句話。順序＝敘事順序，不要隨便對調。 */
export const heroLines = [
  {
    text: "環島結束的那天，不是終點。",
    note: "很多人的車，那天之後就沒再動過。",
  },
  {
    text: "共同努力，但不痛苦訓練。",
    note: "沒有集訓，沒有人逼你破 PR。",
  },
  {
    text: "會騎、敢騎、騎得安全。",
    note: "先把技術補起來，速度是後面的事。",
  },
] as const;

export const about = {
  heading: "我們是誰",
  lead: "一個把環島那股勁留下來的地方。",
  body: [
    "高一環島騎完就結束了，但有些人還想再騎——只是沒人揪、沒有路線。這個社團補上那一段。",
    "不需要你很強。需要的是你還想騎。",
  ],
} as const;

/** 只留三件最有代表性的。其餘活動改以短標籤出現在 howItWorks.term，不重複描述。 */
export const activities = [
  {
    tag: "每月 1–2 次",
    title: "常態約騎",
    body: "社團的主軸。依速度分組，不會把新手騎到不見。",
  },
  {
    tag: "室內社課",
    title: "技術與安全",
    body: "換胎、落鏈、道路判讀，路上會遇到的先在室內學會。",
  },
  {
    tag: "指標賽事",
    title: "一日北高",
    body: "揪團報名、一起研究策略、路上互相照應。",
  },
] as const;

/** 講活動怎麼跑，不講幹部。幹部編制與職掌看章程第十三、十四條。 */
export const howItWorks = {
  heading: "怎麼運作",
  lead: "沒有集訓表，只有固定節奏。",
  ride: [
    { step: "01", title: "公告", body: "路線、距離、集合時間提前貼出。" },
    { step: "02", title: "報名", body: "不強制，想去再舉手。" },
    { step: "03", title: "分組", body: "依速度分快慢組。" },
    { step: "04", title: "上路", body: "前面有人帶，後面有人掃底。" },
    { step: "05", title: "收車", body: "落鏈爆胎現場處理，公用工具社團出。" },
  ],
  term: [
    { when: "開學", what: "招生，公布本學期路線" },
    { when: "每月", what: "1–2 次約騎" },
    { when: "期中", what: "室內社課：技術與補給" },
    { when: "學期末", what: "冬季破百挑戰" },
    { when: "寒假", what: "兩天一夜移地訓練" },
    { when: "全年", what: "揪團報名一日北高" },
  ],
  note: "章程、社費與重大支出由社員大會決議，帳目公開。",
} as const;

/** 只留新生真的會卡住的三題。社費、入社程序、校外車隊都在章程裡。 */
export const faq = [
  {
    q: "我沒有公路車，可以加入嗎？",
    a: "可以。通勤車、登山車都行，約騎會依車種和速度分組。",
  },
  {
    q: "會不會很硬？",
    a: "不強制參加任何一場。前面有人帶，後面有人掃底。",
  },
  {
    q: "要準備什麼？",
    a: "安全帽是唯一硬性要求。工具和打氣筒社團有公用的。",
  },
] as const;

/**
 * 社團自己的照片。檔案放 public/media/，在這裡登記。
 * 陣列留空時整個照片牆區塊不會渲染。
 */
export const gallery: { src: string; alt: string; span?: "wide" | "tall" }[] = [
  // 範例：{ src: "/media/2026-huandao-01.jpg", alt: "環島第三天，台九線", span: "wide" },
];

export const join = {
  heading: "來騎車",
  lead: "不用先變強，來了再說。",
  body: "填表單，社長確認後就是社員。學期中途也可以加入。",
} as const;
