import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Tag } from "@/components/Tag";
import { WORKS } from "@/data/portfolio";

// SSG: ビルド時に全作品のページを生成する
export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }));
}

// ページごとのメタデータを動的に生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = WORKS.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.desc,
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = WORKS.find((w) => w.slug === slug);
  if (!work) notFound();

  return (
    <section className="pt-8 pb-24 px-6 max-w-5xl mx-auto">
      <Breadcrumb
        items={[
          { label: "/", href: "/" },
          { label: "作品紹介", href: "/works" },
          { label: work.title },
        ]}
      />

      {/* メイン画像 */}
      <div className="rounded-xl overflow-hidden border border-border mb-10 bg-muted relative h-64 md:h-80">
        <Image
          src={work.img}
          alt={work.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* タグ・タイトル */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {work.tags.map((t) => (
          <Tag key={t} text={t} />
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-1">{work.title}</h1>
      <p className="text-muted-foreground text-sm mb-10">{work.subtitle}</p>

      <div className="grid md:grid-cols-3 gap-10">
        {/* 本文 */}
        <div className="md:col-span-2 space-y-10">
          <div>
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
              {"// 目的"}
            </h2>
            <p className="text-sm text-muted-foreground leading-loose">{work.desc}</p>
          </div>
          <div>
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
              {"// 工夫した点"}
            </h2>
            <ul className="space-y-2.5">
              {work.devised.map((d, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-3"
                >
                  <span className="text-primary mt-0.5 shrink-0">▸</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
              {"// 苦労した点"}
            </h2>
            <ul className="space-y-2.5">
              {work.struggled.map((d, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-3"
                >
                  <span className="text-muted-foreground/40 mt-0.5 shrink-0">–</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* サイドバー */}
        <div className="space-y-4">
          <div className="border border-border rounded-xl p-5 bg-card">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              {"// 使用技術"}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {work.tags.map((t) => (
                <Tag key={t} text={t} />
              ))}
            </div>
          </div>

          <div className="border border-border rounded-xl p-5 bg-card">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              {"// Links"}
            </h2>
            <div className="space-y-2">
              {work.github && (
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-primary flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <Github size={13} /> GitHubで見る
                </a>
              )}
              {work.demo && (
                <a
                  href={work.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-primary flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <ExternalLink size={13} /> デモを見る
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/works"
        className="mt-12 inline-flex text-xs font-mono text-muted-foreground hover:text-primary items-center gap-1.5 transition-colors"
      >
        ← 作品一覧へ戻る
      </Link>
    </section>
  );
}
