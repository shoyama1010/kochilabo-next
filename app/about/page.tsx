import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Accordion } from "@/components/Accordion";
import { TIMELINE } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "自己紹介",
  description: "Kochi.Laboの自己紹介と活動内容。製造業からWebエンジニアへの転身ストーリー。",
};

export default function About() {
  return (
    <section className="pt-8 pb-24 px-6 max-w-5xl mx-auto">
      <Breadcrumb items={[{ label: "/", href: "/" }, { label: "自己紹介" }]} />

      <h1 className="text-4xl font-bold mb-2">
        Kochi.Laboの<br className="md:hidden" />自己紹介と活動内容
      </h1>
      <div className="h-0.5 w-12 bg-primary mb-10 mt-4" />

      <div className="grid md:grid-cols-2 gap-14 mb-16">
        {/* 自己紹介文 */}
        <div className="space-y-4 text-sm text-muted-foreground leading-loose">
          <p>はじめまして。Kochi.Laboです。</p>
          <p>
            製造業で長年勤務し、生産現場や品質管理などの実務を経験してきました。
            現場では常に「改善」や「効率化」を意識しながら業務に取り組んできました。
          </p>
          <p>
            その後、以前から興味のあったIT業界への挑戦を決意し、
            本格的にWebエンジニアの学習を開始しました。
          </p>
          <p>
            現在はLaravel・PHPを中心としたバックエンド開発に加え、
            React・Next.jsを活用したフロントエンド開発にも取り組んでいます。
          </p>
          <p>
            要件定義から設計、実装、テスト、本番環境への公開まで一貫して経験し、
            実践的なWebアプリケーション開発を継続しています。
          </p>
        </div>

        {/* タイムライン */}
        <div>
          <p className="text-xs font-mono text-primary mb-5 tracking-widest">
            {"// Timeline"}
          </p>
          <div className="space-y-0">
            {TIMELINE.map((t, i) => (
              <div key={i} className="flex gap-5 pb-8 last:pb-0">
                <div className="flex flex-col items-center pt-1">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-primary bg-background shrink-0" />
                  {i < TIMELINE.length - 1 && (
                    <div className="w-px flex-1 bg-primary/25 mt-1.5" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-mono text-primary mb-0.5">{t.year}</p>
                  <p className="text-sm font-semibold mb-1">{t.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {/* {t.detail} */}
                    {t.summary ?? t.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* アコーディオン */}
      <div className="border-t border-border pt-10">
        <p className="text-xs font-mono text-primary mb-5 tracking-widest">
          {"// 自己紹介を見る"}
        </p>
        <div className="max-w-2xl">
          {TIMELINE.map((t) => (
            <Accordion key={t.year} label={t.label}>
              {t.detail}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
