# kochi-labo

# サイト概要

これまでに制作したWebアプリケーションや、習得してきた技術・開発経験をまとめたポートフォリオサイトです。

PHP / Laravelを中心としたバックエンド開発に加え、React / Next.js / TypeScriptを使用したフロントエンド開発、Dockerによる開発環境構築、MySQLを利用したデータベース設計など、これまで取り組んできた技術や制作物を掲載しています。

各制作物では、使用技術や実装機能だけでなく、開発時に工夫した点や課題、その解決方法についても紹介しています。


# 作成した目的

これまでの学習・アプリ開発を通して身につけた技術と、実際にどのようなWebアプリケーションを設計・実装してきたのかを分かりやすく伝えることを目的として作成しました。

単に制作物を掲載するだけではなく、「どのような課題があり、どのように考えて実装・改善したのか」という開発プロセスも伝えられるポートフォリオを目指しています。

また、製造業で培った改善思考をWeb開発にも活かし、利用者や現場の要件・課題を整理しながら、使いやすいWebアプリケーションを実装できるエンジニアを目指しています。

# 画面構成

<img width="1225" height="584" alt="スクリーンショット (5705)" src="https://github.com/user-attachments/assets/2d4d09f7-6256-4d00-b203-e47e0bf5369b" />

- ホーム
- 自己紹介
- スキル内容
- 作品紹介
- 作品詳細
- お問い合わせ

# 使用技術
- Ｎext.js
- Tailwind CSS(SSG仕様)
- typescript
- Vercel

# ローカルURL
http://localhost:3000/

# 環境構築
## GitHubでリポジトリ作成
- New repository
- kochilabo-next
- cd ~/coachtech/kochilabo-next
- git init
- .gitignoreの確認

## リモートリポジトリを登録

git remote add origin git@github.com:shoyama1010/kochilabo-next.git

git push -u origin main

## VercelとGitHubを連携
- Vercelにログイン
- Add New... → Project
- GitHub連携で kochilabo-next を選択
- Framework Preset が Next.js になっているか確認
- Deploy をクリック（初回）

## 本番環境URL
https://kochilabo-next.vercel.app

＊更新対応

npm run build

GitHubへPush

Vercelが自動で再デプロイ

## 工夫した点

- 制作物だけでなく、使用技術・実装内容・工夫した点を確認できる構成にしました。
- Next.jsのApp Routerを利用し、ページやコンポーネントを役割ごとに分割しています。
- 制作物の情報をデータとして管理し、作品一覧・詳細ページで再利用できる構成にしています。
- PCだけでなく、画面幅の異なる端末でも閲覧しやすいレスポンシブデザインを意識しました。
- エンジニアのポートフォリオであることが視覚的にも伝わるよう、ダークテーマやターミナル風UIを取り入れました。

## 今後の改善

- 制作物や習得技術の追加
- 各制作物の説明・技術的な工夫点の充実
- UI・レスポンシブ表示の継続的な改善
