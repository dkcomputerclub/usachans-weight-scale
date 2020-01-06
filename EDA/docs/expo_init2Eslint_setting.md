# 開発環境
- MacOS(シェルは.bash)
- Atom(エディター) #もちろんどのエディターでもできるにはできるはず。
- Expo

# プロジェクトのビルド

まずは新規プロジェクトを作りたいディレクトリにcdとかmkdirとかして、

```python
expo init
```

を実行。
いろいろ種類はあるけど、とりあえず

```python
blank
```
を選択してみる。
名前とか要求されるので適当につける。
これで新規プロジェクトのディレクトリができている。

# 必要なライブラリを用意する
## 1.構文チェックのためのライブラリ

```terminal
cd hogehoge #さっき作ったプロジェクト
```

して、

```terminal
npm install --save-dev eslint babel-eslint eslint-config-airbnb
```

- eslint
- babel-eslint
- eslint-config-airbnb

これでこの3つのライブラリがインストールできた。
コードの書式の誤りを怒ってくれるやつらしい。
これで記述ミスが減らせるはず。
--save-devは『開発環境にのみ必要ですよ。』って言っているぽい。

インストールできているかどうかは、プロジェクトのディレクトリにある
package.json
で管理されているので、それを確認すると、さっきインストールしたライブラリの記述が増えている。

>  "devDependencies": {
    "@babel/core": "^7.0.0",
    "babel-eslint": "^10.0.3",
    "babel-preset-expo": "~8.0.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.0.1"
  },
>

こんな感じの記述が増えているはず。


さらに、

```terminal
npm install eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

で、

- eslint-plugin-import
- eslint-plugin-jsx-a11y 　#Lではなくて数字の１なので注意。
- eslint-plugin-react

も追加。packages.jsonに記述が増えていることも確認。

## 2.Atomにパッケージをインストール

- linter
- linter-eslint

※依存関係に関するメッセージが出たら、それに追随するパッケージもインストール。


## 3. ".eslintrc.json"の作成・記述

さらに、プロジェクトのディレクトリの直下に　.eslintrc.json　というファイルを作って、

```json
{
  "extends": "airbnb",
  "plugins": {
    "react",
    "jsx-a11y",
    "import",
  },
  "parser": "babel-eslint"
}
```
を記述。そして、Atomを再起動。
そうすれば構文エラーなどを怒ってくれるようになる。

今後怒られるルールを書き換える時にはこの記事とかも参考になりそう。
[意外と知られてないっぽいMarkDownのリンクの書き方](https://mae.chab.in/archives/2874)
