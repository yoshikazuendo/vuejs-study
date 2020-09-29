// index.js
const vm = new Vue({
  el: '#app', // ここで指定したHTMLの要素配下がVueの影響を及ぼす範囲となる
  data: {
    message: 'hello!',
    googleUrl: 'https://google.com',
    isCoffee: true,
    foods: [{
        id: 1,
        name: "りんご"
      },
      {
        id: 2,
        name: "みかん"
      },
      {
        id: 3,
        name: "メロン"
      },
    ],
    counter: 0,
    fullName : '',
  },
  methods:{
    add(count) {
      this.counter += count;
    },
    sub(count) {
      this.counter -= count;
    }
  }
});
