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
      
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-[1.25fr_0.75fr] gap-12 items-center">
          {/* 左側 */}
          <div>
            <p className="text-xs font-mono text-primary mb-5 tracking-[0.2em] flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary" />
              Web Engineer Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.15] tracking-tight">
              現場の要件課題を
              <span className="block text-primary mt-2">
                {/* 課題解決できる */}
                技術で解決できる
              </span>
              <span className="block">Webエンジニアへ</span>
            </h1>
            <p className="text-muted-foreground max-w-lg text-sm leading-relaxed mb-10">
             
              PHP / Laravel / React / Next.jsを中心に、
              バックエンドからフロントエンドまで一貫した開発に取り組んでいます。
              製造業で培った改善思考を活かし、現場やユーザーの課題を整理しながら、
              使いやすいWebアプリケーションの実装に取り組んでいます。
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

          {/* 右側：Terminal */}
          <div className="hidden lg:block">
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/40">

              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />

                <span className="ml-3 text-xs font-mono text-muted-foreground">
                  ~/kochi-labo
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 text-xs font-mono leading-7 select-none">

                <p className="text-primary mb-3">
                  {"// Kochi.Labo"}
                </p>

                <p>
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-primary">profile</span>{" "}
                  <span className="text-muted-foreground">= {"{"}</span>
                </p>

                <p className="pl-4">
                  <span className="text-primary">role</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-green-400">&quot;Web Engineer&quot;</span>,
                </p>

                <p className="pl-4">
                  <span className="text-primary">skills</span>
                  <span className="text-muted-foreground">: [</span>
                </p>

                <p className="pl-8 text-green-400">
                  &quot;Laravel&quot;, &quot;PHP&quot;,
                </p>

                <p className="pl-8 text-green-400">
                  &quot;React&quot;, &quot;Next.js&quot;,
                </p>

                <p className="pl-8 text-green-400">
                  &quot;TypeScript&quot;, &quot;Docker&quot;,
                </p>

                <p className="pl-8 text-green-400">
                  &quot;MySQL&quot;, &quot;AWS&quot;
                </p>

                <p className="pl-4 text-muted-foreground">],</p>

                <p className="pl-4">
                  <span className="text-primary">strength</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-green-400">
                    &quot;課題解決思考&quot;
                  </span>,
                </p>

                <p className="text-muted-foreground">{"};"}</p>

                <div className="mt-5 pt-4 border-t border-border">
                  <p>
                    <span className="text-primary">›</span>{" "}
                    <span className="text-green-400">
                      Ready for production
                    </span>
                  </p>

                  <p className="mt-2 flex items-center">
                    <span className="text-muted-foreground">$</span>
                    <span className="inline-block w-2 h-4 bg-primary/80 ml-2 animate-pulse" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* scroll */}
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
