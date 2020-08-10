import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // state…アプリケーションの状態そのものを保持する。ページやコンポーネントに依存しないアプリケーション全体で保持しておきたいものを定義。読み取り専用。
  state: {
    weather: "晴れ"
  },
  // mutation…stateを変更する。タイプとハンドルを１つずつ持てる。タイプ…関数名、ハンドル…タイプに対する関数的なもの。
  // ハンドラは、引数を２つ受け取ることができる。(state, payload)
  //// state…state自体。
  //// payload…基本オブジェクト形式。いわばなんでもアリ。
  // mutationは同期的でなければならない。つまり、外部とのAPI通信など、非同期処理と組み合わせることは不可能。
  mutations: {
    changeWeather(state, payload) {
      state.weather = payload.weather;
    }
  },
  // action…非同期処理を含めることができる。また、mutationを呼び出すこともできる。
  actions: {},
  modules: {}
});
