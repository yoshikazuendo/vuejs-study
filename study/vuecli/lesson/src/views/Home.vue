<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <LocaleChanger />
    <!-- V18n の$dメソッド。第１引数はDateオブジェクト。第２引数はi18n.jsのキーの名前 -->
    <p>{{$d(new Date(), 'short')}}</p>
    <!-- computedプロパティを介して、Vuexのstate.weatherを表示 -->
    <p>今日の天気：{{ weather }}</p>
    <p>
      <button type="button" @click="clickHandler('晴れ')">晴れ</button> |
      <button type="button" @click="clickHandler('雨')">雨</button>
    </p>
    <HelloWorld :msg="$t('title')" />
  </div>
</template>

<script>
// @ is an alias to /src
import LocaleChanger from "@/components/LocaleChanger.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  metaInfo: {
    // titleプロパティ…個別のタイトルを指定できる。
    title: "Home"
  },
  components: {
    LocaleChanger,
    HelloWorld
  },
  computed: {
    weather() {
      // ※Vuex.Storeのstateを直接指定しても良いが、computedを使ったほうが、Vue.js DevToolsで確認もできるようになるので、この実装の方が望ましい。
      return this.$store.state.weather;
    }
  },
  methods: {
    clickHandler(newWeather) {
      // Vuexのmutationを呼び出す。その時は、this.$store.commit(タイプ名, ペイロード)
      this.$store.commit("changeWeather", {
        weather: newWeather
      });
    }
  }
  // mounted() {
  //   setTimeout(() => {
  //     this.$router.push("/about"); // router.pushメソッドを使うと、プログラム側からページ遷移ができる。
  //   }, 60000);
  // }
};
</script>
