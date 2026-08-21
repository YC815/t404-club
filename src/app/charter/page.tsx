import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { charter, charterMeta } from "@/content/charter";
import { club } from "@/content/site";

export const metadata: Metadata = {
  title: "組織章程",
  description: `${club.name}組織章程全文，共六章二十九條。`,
};

/** 中文條號無法直接當錨點，用章／條的序號組出 ASCII id。 */
function articleId(chapterIndex: number, articleIndex: number) {
  return `c${chapterIndex + 1}-a${articleIndex + 1}`;
}

export default function CharterPage() {
  return (
    <>
      <SiteHeader />

      <main id="main" className="flex-1 px-6 pt-28 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <header className="max-w-3xl border-b border-border pb-12">
            <p className="label-mono">組織章程</p>
            <h1 className="display-tight mt-4 text-[clamp(1.75rem,4.5vw,3.25rem)]">
              {charterMeta.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {charterMeta.note}
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
            >
              <span aria-hidden="true">←</span> 回首頁
            </Link>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
            <nav
              aria-label="章程目次"
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <p className="label-mono">目次</p>
              <ol className="mt-4 space-y-5">
                {charter.map((chapter, ci) => (
                  <li key={chapter.num}>
                    <p className="text-sm font-medium">
                      {chapter.num}　{chapter.title}
                    </p>
                    <ul className="mt-2 space-y-1.5 border-l border-border pl-3">
                      {chapter.articles.map((article, ai) => (
                        <li key={article.num}>
                          <a
                            href={`#${articleId(ci, ai)}`}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {article.num}　{article.heading}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="min-w-0 space-y-16">
              {charter.map((chapter, ci) => (
                <section key={chapter.num} aria-labelledby={`c${ci + 1}`}>
                  <h2
                    id={`c${ci + 1}`}
                    className="display-tight border-b border-border pb-4 text-2xl sm:text-3xl"
                  >
                    {chapter.num}　{chapter.title}
                  </h2>

                  <div className="mt-8 space-y-10">
                    {chapter.articles.map((article, ai) => (
                      <article
                        key={article.num}
                        id={articleId(ci, ai)}
                        className="scroll-mt-24"
                      >
                        <h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="display-tight text-lg text-primary">
                            {article.num}
                          </span>
                          <span className="label-mono">{article.heading}</span>
                        </h3>
                        <div className="mt-3 space-y-3">
                          {article.paragraphs.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-[0.9375rem] leading-loose text-muted-foreground"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
