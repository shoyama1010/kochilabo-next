import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "Kochi.Laboへのお問い合わせはこちらから。",
};

export default function Contact() {
  return (
    <section className="pt-8 pb-24 px-6 max-w-xl mx-auto">
      <Breadcrumb items={[{ label: "/", href: "/" }, { label: "お問い合わせ" }]} />

      <h1 className="text-4xl font-bold mb-2">お問い合わせ</h1>
      <div className="h-0.5 w-12 bg-primary mb-8 mt-4" />

      <div className="rounded-xl overflow-hidden border border-border mb-8 bg-muted relative h-40">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=300&fit=crop&auto=format"
          alt="お問い合わせ"
          fill
          className="object-cover opacity-60"
        />
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-8">
        ポートフォリオをご覧いただきありがとうございます。
        <br />
        現在、実務を意識したWebアプリケーションの開発・学習に継続して取り組んでおります。
        <br />
        もしご興味を持っていただけましたら、ぜひお気軽にお問い合わせください。
        <br />
        皆様からのご連絡を心よりお待ちしております。
      </p>

      <ContactForm />
    </section>
  );
}
