"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "done" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(
          result.message || "お問い合わせの送信に失敗しました。"
        );
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("done");
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        "通信エラーが発生しました。時間をおいてもう一度お試しください。"
      );
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-primary/30 rounded-xl p-8 text-center">
        <p className="text-primary font-mono text-sm mb-2">
          {"// 送信完了"}
        </p>

        <p className="text-sm text-muted-foreground">
          お問い合わせありがとうございます。
          <br />
          内容を確認後、ご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          type="text"
          required
          disabled={status === "sending"}
          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-60"
          placeholder="お名前"
        />

        <input
          name="email"
          type="email"
          required
          disabled={status === "sending"}
          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-60"
          placeholder="メールアドレス"
        />

        <textarea
          name="message"
          rows={5}
          required
          disabled={status === "sending"}
          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-60"
          placeholder="メッセージ"
        />

        {status === "error" && (
          <div className="border border-red-500/40 bg-red-500/10 rounded-lg p-3">
            <p className="text-sm text-red-400 text-center">
              {errorMessage}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-primary text-primary-foreground py-3 text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Mail size={16} />

          {status === "sending"
            ? "送信中..."
            : "お問い合わせを送信"}
        </button>
      </form>

      <p className="text-xs text-muted-foreground leading-relaxed text-center">
        ご入力いただいたメールアドレスは、
        お問い合わせへの返信のために使用します。
      </p>
    </div>
  );
}
