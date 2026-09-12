export const SKILLS = [
  {
    icon: "server",
    title: "Backend(主軸)：Laravel / PHP",
    sub: "Laravel / PHP",
    desc: "Laravel / PHPを中心にWebアプリケーションを開発しています。\n認証・認可、CRUD、検索、管理画面、REST API、Feature Testなどを実装し、データベース設計を含めたバックエンド開発に取り組んでいます。",
    tags: [
      "PHP",
      "Laravel",
      "MySQL",
      "API/Sanctum",
      "Fortify",
      "FormRequest",
      "PHPUnit",
    ],
  },

  {
    icon: "code",
    title: "Frontend：React / Next.js",
    sub: "React / Next.js / TypeScript",
    desc: "JavaScript / TypeScriptを使用し、React / Next.jsによるフロントエンド開発に取り組んでいます。\nLaravel REST APIと連携したSPA構成や、認証を含むフロントエンド分離も経験しています。",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Vite",
      "MUI",
    ],
  },

  {
    icon: "cloud",
    title: "開発・公開環境",
    sub: "Docker / Git / Cloud Deploy",
    desc: "Dockerを利用した開発環境を構築し、Git / GitHubによるソース管理を行っています。\nAWS・Railway・Vercelを利用したWebアプリケーションの本番公開も経験しています。",
    tags: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Ubuntu",
      "Nginx",
      "AWS",
      "Railway",
      "Vercel",
      "VSCode",
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
      // "医薬品卸倉庫では、商品ごとの在庫数だけでなく、ロット番号・使用期限・保管場所・棚ごとの数量まで正確に管理する必要がある",
      "医薬品卸倉庫では、商品ごとの在庫数だけでなく、ロット番号・使用期限・保管場所・棚ごとの数量を、一元的に記録・管理する必要がある",
      "商品の大きさや入庫数量によっては、同一商品・同一ロットを1つの棚に収めきれず、複数棚へ分散して保管する必要がある",
      "棚ごとの数量を正確に把握できないと、出庫時の数量間違いや在庫差異につながる",
      "管理者と現場スタッフでは必要な操作範囲が異なるため、役割に応じた権限制御が必要になる",
    ],

    approach: [
      "商品・ロット・棚を分離し、stock_lots・locations・stock_lot_locationsで在庫を管理",
      "1つのロットを複数棚へ関連付け、同一ロットを分割して保管できる構成を実装",
      "入庫時は棚の空き状況と容量を確認し、収まらない数量を他の空棚へ自動分割",
      // "出庫時は在庫不足を確認し、入庫日の古いロットから順に在庫を減算",
      "ロット単位で使用期限を登録・保持し、出庫時は在庫不足を確認したうえで、入庫日の古いロットから在庫を減算",
      "入出庫履歴をtransactionsへ記録し、Sanctumで保護したLaravel APIとReact SPAを連携",
    ],

    devised: [
      "ロットと棚を組み合わせて在庫数量を管理し、複数棚への分割保管に対応",
      "棚ごとのcapacityを利用し、入庫数量を複数棚へ自動分割",
      "入出庫処理をDBトランザクションで実行し、在庫更新と履歴保存の整合性を確保",
      "同時入出庫による在庫不整合を防ぐため、対象在庫・棚に排他ロックを適用",
      "管理者とスタッフの操作範囲を分け、ロールに応じた画面・機能を制御",
    ],

    struggled: [
      "同一ロットを複数棚へ分割するため、商品・ロット・棚の関係を整理してDB設計した",
      "在庫更新と履歴保存がずれないよう、入出庫処理をDBトランザクションで一体化した",
      "複数スタッフによる同時操作で在庫差異が発生しないよう、排他ロックによる競合対策を追加した",
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
    subtitle: "出品・購入・いいね・コメントを備えたCtoCマーケットプレイス",
    tags: [
      "Laravel 8",
      "PHP 8.2",
      "MySQL 8.0.26",
      "Sanctum",
      "REST API",
      "React",
      "SPA",
      "TypeScript",
      "React Router",
      "Vite",
      "Tailwind CSS",
      "FormRequest",
      "Storage",
      "Nginx 1.21.1",
      "Railway",
      "Vercel",
    ],

    desc: "Laravel Bladeで構築した既存のフリマアプリをベースに、React（TypeScript）から利用するREST APIを追加し、主要画面から「段階的」にSPA化しました。\n商品一覧・商品詳細・出品・購入・検索・いいね・コメント・マイページなど、CtoCサービスの基本機能を実装しています。",

    assumedIssue: [
      "出品・購入・いいね・コメントなど、ユーザーごとの操作を安全に管理する必要がある",
      "商品詳細では出品者・カテゴリ・コメント・いいね数など、複数の関連データを効率よく取得する必要がある",
      "既存のLaravel Blade機能を維持しながら、フロントエンドを「段階的」にSPA化する必要がある",
      "フロントエンドとバックエンドを分離した状態でも、ログイン状態を維持してAPIを利用できる仕組みが必要",
    ],

    approach: [
      "LaravelをAPIサーバーとして利用し、React・TypeScriptからREST APIを呼び出す構成を追加",
      "Sanctumでアクセストークンを発行し、Bearer TokenによるAPI認証を実装",
      "商品詳細ではEager LoadingとwithCountを利用し、関連データをまとめて取得",
      "いいね済みかを判定し、同一APIで登録・解除できるトグル処理を実装",
      "Storageに保存した画像をAPIレスポンス向けURLとして返す構成に整理",
      "Laravel Bladeの既存機能を残しつつ、主要画面から「段階的」にSPA化",
    ],

    devised: [
      "既存Blade機能を維持しながら、React向けAPIを追加して段階的にSPA化",
      "SanctumによるToken認証で、ReactとLaravel間の認証状態を連携",
      "Eager Loading・withCountを利用し、商品詳細取得時の不要なSQL発行を抑制",
      "いいね登録・解除後にStateを更新し、画面再読み込みなしで状態を反映",
      "ローカル・本番環境で扱えるよう、画像URLとAPI接続先を整理",
    ],

    struggled: [
      "Blade中心の既存構成を崩さずに、React向けAPIを追加する構成整理に苦労した",
      "LaravelとReact間のToken認証について、ログイン状態とBearer Tokenの扱いを調整した",
      "商品詳細で複数の関連データを取得する際、N+1を避けながら必要情報をまとめて取得するよう調整した",
      "Railway・Vercel公開時に、API接続先・画像URL・認証処理など環境差を調整した",
    ],

    img: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?w=900&h=500&fit=crop&auto=format",

    github: "https://github.com/shoyama1010/tech-furima",

    demo: "https://tech-furima-production.up.railway.app",
  },

  {
    slug: "store-rese",
    title: "StoreRese - 予約店舗アプリ",
    subtitle: "一般ユーザー・店舗代表者・管理者向け飲食店予約管理システム",
    tags: [
      "Laravel 8.4",
      "nginx 1.21.1",
      "PHP 8.0",
      "HTML/CSS",
      "MySQL 8.0.26",
      "FormRequest",
      "Fortify",
      "Docker",
      "JavaScript",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MailHog",
      "PHPUnit",
      "AWS EC2",
    ],

    desc: "飲食店の検索・予約から、店舗代表者による予約管理、管理者による店舗代表者管理までを一元化した予約管理システムです。\nLaravel Bladeを中心に構築し、一部主要画面ではNext.jsによるフロントエンド分離にも取り組んでいます。",

    assumedIssue: [
      "一般ユーザーが店舗検索・予約・予約変更を分かりやすく行える仕組みが必要",
      "店舗代表者は自店舗の予約だけを安全に確認・管理できる必要がある",
      "管理者・店舗代表者・一般ユーザーで利用できる機能を明確に分ける必要がある",
      "口コミの投稿・編集では、本人以外による不正な変更を防ぐ必要がある",
    ],

    approach: [
      "User・Owner・Adminの3種類に認証を分け、Guardによるマルチログイン構成を実装",
      "店舗代表者は自店舗の予約のみ閲覧・通知できるよう、権限ごとに操作範囲を制御",
      "口コミ編集にはPolicyを利用し、投稿者本人のみ編集・削除できる構成にした",
      "予約登録・変更・お気に入り・口コミ・店舗検索を一般ユーザー向け機能として統合",
      "店舗代表者から予約者へメール通知できる機能を実装",
      "主要機能についてFeature Testを実装し、認証・認可・予約・口コミ・メール送信を検証",
    ],

    devised: [
      "Guardを利用し、一般ユーザー・店舗代表者・管理者の認証を分離",
      "Policyで口コミ編集権限を制御し、不正な更新を防止",
      "店舗代表者が自店舗の予約だけを扱えるよう認可処理を実装",
      "予約変更や口コミ編集など、ユーザー操作をFormRequestで検証",
      "店舗検索ではエリア・ジャンル・キーワードによる絞り込みに対応",
      "店舗代表者から予約者へのメール通知機能を実装",
      "Feature Testで予約・口コミ・権限制御・メール通知の動作を確認",
    ],

    struggled: [
      "3種類のユーザー権限ごとにログイン処理とアクセス範囲を整理する点",
      "店舗代表者が他店舗の予約を操作できないよう認可処理を組み立てる点",
      "口コミ編集で本人だけが変更できるよう、Policyと画面表示を連携させる点",
      "Blade中心の既存構成を維持しながら、Next.js画面を段階的に追加する構成整理",
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
    subtitle: "Laravel REST API × Next.jsによるSPA構成の販売アプリ",
    tags: [
      "Laravel 8",
      "Nginx 1.21.1",
      "PHP 8.0",
      "Tailwind CSS",
      "MySQL 8.0.26",
      "Sanctum",
      "FormRequest",
      "Storage",
      "Node.js",
      "Next.js 14",
      "React",
      "TypeScript",
      "SPA",
      "REST API",
      "Railway",
      "Vercel",
    ],

    desc: "Laravel REST APIとNext.jsを分離したSPA構成のフルーツ販売アプリです。\n商品CRUD・検索・ソート・ページネーション・画像アップロード・プロフィール機能を実装し、認証・認可を含むAPI連携に取り組みました。",

    assumedIssue: [
      "商品一覧・検索・登録・編集・削除を、フロントエンドとAPIを分離した構成で実装する必要がある",
      "認証が必要な画面では、未ログインユーザーのアクセスを制御する必要がある",
      "他ユーザーの商品を編集・削除できないよう、所有者ごとの認可制御が必要",
      "ローカル環境と本番環境で異なる画像URLや認証方式にも対応する必要がある",
    ],

    approach: [
      "LaravelをREST API、Next.jsをフロントエンドとして分離し、SPA構成で実装",
      "検索・ソート・ページネーションをAPIと連携し、商品一覧へ動的に反映",
      "商品編集・削除では所有者チェックを行い、他ユーザーの操作を403で制御",
      "ローカルではCookie認証を検証し、本番環境ではPersonal Access Token認証へ切り替え",
      "商品画像の保存先やURL生成処理を整理し、Railway・Vercel環境でも表示できるよう調整",
    ],

    devised: [
      "商品CRUD・検索・ソート・ページネーションをAPI経由で一貫して操作できる構成にした",
      "認証が必要な画面でログイン状態を確認し、未認証時の画面遷移を制御",
      "商品編集・削除時に所有者チェックを行い、不正な操作を防止",
      "固定画像と投稿画像で異なるURL形式を共通処理で切り替える構成にした",
      "LaravelとNext.jsを分離し、RailwayとVercelへそれぞれデプロイ",
    ],

    struggled: [
      "VercelとRailwayの別ドメイン構成でCookie認証を維持できず、Token認証へ切り替えた",
      "本番環境で画像が表示されない問題を、DBの画像パス・Storage・URL生成処理に分けて調査した",
      "商品一覧・詳細・編集・マイページごとに残っていた画像URL生成処理を統一した",
      "Railway再デプロイ後の画像保持について、VolumeやSeeder画像を含めて構成を調整した",
    ],

    img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=900&h=500&fit=crop&auto=format",

    github: "https://github.com/shoyama1010/fruit-furima-spa",
    demo: "https://fruit-furima-frontend.vercel.app/login",
  },

  {
    slug: "bodycon",
    title: "体重管理アプリ（BODYCON）",
    subtitle: "体重・運動記録を分析できる健康管理アプリ",
    tags: [
      "Laravel 8",
      "Nginx 1.21.1",
      "PHP 7.4.9",
      "HTML/CSS",
      "MySQL 8.0.26",
      "JavaScript",
      "Fortify",
      "FormRequest",
      "Chart.js",
      "PHPUnit",
      "Railway",
    ],

    desc: "日々の体重・摂取カロリー・運動内容を記録し、目標体重の管理や検索、CSV出力、レポート・グラフ表示まで行える体重管理アプリです。\nLaravelを中心に、記録するだけでなく蓄積したデータを分析・可視化できる構成を意識して開発しました。",

    assumedIssue: [
      "日々の体重・摂取カロリー・運動内容を継続的に記録できる仕組みが必要",
      "目標体重と現在の体重を比較しながら、変化を確認できる必要がある",
      "蓄積した体重データを検索・集計し、健康管理に活用できる必要がある",
      "登録・更新時の入力値を適切に検証し、データの整合性を保つ必要がある",
    ],

    approach: [
      "users・weight_logs・weight_targetを分離し、ユーザーごとの目標体重と日々の記録を管理",
      "日付範囲による検索機能を実装し、対象期間の体重記録を絞り込み",
      "CSVエクスポート機能を追加し、蓄積データを外部でも利用できる構成にした",
      "AVG・COUNT・GROUP BYを利用し、平均値・最大値・最小値・月別平均を集計",
      "Chart.jsを利用して体重推移をグラフ化し、数値だけでなく視覚的にも確認できるようにした",
      "Feature Testを実装し、一覧表示・登録・バリデーション・更新処理を検証",
    ],

    devised: [
      "JavaScriptを利用し、一覧画面上から体重ログを登録できるモーダル画面を実装",
      "FormRequestで登録・更新時の入力バリデーションを共通化",
      "日付範囲検索により、必要な期間の体重データを確認できるようにした",
      "CSV出力に加え、平均値・最大値・最小値・月別平均を表示するレポート機能を実装",
      "Chart.jsを利用し、体重推移をグラフとして可視化",
      "Feature Testで主要なCRUD・バリデーション処理を確認",
    ],

    struggled: [
      "Laravelの画面遷移と連携しながら、JavaScriptでモーダルの表示状態を制御する点",
      "体重ログ更新時に、FormRequestのバリデーションとControllerの更新処理を整合させる点",
      "運動時間など入力形式の違いによるバリデーションエラーを整理する点",
      "月別平均レポートでAVG・COUNT・GROUP BYを利用し、集計結果を画面表示につなげる点",
      "集計した体重データをChart.jsへ渡し、時系列グラフとして正しく表示する点",
    ],

    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=500&fit=crop&auto=format",

    github: "https://github.com/shoyama1010/weight-control",
    demo: "https://weight-control-production.up.railway.app/",
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
