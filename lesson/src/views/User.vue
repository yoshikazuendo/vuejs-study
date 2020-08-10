<template>
  <div class="user">
    <!-- $routeで、アクティブなルーティングデータを利用することができる。 -->
    <h1>This is a user page for {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "User" // TODO:なぜかUser.vueだけタイトルが設定されない…理由が不明。
  }
};
</script>
