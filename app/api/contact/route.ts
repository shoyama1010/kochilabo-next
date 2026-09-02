import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "すべての項目を入力してください。" },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "正しいメールアドレスを入力してください。" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Kochi.Labo Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `【Kochi.Labo】${name}様からお問い合わせ`,
      text: `
お名前：${name}
メールアドレス：${email}

お問い合わせ内容：
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "メール送信に失敗しました。" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "お問い合わせを送信しました。" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "送信処理中にエラーが発生しました。" },
      { status: 500 },
    );
  }
}
