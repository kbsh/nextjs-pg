## Getting Started

1. リポジトリをクローンする(※ hogeを置き換える)
```bash
git clone https://github.com/kbsh/nextjs-pg.git
```

2. VS Codeのワークスペースを開く
- `./nextjs-pg.code-workspace`

3. VS Codeに必要なプラグインをインストール
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [TypeScript Import Sorter](https://marketplace.visualstudio.com/items?itemName=mike-co.import-sorter)
- あると便利なvscodeプラグイン
  - [Material-UI Snippets](https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets)

4. moduleをインストールする
```bash
yarn
```

5. 開発用環境変数ファイル`.env.local`をルート直下に配置する

## 開発時
- 開発サーバーをdevelopmentモードで立ち上げる

```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000)を開く

## 参照Document

- [Next.js Documentation](https://nextjs.org/docs) - 概要.
- [Learn Next.js](https://nextjs.org/learn) - Next.js チュートリアル
- [Material-UI](https://material-ui.com/) - UI フレームワーク
