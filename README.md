# vue.js Typescript開発環境下のsampleアプリ

## ⭐️vueをtypescriptで記載するにあたって

```
・開発環境はVisual Stadio Codeを使用
・ES2015の記法を採用(アロー関数・let・constなど)
・非同期処理を利用する場合はPromiseを使用
・varではなくletまたはconstを使用
・any型はなるべく使用しない
  (Interface定義でする等で対応)
・v-on:click、v-bindなどの記法の省略系は存在るすが今回は省略せずにコーディングする
　 (可読性を重視させる為)
  (省略する際は最後にリファクタリングする際に省略した記法に書き直す等で対応)
・Ajaxを用いる以外でJQueryは使用しない(JQueryを使用するのであればvuejsで開発する意味がない)
```

## ⭐️アプリ起動方法

```
1:GitHubからフォークしてクローンしたらVisual Stadio Codeで開く
2:npm install(又はnpm i)でnpm moduleをinstallする
3:ターミナルからnpm run serveコマンドを叩く
4:ブラウザからhttp://localhost:8080/index.html又はhttp://localhost:8080/　 office.htmlにアクセス
5:VSCodeをからVeturをインストール(画面が白色の文字のみになる為、色分けで見やすいように拡張機能を導入)
```
