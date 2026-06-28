import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Server, Code2, Cloud } from "lucide-react";
import { Tag } from "@/components/Tag";
import { SKILLS, WORKS } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Kochi.Labo | Webエンジニアポートフォリオ",
};

const iconMap: Record<string, React.ReactNode> = {
  server: <Server size={22} />,
  code: <Code2 size={22} />,
  cloud: <Cloud size={22} />,
};

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center px-6">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-5xl mx-auto w-full relative">
          <p className="text-xs font-mono text-primary mb-5 tracking-[0.2em] flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-primary" />
            Web Engineer Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.15] mb-6 tracking-tight">
            要件定義から<br />実装まで。
            <span className="block text-primary mt-2">課題解決できる</span>
            <span className="block">Webエンジニア。</span>
          </h1>
          <p className="text-muted-foreground max-w-lg text-sm leading-relaxed mb-10">
            PHP / Laravel・React / Next.js を軸に、バックエンドからフロントエンドまで
            一貫して開発できるエンジニアです。製造業での「改善思考」を武器に課題解決に挑みます。
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/works"
              className="bg-primary text-primary-foreground px-7 py-3 text-sm font-medium rounded hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              作品を見る <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="border border-border text-foreground px-7 py-3 text-sm rounded hover:border-primary hover:text-primary transition-colors"
            >
              自己紹介を見る
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/40">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-muted-foreground/30" />
          <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
        </div>
      </section>

      {/* ── Skills summary ── */}
      <section className="border-t border-border py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
          {SKILLS.map((s) => (
            <Link
              key={s.title}
              href="/skills"
              className="text-left border border-border rounded-xl p-6 hover:border-primary/50 transition-all group bg-card"
            >
              <div className="text-primary mb-3">{iconMap[s.icon]}</div>
              <p className="text-xs font-mono text-muted-foreground mb-1 group-hover:text-primary/70 transition-colors">
                {s.sub}
              </p>
              <p className="text-sm font-semibold mb-3">{s.title}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.slice(0, 3).map((t) => (
                  <Tag key={t} text={t} />
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Works preview ── */}
      <section className="py-16 px-6 bg-card border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-mono text-primary mb-1 tracking-widest">// Works</p>
              <h2 className="text-2xl font-bold">注目の制作物</h2>
            </div>
            <Link
              href="/works"
              className="text-xs font-mono text-primary flex items-center gap-1 hover:gap-2 transition-all"
            >
              全て見る <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {WORKS.map((w) => (
              <Link
                key={w.slug}
                href={`/works/${w.slug}`}
                className="border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all group bg-background"
              >
                <div className="overflow-hidden h-44 bg-muted relative">
                  <Image
                    src={w.img}
                    alt={w.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {w.tags.slice(0, 3).map((t) => (
                      <Tag key={t} text={t} />
                    ))}
                  </div>
                  <h3 className="font-bold text-base">{w.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{w.subtitle}</p>
                  <p className="flex items-center gap-1 text-xs font-mono text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    詳細を見る <ArrowRight size={11} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono text-primary mb-3 tracking-widest">// Contact</p>
          <h2 className="text-2xl font-bold mb-4">お気軽にお問い合わせください</h2>
          <p className="text-muted-foreground text-sm mb-8">
            プロジェクト推進に役立つスキルを習得中です！アプリ制作に励んでおりますので、よろしくお願いします！
          </p>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-3 text-sm font-medium rounded hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <Mail size={16} /> お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </>
  );
}
