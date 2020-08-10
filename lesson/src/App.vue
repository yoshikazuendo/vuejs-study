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

<script>
export default {
  // metaInfoのtitleTemplateで、このシステム全体のタイトルを指定できる。
  // さらに、%sには、各ページ特有のタイトルを適用することができる。
  metaInfo: {
    titleTemplate: "%s | Aikazu Lesson"
  }
};
</script>

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
