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
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Next.js", "Vite", "MUI"],
  },

  {
    icon: "cloud",
    title: "インフラ技術",
    sub: "Docker / AWS",
    desc: "Git/GitHub・Docker・VSCode・Linux/Ubuntuを利用した環境構築。",
    tags: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Linux", "Nginx", "VSCode", "Railway"],
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
    tags: [
      "Laravel 10",
      "Nginx 1.21.1",
      "PHP 8.0",
      "MySQL 8.0.26",
      "Fortify",
      "Api/Sanctum",
      "MailHog",
      "MUI(Material UI)",
      "Formrequest",
      "React",
      "TypeScript",
      "React Router",
    ],
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
    github: "https://github.com/shoyama1010/drugs-stock-app",
    demo: "https://www.dropbox.com/preview/2026-07-11%2018-39-31.mp4?role=personal"
  },

  {
    slug: "atte",
    title: "勤怠打刻管理アプリ",
    subtitle: "従業員・管理者向け勤怠管理システム（Laravel × Next.js）",
    tags: [
      "Laravel 8",
      "Nginx 1.21.1",
      "PHP 8.0",
      "MySQL 8.0.26",
      "Sanctum",
      "Next.js 14",
      "React.js",
      "TypeScript",
    ],
    desc: "一般従業員・管理者を想定し、勤怠打刻から修正申請・承認管理・スタッフ管理までをカバーするシステムです。フロントエンドはNext.jsでAPI連携し、高速なページ表示を実現しています。",
    devised: [
      "打刻の登録・確認がしやすい画面構成に調整",
      "勤怠データを一覧で見やすく表示するように実装",
      "基本操作を直感的に使えるよう画面設計を整理",
    ],
    struggled: [
      "打刻処理をシンプルにしながら、一覧表示との整合性を保つ点",
      "出勤・退勤の状態が分かりやすく伝わるよう、表示内容やボタンの切り替えを調整",
      "基本機能を崩さずに見やすさを整えることを意識して実装",
    ],
    img: "https://images.unsplash.com/photo-1594995846645-d58328c3ffa4?w=900&h=500&fit=crop&auto=format",
    github: "https://github.com/shoyama1010/atte-api",
  },
  
  {
    slug: "furima",
    title: "メルカリ風フリマアプリ",
    subtitle: "出品から購入までを一貫して実装したCtoCマーケットプレイス",
    tags: [
      "Laravel 8",
      "Nginx 1.21.1",
      "PHP 8.0",
      "MySQL 8.0.26",
      "Sanctum",
      "FormRequest",
      "Storage",
    ],
    desc: "出品から購入までの一連の機能を持つフリマアプリを開発。商品一覧・商品詳細・出品・購入フローを担当し、各機能が適切に連携するよう実装しました。",
    devised: [
      "商品一覧ページをSPAのように切り替わる構成に実装",
      "いいね・コメント機能をリアルタイムに近い形で反映",
      "画像アップロードはStorageを活用し、ファイル管理を整理",
    ],
    struggled: [
      "購入完了後の在庫状態管理と表示切り替えの整合性",
      "複数画像のアップロードとプレビュー表示の実装",
    ],
    img: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?w=900&h=500&fit=crop&auto=format",
    github: "https://github.com/shoyama1010/tech-furima",
  },

  {
    slug: "store-rese",
    title: "Rest予約店舗アプリ",
    subtitle: "総合的な飲食店予約管理システム",
    tags: [
      "Laravel 8",
      "nginx 1.21.1",
      "PHP 8.0",
      "MySQL 8.0.26",
      "Fortify",
      "JavaScript",
    ],
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
    github: "https://github.com/shoyama1010/store-rese"
  },
];

export const OTHER_WORKS: Work[] = [
  {
    slug: "BODY-control",
    title: "体重管理アプリ(BODYCON)",
    subtitle: "体重記録・分析用の管理アプリ",
    tags: [
      "Laravel 8",
      "Nginx 1.21.1",
      "PHP 7.4.9",
      "html/css",
      "MySQL 8.0.26",
      "JavaScript",
      "Fortify",
      "Chart.js",
    ],
    desc: "体重変化を記録・分析するために作成。CSV出力やレポート機能も実装し、データを活用しやすくしています。今後UI機能やデータのchart形式にも充実させる予定です",
    devised: [
      "体重データを日付ごとに管理できるように実装",
      "入力・一覧・編集の流れを分かりやすく整理",
    ],
    struggled: [
      "記録データの表示と更新処理の整合性を保つ点に苦労しました",
      "入力フォームと一覧表示の使いやすさを調整しました",
    ],

    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=500&fit=crop&auto=format",
    github: "https://github.com/shoyama1010/weight-control",
    demo: "https://weight-control-production.up.railway.app",
  },

  {
    slug: "fruit-furima",
    title: "フルーツ販売アプリ",
    subtitle: "商品一覧・検索・登録機能を備えた販売サイト",
    tags: [
      "Laravel",
      "Nginx 1.21.1",
      "PHP8.0",
      "CSS(Tailwind CSS)",
      "MySQL 8.0.26",
      "Api/Sanctum",
      "storage",
      "FormRequest",
    ],

    desc: "EC機能を持つフルーツ販売サイト。商品一覧・商品検索・商品登録などを実装しました。今後本番環境を充実させる予定です。",
    devised: [
      "商品一覧と検索機能を分かりやすく整理",
      "商品登録機能を実装し、管理しやすい構成にしました",
    ],
    struggled: [
      "商品情報の登録と一覧表示のつながりを整理する点に苦労しました",
      "検索結果が分かりやすく表示されるよう調整しました",
    ],
    img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=900&h=500&fit=crop&auto=format",
    github: "https://github.com/shoyama1010/fruit-furima-spa",
  },
];

export const TIMELINE = [
  {
    year: "1985年～1994年",
    label: "ITとの最初の出会い",
    summary:
      "高専卒業後、一度就職しましたが「個人PCの時代が来た」と確信し、IT専門学校へ進学...",
    detail:
      "高専卒業後、一度就職しましたが「個人PCの時代が来た」と確信し、IT専門学校へ進学。当時はMS-DOSの時代でインターネット環境は存在していませんでしたが、コンピュータの仕組みやプログラミングの基礎を学びました。情報処理技術者試験（現：基本情報技術者試験）の学習にも取り組み、コンピュータ技術への興味をさらに深めました。卒業後は様々な事情から別業界へ進みましたが、「いつかITに携わりたい」という思いは持ち続けていました。",
  },
  {
    year: "平成～IT時代へ",
    label: "インターネットとWeb技術への興味",
    summary: "Windows 95の登場によりインターネットが一般家庭へ...",
    detail:
      "Windows 95の登場によりインターネットが一般家庭へ普及し始めた頃からWeb技術に興味を持つようになりました。HTML・JavaScript・Flashなどの登場によって、画面上で動くコンテンツを作れることに大きな魅力を感じました。当時は独学でプログラムやWeb技術に触れながら、ITへの関心を持ち続けていました。",
  },
  {
    year: "1995〜2020年（製造DX世代）",
    label: "製造業（生産設備・品質管理・業務改善）",
    summary: "長年にわたり、生産設備や品質管理、業務改善などに携わって...",
    detail:
      "長年にわたり、生産設備や品質管理、業務改善などに携わってきました。トラブル発生時の原因分析や再発防止策の立案、作業効率の向上など、常に課題解決を意識して業務に取り組んできました。現在のWeb開発においても「問題の切り分け→原因調査→再現確認→修正と検証」という考え方に活かされています。",
  },

  {
    year: "2021〜現在",
    label: "Webエンジニアへの挑戦",
    summary:
      "スマホの普及とAIの到来により、WEBエンジニアへの道の為に...ハローワークのIT実践訓練校を通じて....",
    detail:
      "ハローワークのIT実践訓練校を通じて「4か月体験実践」としてWeb開発を学び始めました。AIの時代に入ったことでさらに深めたいと、次のWebエンジニア実践スクールでは模擬案件にも参加。Laravel / PHP / MySQL / Docker / Git・GitHub / React / Next.js / TypeScript などを用いて複数のWebアプリケーションを開発。テストコード作成やAWSを利用した公開作業にも取り組み、実務を意識した開発経験を積み重ねています。",
  },
];
