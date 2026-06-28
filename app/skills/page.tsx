import type { Metadata } from "next";
import { Server, Code2, Cloud } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Tag } from "@/components/Tag";
import { SKILLS } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "スキル内容",
  description: "Laravel/PHP・React/Next.js・Docker/AWSなど、Kochi.Laboの技術スタック一覧。",
};

const iconMap: Record<string, React.ReactNode> = {
  server: <Server size={22} />,
  code: <Code2 size={22} />,
  cloud: <Cloud size={22} />,
};

export default function Skills() {
  return (
    <section className="pt-8 pb-24 px-6 max-w-5xl mx-auto">
      <Breadcrumb items={[{ label: "/", href: "/" }, { label: "スキル内容" }]} />

      <h1 className="text-4xl font-bold mb-2">スキル内容</h1>
      <div className="h-0.5 w-12 bg-primary mb-10 mt-4" />

      <div className="grid md:grid-cols-3 gap-6">
        {SKILLS.map((s) => (
          <div
            key={s.title}
            className="border border-border rounded-xl p-8 bg-card hover:border-primary/40 transition-colors"
          >
            <div className="text-primary mb-5">{iconMap[s.icon]}</div>
            <p className="text-xs font-mono text-primary mb-1">{s.sub}</p>
            <h2 className="font-bold text-base mb-3">{s.title}</h2>
            <p className="text-xs text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <Tag key={t} text={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
