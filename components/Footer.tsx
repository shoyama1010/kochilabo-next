import Link from "next/link";
import { Terminal } from "lucide-react";

const LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "自己紹介" },
  { href: "/skills", label: "スキル内容" },
  { href: "/works", label: "作品紹介" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="font-mono text-primary text-sm flex items-center gap-2"
        >
          <Terminal size={14} />
          Kochi.Labo
        </Link>

        <div className="flex flex-wrap justify-center gap-5">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <span className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} Kochi.Labo
        </span>
      </div>
    </footer>
  );
}
