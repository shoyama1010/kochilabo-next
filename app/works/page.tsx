import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Tag } from "@/components/Tag";
import { WORKS, OTHER_WORKS } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "作品紹介",
  description: "Kochi.Laboが制作したWebアプリケーションの一覧。",
};

export default function Works() {
  return (
    <section className="pt-8 pb-24 px-6 max-w-5xl mx-auto">
      <Breadcrumb items={[{ label: "/", href: "/" }, { label: "作品紹介" }]} />

      <h1 className="text-4xl font-bold mb-2">作品紹介</h1>
      <div className="h-0.5 w-12 bg-primary mb-10 mt-4" />

      {/* メイン作品 */}
      <div className="space-y-6 mb-12">
        {WORKS.map((w) => (
          <Link
            key={w.slug}
            href={`/works/${w.slug}`}
            className="block border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all group bg-card"
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 overflow-hidden h-52 bg-muted relative">
                <Image
                  src={w.img}
                  alt={w.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="md:col-span-3 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {w.tags.slice(0, 4).map((t) => (
                      <Tag key={t} text={t} />
                    ))}
                  </div>
                  <h2 className="font-bold text-xl mb-1">{w.title}</h2>
                  <p className="text-xs text-muted-foreground mb-3">{w.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
                
                <p className="flex items-center gap-1.5 text-xs font-mono text-primary mt-5 group-hover:gap-2.5 transition-all">
                  詳細ページへ <ArrowRight size={12} />
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* その他の制作物 */}
      <div className="border border-border rounded-xl bg-card overflow-hidden">
        <div className="px-7 py-5 border-b border-border">
          <p className="text-xs font-mono text-primary mb-1">{"// Other"}</p>
          <h2 className="font-bold text-base">その他の制作物</h2>
        </div>
        {OTHER_WORKS.map((w, i) => (
          <div
            key={w.title}
            className={`px-7 py-5 ${i < OTHER_WORKS.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {w.tags.map((t) => (
                    <Tag key={t} text={t} />
                  ))}
                </div>
                <h3 className="font-semibold text-sm mb-1">{w.title}</h3>
                <p className="text-xs text-muted-foreground">{w.desc}</p>
              </div>
              <a
                href={w.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-primary flex items-center gap-1.5 shrink-0 hover:opacity-70 transition-opacity"
              >
                <Github size={13} /> GitHub
              </a>

              {w.demo && (
                <a
                  href={w.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                >
                  Demo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
