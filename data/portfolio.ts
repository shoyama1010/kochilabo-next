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
    desc: "JavaScript / React / Next.js を用いたレスポンシブ対応サイト制作。ReactによるSPA開発やコンポーネント設計について、学習及び実務に近い個人開発をしています。",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "Vite",
      "MUI",
    ],
  },

  {
    icon: "cloud",
    title: "インフラ技術",
    sub: "Docker / AWS",
    desc: "Git/GitHub・Docker・VSCode・Linux/Ubuntuを利用した環境構築。",
    tags: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Vercel",
      "Linux",
      "Nginx",
      "VSCode",
      "Railway",
    ],
  },
];

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  desc: string;

  assumedIssue?: string[]; 
  approach?: string[];

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
    title: "DrugStore - 在庫管理アプリ",
    subtitle: "医薬品及び日用品在庫管理システム",
    tags: [
      "Laravel 10",
      "PHP 8.0",
      "MySQL 8.0.26",
      "REST API",
      "React",
      "SPA",
      "Api/Sanctum",
      "MailHog",
      "MUI(Material UI)",
      "Formrequest",
      "Nginx 1.21.1",
      "TypeScript",
      "React Router",
      "Railway",
      "Vercel",
    ],

    desc: "医薬品及び日用品向けの倉庫在庫管理システムです。入庫・出庫・在庫・履歴・スタッフ管理を一元化し、Laravel REST APIとReact SPAを分離した構成で開発しました。",

    assumedIssue: [
      "医薬品卸倉庫では、商品ごとの在庫数だけでなく、ロット番号・使用期限・保管場所・棚ごとの数量まで正確に管理する必要がある",
      "商品の大きさや入庫数量によっては、同一商品・同一ロットを1つの棚に収めきれず、複数棚へ分散して保管する必要がある",
      "棚ごとの数量を正確に把握できないと、出庫時の数量間違いや在庫差異につながる",
      "管理者と現場スタッフでは必要な操作範囲が異なるため、役割に応じた権限制御が必要になる",
    ],

    approach: [
      "商品・ロット・棚を分離し、stock_lots・locations・stock_lot_locationsで在庫を管理",
      "1つのロットを複数棚へ関連付け、同一ロットを分割して保管できる構成を実装",
      "入庫時は棚の空き状況と容量を確認し、収まらない数量を他の空棚へ自動分割",
      "出庫時は在庫不足を確認し、入庫日の古いロットから順に在庫を減算",
      "入出庫履歴をtransactionsへ記録し、Sanctumで保護したLaravel APIとReact SPAを連携",
    ],

    devised: [
      "ロットと棚を組み合わせて在庫数量を管理し、複数棚への分割保管に対応",
      "棚ごとのcapacityを利用し、入庫数量を複数棚へ自動分割",
      "入出庫処理をDBトランザクションで実行し、在庫更新と履歴保存の整合性を確保",
      "管理者とスタッフの操作範囲を分け、ロールに応じた画面・機能を制御",
      // "本番環境ではMailHogが利用できないため、スタッフ登録後の社員番号・仮PINをモーダル表示する方式へ変更",
    ],

    struggled: [
      "同一ロットを複数棚へ分割するため、商品・ロット・棚の関係を整理してDB設計した",
      "在庫更新と履歴保存がずれないよう、入出庫処理をDBトランザクションで一体化した",
      "ReactとLaravel API間の認証・バリデーションエラーを、HTTPステータスとNetworkタブで切り分けて解決した",
    ],

    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=500&fit=crop&auto=format",
    github: "https://github.com/shoyama1010/drugs-stock-app",
    demo: "https://drugstock-frontend-9pp2.vercel.app",
  },

  {
    slug: "workflow",
    title: "WorkFlow - 勤怠管理アプリ",
    subtitle: "従業員・管理者向け勤怠管理システム（Laravel × Next.js）",
    tags: [
      "Laravel 8",
      "PHP 8.0",
      "MySQL 8.0.26",
      "Sanctum",
      "API連携",
      "Next.js 14（主要画面）",
      "Nginx 1.21.1",
      "html/css",
      "Fortify",
      "TypeScript",
      "Railway",
    ],

    desc: "一般従業員・管理者を想定し、勤怠打刻・複数休憩・勤怠修正申請・承認管理・スタッフ管理までを、一元管理できるシステムとして開発しました。\nLaravelをバックエンドとし、「主要画面」をNext.jsでSPA化した勤怠管理システムです。",

    assumedIssue: [
      "出勤・退勤・休憩時間を正確に記録し、月ごとの勤怠を確認できる仕組みが必要",
      "打刻後の誤入力や勤務時間変更に対して、元データを直接変更せず申請・承認できる仕組みが必要",
      "1日に複数回の休憩を取得する勤務形態にも対応する必要がある",
      "一般従業員と管理者で、閲覧・修正・承認などの操作範囲を分ける必要がある",
    ],

    approach: [
      "勤怠データと修正申請データを分離し、元データを保持したまま承認フローを管理",
      "AttendanceとRestを1対多で設計し、1日に複数の休憩を登録・修正できる構成を実装",
      "修正申請では変更前・変更後の内容を保持し、管理者承認後に勤怠データへ反映",
      "承認待ち・承認済みなどの状態に応じて、編集可否や画面表示を制御",
      "管理者向けに月別勤怠・申請管理・スタッフ管理・CSV出力を実装",
    ],

    devised: [
      "勤怠データと修正申請データを分離し、承認前後の状態を管理",
      "Attendance : Rest = 1 : N の構成で、複数休憩の登録・修正に対応",
      "複数休憩を合計し、出退勤時間から差し引いて実働時間を算出",
      "承認状態に応じて編集可否を切り替え、誤操作を防止",
      "月別勤怠をCSV出力できるよう、複数休憩データを整形",
    ],

    struggled: [
      "複数休憩を扱うため、配列形式の入力・バリデーション・表示処理を整理した",
      "修正申請と元の勤怠データが混在しないよう、申請データを分離して承認後に反映する構成にした",
      "勤怠・休憩・修正申請を別テーブルで管理し、関連データを正しく表示するよう調整した",
      "複数休憩をCSVの1レコード内で見やすく表示できる形式に整えた",
    ],

    img: "https://images.unsplash.com/photo-1594995846645-d58328c3ffa4?w=900&h=500&fit=crop&auto=format",
    github: "https://github.com/shoyama1010/atte-api",
    demo: "https://atte-api-production.up.railway.app/attendance",
  },

  {
    slug: "furima",
    title: "メルカリ風フリマアプリ",
    subtitle: "出品から購入までを一貫して実装したCtoCマーケットプレイス",
    tags: [
      "Laravel 8",
      "Nginx 1.21.1",
      "PHP 8.0",
      "html/css",
      "Tailwind css",
      "MySQL 8.0.26",
      "Sanctum",
      "FormRequest",
      "Storage",
      "Vite",
      "Node.js",
      "React（一部画面）",
      "TypeScript",
      "React Router",
      "REST API",
      "Railway",
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
    demo: "https://tech-furima-production.up.railway.app",
  },

  {
    slug: "store-rese",
    title: "Rest予約店舗アプリ",
    subtitle: "総合的な飲食店予約管理システム",
    tags: [
      "Laravel 8",
      "nginx 1.21.1",
      "PHP 8.0",
      "html/css",
      "MySQL 8.0.26",
      "Fortify",
      "JavaScript",
      "Next.js（一部画面）",
      "TypeScript",
      "Node.js",
      "API連携",
      "Railway",
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
    github: "https://github.com/shoyama1010/store-rese",
    demo: "http://52.68.242.6",
  },
];

export const OTHER_WORKS: Work[] = [
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
      "Node.js",
      "Next.js",
      "TypeScript",
      "SPA",
      "REST API",
      "Railway",
      "Vercel",
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
    demo: "https://fruit-furima-frontend.vercel.app/login",
  },
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
      "Railway",
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
    year: "1995〜2020年（製造DX時代）",
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
      "製造業を退職し、ハローワークのIT実践訓練校を通じてWeb開発を学び始めました。AIの時代に入ったことで確実に案件を獲得したいと、次のWebエンジニア実践スクールで模擬案件にも参加。Laravel / PHP / MySQL / Docker / Git・GitHub / React / Next.js / TypeScript などを用いて複数のWebアプリケーションを開発。テストコード作成やAWSを利用した公開作業にも取り組み、実務を意識した開発経験を積み重ねています。",
  },
];
