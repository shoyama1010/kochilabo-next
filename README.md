# 画面構成

<img width="1225" height="584" alt="スクリーンショット (5705)" src="https://github.com/user-attachments/assets/2d4d09f7-6256-4d00-b203-e47e0bf5369b" />

# 使用技術
- Ｎext.js
- Tailwind CSS(SSG仕様)
- typescript

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

＊コード修正あれば。。

npm run build

GitHubへPush

Vercelが自動で再デプロイ
