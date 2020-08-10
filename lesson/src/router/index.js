import Vue from "vue";
import VueRouter from "vue-router";
// vue-metaをインポート
import Meta from "vue-meta";
import Home from "../views/Home.vue";

// Vue.useメソッドで、利用するルーターを指定している。これで、Vue.jsとVue Routerとの紐付けは完了。
Vue.use(VueRouter);
// vue-metaを使用する。これで、Vue.jsとvue-metaとの紐付けは完了。
Vue.use(Meta);

// ルート情報をconstで定義。
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
    component: () => import("../views/User.vue")
  }
];

// ルーターインスタンスを作成。
const router = new VueRouter({
  routes
});

// ルーターインスタンスを別のJavascriptファイルで利用できるようにexportする。
export default router;
