import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Tag } from "@/components/Tag";
import { WORKS, OTHER_WORKS } from "@/data/portfolio";

// const ALL_WORKS = [...WORKS, ...OTHER_WORKS];
const ALL_WORKS = [...WORKS, ...OTHER_WORKS].filter(
  (work) => typeof work.slug === "string" && work.slug.length > 0
);

// SSG: ビルド時に全作品のページを生成する
export function generateStaticParams() {
  return ALL_WORKS.map((w) => ({ slug: w.slug }));
}

// ページごとのメタデータを動的に生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = ALL_WORKS.find((w) => w.slug === slug);

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
  const work = ALL_WORKS.find((w) => w.slug === slug);

  if (!work) notFound();

  return (
    <section className="pt-8 pb-24 px-6 max-w-6xl mx-auto">
      <Breadcrumb
        items={[
          { label: "/", href: "/" },
          { label: "作品紹介", href: "/works" },
          { label: work.title },
        ]}
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start mt-8">
        {/* 左側：本文 */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {work.title}
            </h1>
            <p className="text-muted-foreground text-sm leading-loose">
              {work.subtitle}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">目的</h2>
            <p className="text-sm text-muted-foreground leading-loose">
              {work.purpose ?? work.desc}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">使用技術</h2>
            <p className="text-sm text-muted-foreground leading-loose">
              {work.tags.join(" / ")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">工夫した点</h2>
            <ul className="list-disc pl-5 space-y-2">
              {work.devised.map((d, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-loose">
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">苦労した点</h2>
            <ul className="space-y-2">
              {work.struggled.map((d, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-loose">
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">デモ/GitHub</h2>
            <div className="flex flex-col gap-3">
              {work.demo ? (
                <a
                  href={work.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-primary inline-flex items-center gap-2 hover:opacity-70"
                >
                  <ExternalLink size={16} />
                  デモを見る
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">デモなし</p>
              )}

              {work.github && (
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-primary inline-flex items-center gap-2 hover:opacity-70"
                >
                  <Github size={16} />
                  GitHub：{work.github}
                </a>
              )}
            </div>
          </div>

          <Link
            href="/works"
            className="inline-flex bg-secondary text-secondary-foreground px-8 py-3 rounded text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            作品一覧へ戻る
          </Link>
        </div>

        {/* 右側：画像 */}
        <div className="rounded-xl overflow-hidden border border-border bg-muted relative h-64 md:h-80 lg:h-[360px]">
          <Image
            src={work.img}
            alt={work.title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* タグ */}
      <div className="mt-12 border-t border-border pt-6">
        <div className="flex flex-wrap gap-1.5">
          {work.tags.map((t) => (
            <Tag key={t} text={t} />
          ))}
        </div>
      </div>
    </section>
  );
}