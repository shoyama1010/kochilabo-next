export const SKILLS = [
  {
    icon: "server",
    title: "バックエンド技術",
    sub: "Laravel / PHP",
    desc: "PHP・Laravelを利用したWebアプリケーション開発。認証機能、CRUD処理、データベース設計などを（実務に近い）個人開発で経験しています。",
    tags: ["PHP", "Laravel", "MySQL", "Api/Sanctum", "Fortify", "FormRequest"],
  },
  {
    icon: "code",
    title: "フロントエンド技術",
    sub: "React / Next.js",
    desc: "HTML / CSS / JavaScript を用いたレスポンシブ対応サイト制作。ReactによるSPA開発やコンポーネント設計について、学習及び実務に近い個人開発をしています。",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "MUI"],
  },
  {
    icon: "cloud",
    title: "インフラ技術",
    sub: "Docker / AWS",
    desc: "Git/GitHub・Docker・VSCode・Linux/Ubuntuを利用した環境構築。",
    tags: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Linux", "Nginx"],
  },
];

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  desc: string;
  purpose?: string;
  devised: string[];
  struggled: string[];
  img: string;
  github?: string;
  demo?: string;
};

export const WORKS: Work[] = [
  {
    slug: "zaiko",
    title: "商品在庫管理アプリ",
    subtitle: "医薬品卸倉庫向け在庫管理システム",
    tags: ["Laravel 10", "Nginx 1.21.1", "PHP 8.0", "MySQL 8.0.26", "Fortify", "MUI"],
    desc: "医薬品卸倉庫向けの在庫管理システムで、入庫・出庫・在庫・履歴管理を簡素化し、現場の効率を大幅に向上させます。",
    devised: [
      "ロット単位の在庫管理を実装",
      "ロットを複数棚に分割できる構成に対応",
      "棚ごとの在庫数を保持する仕組みを実装",
      "ロール別認証ガード、ダッシュボード連携、エラー表示を調整",
    ],
    struggled: [
      "ロット管理と複数棚への分割ロジックの設計",
      "在庫数の整合性を保つトランザクション処理",
    ],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=500&fit=crop&auto=format",
    github: "https://github.com/shoyama1010",
  },
  {
    slug: "rese",
    title: "Rest予約店舗アプリ",
    subtitle: "総合的な飲食店予約管理システム",
    tags: ["Laravel 8", "nginx 1.21.1", "PHP 8.0", "MySQL 8.0.26", "Fortify", "JavaScript"],
    desc: "Laravelを用いて、ユーザーが簡単に予約できる総合的な予約管理システムを開発しました。",
    devised: [
      "予約の登録・確認がしやすい画面構成に調整",
      "モーダルや画面選択を使い、操作の流れをわかりやすく実装",
      "入力バリデーションや認証まわりを整理し、基本機能を安定して使えるように実装",
    ],
    struggled: [
      "モーダルと通常遷移の共存によるUI状態管理",
      "予約ステータスの複雑な分岐処理",
    ],
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=500&fit=crop&auto=format",
    github: "https://github.com/shoyama1010",
  },
  
];

export const OTHER_WORKS = [
  {
    slug: "furima",
    title: "メルカリ風フリマアプリ",
    subtitle: "商品出品・購入機能を備えたフリマアプリ",
    tags: [
      "Laravel 8",
      "nginx 1.21.1",
      "PHP 8.0",
      "HTML",
      "CSS",
      "MySQL 8.0.26",
      "Sanctum",
      "FormRequest",
      "Storage",
    ],
    desc: "以前から実装していたフリマアプリに対して、UI改善や基本機能の整理を行い、その後SPA開発でのフリマアプリにおいて、商品一覧・出品・購入の流れが自然につながるよう意識して実装しました。",
    purpose:
      "商品一覧、商品詳細、出品、購入までの流れを分かりやすく整理し、ユーザーが迷わず操作できるフリマアプリを目指しました。",
    devised: [
      "商品一覧・出品・詳細の流れを分かりやすく整理",
      "ユーザーが使いやすいよう、画面遷移をシンプルに設計",
      "フリマらしい操作感を意識して実装",
    ],
    struggled: [
      "出品から購入までの流れを自然につなげる点に苦労しました。",
      "商品情報の表示や操作の順番が分かりにくくならないよう、画面ごとの役割を整理しました。",
      "一覧・詳細・入力画面のつながりを何度も見直して調整しました。",
    ],
    img: "/images/furima.png",
    github: "https://github.com/shoyama1010/tech-furima",
    demo: "",
  },
  {
    slug: "attendance",
    title: "勤怠打刻管理アプリ",
    subtitle: "勤怠打刻・修正申請・管理者承認アプリ",
    tags: [
      "Laravel 8",
      "nginx 1.21.1",
      "PHP 8.0",
      "HTML",
      "CSS",
      "MySQL 8.0.26",
      "Fortify",
      "Sanctum",
      "Next.js 14",
      "React",
      "TypeScript",
    ],
    desc: "一般従業員・管理者を想定し、勤怠打刻から勤怠修正申請、管理者側での承認までを実装した勤怠管理アプリです。",
    purpose:
      "一般従業員と管理者の操作を分け、勤怠打刻・修正申請・承認までの流れを分かりやすく管理できることを目的としました。",
    devised: [
      "打刻の登録・確認がしやすい構成に調整",
      "勤怠データを一覧で見やすく表示するように実装",
      "基本操作を直感的に使えるように画面設計を整理",
    ],
    struggled: [
      "打刻処理をシンプルにしながら、一覧表示との整合性を保つ点に苦労しました。",
      "出勤・退勤の状態が分かりやすく伝わるよう、表示内容やボタンの切り替えを調整しました。",
      "基本機能を崩さずに見やすさを整えることを意識して実装しました。",
    ],
    img: "/images/attendance.png",
    github: "https://github.com/shoyama1010/atte-api",
    demo: "",
  },

  {
    title: "体重管理アプリ",
    tags: ["Laravel 8", "PHP 7.4.9", "MySQL 8.0.26", "JavaScript", "Fortify"],
    github: "https://github.com/shoyama1010/weight-control",
    desc: "体重変化を記録・分析するために作成。CSV出力やレポート機能も実装し、データを活用しやすくしています。",
  },
  {
    title: "フルーツ販売アプリ",
    tags: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/shoyama1010",
    desc: "EC機能を持つフルーツ販売サイト。商品一覧・商品検索&商品登録等を実装。",
  },
];

export const TIMELINE = [
  {
    year: "1985年代",
    label: "ITとの最初の出会い",
    detail:
      "高専卒業後、一度就職しましたが「個人PCの時代が来た」と確信し、IT専門学校へ進学。当時はMS-DOSの時代でインターネット環境は存在していませんでしたが、コンピュータの仕組みやプログラミングの基礎を学びました。情報処理技術者試験（現：基本情報技術者試験）の学習にも取り組み、コンピュータ技術への興味をさらに深めました。卒業後は様々な事情から別業界へ進みましたが、「いつかITに携わりたい」という思いは持ち続けていました。",
  },
  {
    year: "〜2020年代",
    label: "製造業（生産設備・品質管理・業務改善）",
    detail:
      "長年にわたり、生産設備や品質管理、業務改善などに携わってきました。トラブル発生時の原因分析や再発防止策の立案、作業効率の向上など、常に課題解決を意識して業務に取り組んできました。現在のWeb開発においても「問題の切り分け→原因調査→再現確認→修正と検証」という考え方に活かされています。",
  },
  {
    year: "Windows 95〜",
    label: "インターネットとWeb技術への興味",
    detail:
      "Windows 95の登場によりインターネットが一般家庭へ普及し始めた頃からWeb技術に興味を持つようになりました。HTML・JavaScript・Flashなどの登場によって、画面上で動くコンテンツを作れることに大きな魅力を感じました。当時は独学でプログラムやWeb技術に触れながら、ITへの関心を持ち続けていました。",
  },
  {
    year: "2021〜現在",
    label: "Webエンジニアへの挑戦",
    detail:
      "ハローワークのIT実践訓練校を通じて「4か月体験実践」としてWeb開発を学び始めました。AIの時代に入ったことでさらに深めたいと、次のWebエンジニア実践スクールでは模擬案件にも参加。Laravel / PHP / MySQL / Docker / Git・GitHub / React / Next.js / TypeScript などを用いて複数のWebアプリケーションを開発。テストコード作成やAWSを利用した公開作業にも取り組み、実務を意識した開発経験を積み重ねています。",
  },
];
