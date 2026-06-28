"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "自己紹介" },
  { href: "/skills", label: "スキル内容" },
  { href: "/works", label: "作品紹介" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-primary text-sm tracking-widest flex items-center gap-2"
        >
          <Terminal size={14} />
          Kochi.Labo
        </Link>

        <nav className="hidden md:flex gap-7 text-xs text-muted-foreground">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-primary transition-colors pb-0.5 border-b ${
                pathname === href
                  ? "text-primary border-primary"
                  : "border-transparent"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:flex bg-primary text-primary-foreground text-xs font-mono px-4 py-1.5 rounded hover:opacity-90 transition-opacity"
        >
          Contact
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted-foreground hover:text-primary"
          aria-label="メニュー"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-3">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
