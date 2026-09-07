import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Tag } from "@/components/Tag";
import { WORKS } from "@/data/portfolio";

// メイン作品のみ詳細ページを生成
export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }));
}

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
    <section className="pt-8 pb-24 px-6 max-w-6xl mx-auto">
      {/* パンくず */}
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "作品紹介", href: "/works" },
          { label: work.title },
        ]}
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start mt-8">
        {/* 左側 */}
        <div>
          {/* タイトル */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {work.title}
          </h1>

          <p className="text-muted-foreground text-sm leading-loose">
            {work.subtitle}
          </p>

          {/* 目的 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">目的</h2>

            <p className="text-sm text-muted-foreground leading-loose">
              {work.purpose ?? work.desc}
            </p>
          </div>

          {/* 使用技術 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">使用技術</h2>

            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>

        {/* 右側画像 */}
        <div>
          <img
            src={work.img}
            alt={work.title}
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>

      {/* ここから課題解決プロセス */}
      <div className="mt-14 space-y-12">
        {/* 想定課題 */}
        {work.assumedIssue && work.assumedIssue.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">想定課題</h2>

            <ul className="list-disc pl-6 space-y-2">
              {work.assumedIssue.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground leading-loose"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 解決アプローチ */}
        {work.approach && work.approach.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              解決アプローチ
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              {work.approach.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground leading-loose"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 工夫した点 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            設計・実装上の工夫
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {work.devised.map((item, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground leading-loose"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 苦労した点 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            苦労した点・解決したこと
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {work.struggled.map((item, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground leading-loose"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* GitHub / Demo */}
        {(work.github || work.demo) && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              GitHub / Demo
            </h2>

            <div className="flex flex-col gap-3">
              {work.github && (
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:opacity-70"
                >
                  GitHub Repository
                </a>
              )}

              {work.demo && (
                <a
                  href={work.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:opacity-70"
                >
                  Demo Site
                </a>
              )}
            </div>
           
            {/* 作品一覧へ戻る */}
            <div className="mt-10">
              <Link
                href="/works"
                className="inline-flex bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
              >
                ← 作品一覧へ戻る
              </Link>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}