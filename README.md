# vuejs-study
Vue.jsテスト用のプライベートリポジトリです。

# Vue CLIとは

**Vue.jsで高速に開発するためのシステム**。難しいことを考えず、すぐVue.jsを始められるようになる。

## Vue CLIの主な機能

 - 開発環境のセットアップ
 - 拡張可能なプラグインシステム
 - .vueファイルの高速プロとタイピング
 - GUI

## Node.jsが必要

Vue CLIを利用するには、Node.jsが必要である。

※Node.jsのインストール手順はここではスキップ。

## Vue CLIをインストールする

※古いバージョンのVue CLIがインストールされている場合は、先にアンインストールしておく。

### 古いバージョンをアンインストール

```cmd
> npm list -g uid
npm
`-- vue-cli@2.9.6

>npm un vue-cli -g
removed 241 packages in 4.236s
```

### 新しいバージョンをインストール

```cmd
> npm i -g @vue/cli

(中略)

+ @vue/cli@4.4.6
added 1227 packages from 669 contributors in 94.22s
```

インストールが終わったら、Vue CLIのコマンドが利用できるようになっていることを確認する。

```cmd
> vue --version
@vue/cli 4.4.6
```

## Vue.jsプロジェクトを作成する

Vue.jsプロジェクトを作成するために、以下のコマンドを実行する。

```cmd
> vue create lesson
```

すると、作成するプロジェクトの内容を決定するために、対話式で応対が求められるので設定を進めていく。

```cmd
Vue CLI v4.4.6
? Please pick a preset: (Use arrow keys)
> default (babel, eslint)
  Manually select features
```

### プリセットを選択する

作成するVue CLIプロジェクトのプリセットを選択する。
キーボードで`Manually select features`を選択しEnterキーを押す。

※デフォルトのプリセットには、必要最低限の機能が入っている。特に機能は選ばず、とにかく直ぐに始めたい！というときに便利。

```cmd
Vue CLI v4.4.6
? Please pick a preset: (Use arrow keys)
  default (babel, eslint)
> Manually select features
```

### プロジェクトで使いたい機能を選択する

Babel、CSS Pre-processors、Linter / Formatter をcpaceキーで選択しEnterキーを押す。

```cmd
Vue CLI v4.4.6
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 ( ) Router
 ( ) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```

### どのcssプリプロセッサを使うのかを選択する

`Sass/SCSS (with node-sass)`を選択してEnterキーを押す。

```cmd
Vue CLI v4.4.6
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, CSS Pre-processors, Linter
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)
  Sass/SCSS (with dart-sass)
> Sass/SCSS (with node-sass)
  Less
  Stylus
```

### どのLinter、Fomatterを使うのかを選択する

`ESLint + Prettier`を選択してEnterキーを押す。

```cmd
Vue CLI v4.4.6
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, CSS Pre-processors, Linter
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: 
  ESLint with error prevention only 
  ESLint + Airbnb config
  ESLint + Standard config
> ESLint + Prettier
```

### Linterのトリガーを選択する

両方を選択してEnterキーを押す。

```cmd
Vue CLI v4.4.6
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, CSS Pre-processors, Linter
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save
 (*) Lint and fix on commit (requires Git)
```

### 様々な設定（BabelやLintなど）をどこに保存するのか選択する

`In dedicated config files`（専門の設定ファイル）を選択してEnterキーを押す。

※`package.json`だと、npmのpackage.jsonとして保存される。

```cmd
Vue CLI v4.4.6
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, CSS Pre-processors, Linter
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit (requires Git)
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)      
> In dedicated config files
  In package.json
```

### これまで選んだオプションをプリセットとして保存するかを選択する

YキーかNキーで選択する。ここではNoを選ぶ

```cmd
Vue CLI v4.4.6
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, CSS Pre-processors, Linter
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit (requires Git)
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? (y/N)
```

### インストールが開始される

結構時間がかかるので暫く待ちましょう。`Successfully created project～`と表示されれば作成完了です。

```cmd
Vue CLI v4.4.6
✨  Creating project in C:\Projects\study\vuejs-study\lessson.
⚙️  Installing CLI plugins. This might take a while...


> yorkie@2.0.0 install C:\Projects\study\vuejs-study\lessson\node_modules\yorkie
> node bin/install.js

setting up Git hooks
can't find .git directory, skipping Git hooks installation

> core-js@3.6.5 postinstall C:\Projects\study\vuejs-study\lessson\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> ejs@2.7.4 postinstall C:\Projects\study\vuejs-study\lessson\node_modules\ejs
> node ./postinstall.js

added 1201 packages from 846 contributors and audited 1204 packages in 191.752s

49 packages are looking for funding
  run `npm fund` for details       

found 0 vulnerabilities

�  Invoking generators...
�  Installing additional dependencies...


> node-sass@4.14.1 install C:\Projects\study\vuejs-study\lessson\node_modules\node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v4.14.1/win32-x64-72_binding.node
Download complete..] - :
Binary saved to C:\Projects\study\vuejs-study\lessson\node_modules\node-sass\vendor\win32-x64-72\binding.node
Caching binary to C:\Users\(UserName)\AppData\Roaming\npm-cache\node-sass\4.14.1\win32-x64-72_binding.node

> node-sass@4.14.1 postinstall C:\Projects\study\vuejs-study\lessson\node_modules\node-sass
> node scripts/build.js

Binary found at C:\Projects\study\vuejs-study\lessson\node_modules\node-sass\vendor\win32-x64-72\binding.node
Testing binary
Binary is fine
added 222 packages from 132 contributors and audited 1427 packages in 40.036s

56 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

⚓  Running completion hooks...

�  Generating README.md...

�  Successfully created project lessson.
�  Get started with the following commands:

 $ cd lessson
 $ npm run serve
```

`lesson`フォルダの中身を念の為確認する。

```cmd
> cd lesson
> dir
<DIR>          .
<DIR>          ..
           230 .gitignore
            66 babel.config.js
<DIR>          node_modules
       503,683 package-lock.json
         1,226 package.json
<DIR>          public
           319 README.md
<DIR>          src
```

## 開発用サーバーを起動する

Vue CLIには、開発環境のセットアップ以外にも、開発用のローカルサーバーも提供している。
以下のコマンドで起動できる。

※起動の過程で、Windowsのファイアウォールの許可ダイアログが表示される場合があるので、その時は「許可」を選択する。

暫くして、`App running at:`をと表示されれば成功起動できた状態となる。

```cmd
> npm run serve

  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.11.4:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

ブラウザで`http://localhost:8080/`にアクセスし、画面が表示されればOK。

![](images/2020-08-10-11-11-3838.png)

※開発用サーバーを停止したい場合は、`Ctrl + C`で停止ができる。

### 【補足】リアルタイムプレビュー

Vue CLIで用意された開発用サーバーは、ファイルし保存するだけで、開発用サーバーの再起動はせずに更新した内容が直ぐに反映され確認することができる。

Hot Module Replacement（HMR）という仕組みで、ファイルを書き換えると自動でビルドが行われ、ブラウザが再描画される。

## 本番用ファイルのビルド方法

本番用のファイル一式を生成するためのビルドは、以下のコマンドを実行する。

```cmd
> npm run build

\  Building for production...

 DONE  Compiled successfully in 17648ms                                                                                                                                                           13:29:47
  File                                 Size               Gzipped

  dist\js\chunk-vendors.b0f460c7.js    89.18 KiB          31.93 KiB
  dist\js\app.27fe5cb6.js              4.68 KiB           1.73 KiB
  dist\css\app.07cb102b.css            0.33 KiB           0.23 KiB

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
```

暫くしてビルドが完了すると、`dist`というディレクトリが作成される。基本的には、このディレクトリ以下全てをサーバーにアップロードすればOK。

単一ファイルコンポーネントである`*.vue`ファイルがビルドされると、`*.html`、`*.js`、`*.css`が生成されるイメージ。

```cmd
> dir
<DIR>          .
<DIR>          ..
<DIR>          css
            4,286 favicon.ico
<DIR>          img
            722 index.html
<DIR>          js
```

## Vue CLI プラグインをインストールする

Vue CLIに対応しているプラグインであれば、プラグインを簡単にインストールすることができる。

例えば、Type Scriptプラグインをインストールした場合は以下のコマンドを実行する。

すると、Vue.jsプロジェクトを作成した時と同じように、対話式で応対が求められるので設定を進めていく。

```cmd
> vue add @vue/typescript

�  Installing @vue/cli-plugin-typescript...

+ @vue/cli-plugin-typescript@4.4.6
updated 1 package and audited 1450 packages in 13.896s

56 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

✔  Successfully installed plugin: @vue/cli-plugin-typescript

? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Convert all .js files to .ts? Yes
? Allow .js files to be compiled? Yes

�  Invoking generator for @vue/cli-plugin-typescript...
�  Installing additional dependencies...

added 15 packages from 6 contributors and audited 1465 packages in 19.13s

62 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: @vue/cli-plugin-typescript
```

※`vue create`コマンドも、要はいくつもの`vue add`でプラグインをインストールするものだと考えてもよい。必要なタイミングでプラグインを簡単に追加できるので、Vue.jsのスケールアップが容易であるメリットとも言える。

## プロジェクト構成をプリセットにする

よく使うプロジェクト構成をプリセットとして登録することができる。プリセットとして登録すると、`vue create`の最初に選択するプリセットに追加される。

プリセットを登録するには、`vue create`コマンドを実行し最後に表示される`Save this as a preset～`でyキーを押し、プリセット名を設定することで登録ができる。

```cmd
? Save this as a preset for future projects? (y/N)
? Save preset as: aikazu preset
```

### プリセットを削除するには

コマンドからの削除はできないので、プリセット情報が保存されているファイルを直接編集する。`C:\Users\(User Name))\.vuerc`の、`presets`配下を消して保存することで、プリセットの削除ができる。

```json
{
  "useTaobaoRegistry": false,
  "presets": {
    "aikazu preset": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-eslint": {
          "config": "prettier",
          "lintOn": [
            "save"
          ]
        }
      },
      "cssPreprocessor": "node-sass"
    }
  }
}
```

## 【補足】Vue CLI UI(Beta版)

CUIベースのVue CLIをGUIベースで操作ができる。プロジェトの作成やプラグインの追加、サーバーの起動/停止など、CUIベースでできることがGUIベースで利用することができる。

![](images/2020-08-10-14-18-3535.png)

## Vue Router

### SPAとは

複数のHTMLをリンクでたどるのではなく、単一のHTMLを読み込んで、中身のコンテンツを読み込む仕組み。

■メリット

 - UXの向上
 - 高速なページ遷移や通信
 - JavaScriptフレームワークによる開発のしやすさ
 - デザインパーツのモジュール化

■デメリット

 - 必要なスキルの高度化
   - JavaScriptの他に様々なスキルが必要
 - SEO対策がしづらい
 - 初期ロード時間が長い

■SPAに無言えているWebサイト

 - ユーザーの操作が多い
   - 製品をカスタマイズして決定する
 - ページ遷移や通信が多い
 - 滞在時間が長い

### Vue Routerとは

 - Vue.js公式ルーター
 - SPAのルーティングを実現

■ルーティングとは

単一HTMLファイル上の個々のコンテンツを、URLに紐づけて管理してくれることを指す。

 - HTML https://www.example.com
   - コンテンツ１ /
   - コンテンツ２ /about
   - コンテンツ３ /product
   - コンテンツ４ /contact

■Vue Routerの主な機能

 - ルーティング
 - 動的ルートマッチング
   - ユーザーのIDやAPIの戻り値など動的に変わる値をURLに使いたい時に使う機能
 - トランジションエフェクト
   - ページコンテンツが差し替わる時にトランジションを挟むことができる
 - ナビゲーションコントロール
   - ルーティングでページ遷移前や、した後にAPIを挟むことができる

### Vue Routerをインストールする

以下のコマンドを実行する。

※途中、ヒストリーモードを使用するかどうか聞かれるので、Noを選択する。

```cmd
>vue add router

? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) n

�  Invoking generator for @vue/cli-plugin-router...
�  Installing additional dependencies...

added 1 package from 1 contributor and audited 1350 packages in 15.772s

55 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: @vue/cli-plugin-router
```

インストールが完了すると、`src`ディレクトリ配下に`views`ディレクトリと、`router`ディレクトリが生成されることを確認する。

### ルートを定義する

ルートの定義ファイルは、`router\index.js`である。

```js
const routes = [
  {
    path: "/", // pathプロパティ…実際のURLに適用される
    name: "Home", // nameプロパティ…ルートの名前を定義。リンクやナビゲーション時に指定できる
    component: Home // componentプロパティ…使用するコンポーネント（.vue）を指定。必ず１つ指定する必要がある。
  },
  {
    path: "/about",
    name: "About",
    // 遅延ローディングルート：この部分だけ、別Javascriptファイルとして生成される。Aboutページ分のJavascriptはページにアクセスして初めてローディングされるので、初期ロードが軽くなる、というメリットがある。
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];
```

### ページを表示・遷移する

凡例

```html
<template>
  <div id="app">
    <div id="nav">
      <!-- router-link…VRoute特有のコンポーネント。該当のルートにリンクを貼るためのもの。 これは、ブラウザの差異も吸収してくれるため、<a>タグではなく基本的にはrouter-linkを使うようにする。-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- router-view…VRouter特有のコンポーネント。ここがルートによってレンダリングされる部分となる。 -->
    <router-view />
  </div>
</template>
```

### プログラムでページを遷移する

JavaScriptでページ遷移をする方法。

```html
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('/about') // router.pushメソッドを使うと、プログラム側からページ遷移ができる。
    }, 3000);
  }
};
</script>
```

### ページ遷移時にトランジションを適用する

凡例

```html
<template>
  <div id="app">
    <div id="nav">
      <!-- router-link…VRoute特有のコンポーネント。該当のルートにリンクを貼るためのもの。 これは、ブラウザの差異も吸収してくれるため、<a>タグではなく基本的にはrouter-linkを使うようにする。-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition>
    <!-- transitionにnameをつけることで、styleで指定する名称として利用することができる。 -->
    <!-- <transition name="wipe"> -->
      <!-- router-view…VRouter特有のコンポーネント。ここがルートによってレンダリングされる部分となる。 -->
      <router-view />
    </transition>
  </div>
</template>
```

```css
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* トランジション(<transition>)のデフォルトであるv要素で全体トランジションを指定できる。 */
/* v-enter：表示の最初の状態 */
.v-enter {
  opacity: 0;
}

/* v-enter-active：表示の途中 */
.v-enter-active {
  transition: opacity 1s;
}
</style>
```

### 動的なルーティングを実装する

凡例

```html
<template>
  <div id="app">
    <div id="nav">
      <!-- router-link…VRoute特有のコンポーネント。該当のルートにリンクを貼るためのもの。 これは、ブラウザの差異も吸収してくれるため、<a>タグではなく基本的にはrouter-linkを使うようにする。-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- 動的ルーティングをしてみる -->
      <router-link to="/user/aikazu">aikazu</router-link> |
      <router-link to="/user/kaori">kaori</router-link>
    </div>
    <transition>
    <!-- transitionにnameをつけることで、styleで指定する名称として利用することができる。 -->
    <!-- <transition name="wipe"> -->
      <!-- router-view…VRouter特有のコンポーネント。ここがルートによってレンダリングされる部分となる。 -->
      <router-view />
    </transition>
  </div>
</template>
```

```js
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    // :hogeで、動的とすることができる。
    path: "/user/:id",
    name: "User",
    component: () =>
      import("../views/User.vue")
  }
];
```

```html
<template>
  <div class="user">
    <!-- $routeで、アクティブなルーティングデータを利用することができる。 -->
    <h1>This is a user page for {{$route.params.id}}</h1>
  </div>
</template>

```

### historyモード

Vue Routerには２つのモードがある。

 - hashモード
   - URLのハッシュを量
     - example.com/#/about
   - 手軽に利用できる
   - SEO面で不利
     - #以降のURLではGoogleなどの検索エンジンでインデックスされない
 - historyモード
   - HTML5 History APIを利用
   - example.com/about
   - サーバー側の設定が必要（リダイレクトをかけるなどが必要）
     - 開発サーバーでは補ってくれるため正常に動作するが、**Productionとしてデプロイした場合、直接URLで`example.com/about`にアクセスしようとすると404エラーが発生する。**

凡例

```js
const router = new VueRouter({
  mode: "history", // ここでモードを指定できる。
  base: process.env.BASE_URL, // 起点とするURLをここで指定できる。
  routes
});
```

## vue-meta

### メタ情報とは

 - 主にhead要素で定義するページ特有の情報
   - `<title>`タグ：ページのタイトル
   - `<meta name="description">`タグ：ページの概要
   - `<meta property="og:*">`タグ：OGP情報
   - `<link>`タグ：外部文書との関係

### SPAとメタ情報

 - HTMLが1ページで動作するためメタ情報も1ページ分
 - コンテンツが変わる時に動的に書き換え可能
 - SEOやOGPでは別途対応が必要
   - サーバーサイト対応
   - SSRまたはプリレンダリング

### vue-metaとは

 - Vue.jsのプラグイン
 - 動的なメタ情報の書き換え
 - SSR対応

vue-metaを使うことで、ページのルーティングのタイミングで、例えば`<title>`を動的に変更したりできるようになる。

### vue-metaをインストールする

vue-metaは2020/08時点でVue CLIに対応していないため、npmコマンドでインストールする。

```cmd
> npm i vue-meta
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\watchpack-chokidar2\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ vue-meta@2.4.0
added 2 packages from 3 contributors and audited 1352 packages in 13.158s

55 packages are looking for funding
  run `npm fund` for details
```

`package.json`を開き、`dependencies`要素に`vue-meta`が記述されていればインストール完了。

```json
（省略）
"dependencies": {
    "core-js": "^3.6.5",
    "vue": "^2.6.11",
    "vue-meta": "^2.4.0",
    "vue-router": "^3.2.0"
  },
  （省略）
```

### ページ毎にタイトルを書き換える

```js
※index.js

import Vue from "vue";
import VueRouter from "vue-router";
// vue-metaをインポート
import Meta from "vue-meta";
import Home from "../views/Home.vue";

// Vue.useメソッドで、利用するルーターを指定している。これで、Vue.jsとVue Routerとの紐付けは完了。
Vue.use(VueRouter);
// vue-metaを使用する。これで、Vue.jsとvue-metaとの紐付けは完了。
Vue.use(Meta);

```

```js
※App.vue 全体のページ

（省略）

<script>
export default {
  // metaInfoのtitleTemplateで、このシステム全体のタイトルを指定できる。
  // さらに、%sには、各ページ特有のタイトルを適用することができる。
  metaInfo: {
    titleTemplate: '%s | Aikazu Lesson'
  }
};
</script>

（省略）
```

```js
※Home.vue 各ページ

（省略）

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  metaInfo: {
    // titleプロパティ…個別のタイトルを指定できる。
    title: "Home"
  },
  components: {
    HelloWorld
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/about"); // router.pushメソッドを使うと、プログラム側からページ遷移ができる。
    }, 3000);
  }
};
</script>

（省略）
```

![](images/2020-08-10-17-12-1717.png)

## Vuex

状態管理パターン + ライブラリ

### 状態とは

 - アプリケーションが持つ様々なデータ
   - メニューが開いているかどうか
   - ユーザーが入力した値
   - APIで取得したデータ
   - ログイン情報

状態をどこで持ち、どう管理すべきか？
→アプリケーションの性質によって異なる。

基本的には…下記２種類の単位で管理したく、

 - アプリケーション全体の状態
 - ページやコンポーネント個別の状態

その設計思想が「Flux」（フラックス）である。

![](images/2020-08-10-17-21-5555.png)

このFluxを元に、Vue.js向けの設計思想としたものがVuexである。

![](images/2020-08-10-17-23-088.png)

#### Vuexを使うべきシーン

 - 規模に関わらず、SPAであれば導入をオススメ
 - SPAではなくても中・大規模では必須
 - いずれにしても、ある程度の導入コストは必要

### Vuexのインストール

以下のコマンドでインストールする。

```cmd
> vue add vuex

�  Installing @vue/cli-plugin-vuex...

+ @vue/cli-plugin-vuex@4.5.2
updated 1 package and audited 1353 packages in 13.996s

55 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

✔  Successfully installed plugin: @vue/cli-plugin-vuex


�  Invoking generator for @vue/cli-plugin-vuex...
�  Installing additional dependencies...

added 1 package from 1 contributor and audited 1353 packages in 9.589s

55 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: @vue/cli-plugin-vuex
```

インストール後に、`store`ディレクトリが作成されていれば正常にインストールが完了したと判断して良い。
また、`main.js`にも、storeをVueのオプションとして指定していることも確認しておく。

```js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

```

### Vue.js DevToolsのインストール

DevToolsは、Vue.jsの開発に便利なデバッグツール。
ChromeやFire Foxの拡張機能および、デスクトップアプリケーションが提供されている。

 - コンポーネントの親子関係を表示
 - コンポーネントのデータやProps
 - Vuexの状態確認

ここでは、Chrome ExtensionのVue.js DevToolsをインストールする。

[chromeウェブストア](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd/related?hl=ja9)にアクセスし、Chrome Extensionをインストールする。

インストールが完了したら、Vue.jsで作成されたWebサイトにアクセスし、F12キーを押してDeveloerツールを起動し、`Vue`タブをクリックすることでVue.js DevToolsを使用することができる。

![](images/2020-08-10-22-35-2323.png)

### Vuexの基本構造を理解する

- `State`
  - ページやコンポーネントに依存しない、アプリケーション全体で保持しておきたいものを定義
    - 複数のページやコンポーネント間で同じ状態を保持しておきたい時に便利
  - 読み取り専用
- `Mutations`
  - stateを変更できる
  - タイプとハンドルを１つずつ定義して、`*.vue`ファイルから利用できる
    - タイプ名(引数state, 引数payload){ハンドル}
      - 引数state：state自体
      - 引数payload：基本オブジェクト形式。なんでも渡せる
  - mutationは同期的でなければはならない
    - 外部のAPI通信など、非同期処理と組み合わせることは可能
- `Actions`
  - 非同期処理を含めることができる
  - mutationを呼び出すことができる

![](images/2020-08-10-23-24-5454.png)

## Vue I18n

### 国際化とは

 - i18n（Internationalization）
   - あいえいてぃーんえぬ（iとnの間に18文字）
 - 特定の言語や文化に依存しないように汎用化すること
 - 特定の言語に特化させるのは、l10n（localization）（えるてんえぬ）
   - 日本語ページ、英語ページ特化など

### Vue I18nの主な機能

 - 国際化対応
 - 言語切替
 - 日時や数字のローカライゼーション
 - 未対応言語のフォールバック
   - 未対応の一部分言語を、別の言語で翻訳すること
 - 単一ファイルコンポーネント、外部読み込み対応

### Vue I18nをインストールする

以下のコマンドでインストールする。

```cmd
> vue add i18n
�  Installing vue-cli-plugin-i18n...

+ vue-cli-plugin-i18n@1.0.1
added 23 packages from 14 contributors and audited 1376 packages in 24.044s

56 packages are looking for funding
  run `npm fund` for details       

found 0 vulnerabilities

✔  Successfully installed plugin: vue-cli-plugin-i18n
```

プロジェクトのデフォルトの言語を設定する。

Vue CLIで作成されるプロジェクトのデフォルト言語は英語なので、ここでは`en`を設定する。

```cmd
? The locale of project localization. en
```

次に、フォールバック用の言語を聞かれるので、同じく`en`を設定する。

```cmd
? The fallback locale of project localization. en
```

翻訳メッセージの保存先ディレクトリを設定する。`locales`のまま設定する。

```cmd
? The directory where store localization messages of project. It's stored under `src` directory. locales
```

単一ファイルコンポーネントの中に翻訳メッセージを埋め込むかどうかを聞かれるので、nキーを押してNoを選択する。

```cmd
? Enable locale messages in Single file components ? (y/N) n
�  Invoking generator for vue-cli-plugin-i18n...
�  Installing additional dependencies...

audited 1376 packages in 11.944s

56 packages are looking for funding
  run `npm fund` for details       

found 0 vulnerabilities

⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: vue-cli-plugin-i18n
```

以上で、インストールが完了する。
`src`ディレクトリ配下に、`i18n.js`や、`locales`ディレクトリが作成されていることが確認できれば正常にインストールできたと判断して良い。
