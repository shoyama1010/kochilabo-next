"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: Resend / Nodemailer などで実装
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="border border-primary/30 rounded-xl p-8 text-center">
        <p className="text-primary font-mono text-sm mb-2">{"// 送信完了"}</p>
        <p className="text-sm text-muted-foreground">
          お問い合わせありがとうございます。後ほどご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        name="name"
        required
        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        placeholder="お名前"
      />
      <input
        name="email"
        type="email"
        required
        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        placeholder="メールアドレス"
      />
      <textarea
        name="message"
        rows={5}
        required
        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
        placeholder="メッセージ"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-primary text-primary-foreground py-3 text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
      >
        <Mail size={16} />
        {status === "sending" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
