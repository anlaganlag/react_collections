Vue.component("Questionbox", {
  props: ["cats"],
  template: `
    <h1>问题盒子</h1>
  `,
});

Vue.component("headerbox", {
  props: ["cats"],
  template: `
    <h1>头部盒子</h1>
  `,
});

var app = new Vue({
  el: "#root",
  components: ["Questionbox", "headerbox"],
  data: {
    num1: 666,
    num2: 0,
    email: "",
    cats: [
      { name: "gal" },
      { name: "fond" },
      { name: "best" },
      { name: "pro" },
      { name: "nb" },
    ],
    newCat: "",
  },
  methods: {
    addKitty: function () {
      this.cats.push({ name: this.newCat });
      this.newCat = "";
    },
    updateInfo1: function (event) {
      this.num1 = event.target.value;
    },
    updateInfo2: function (event) {
      this.num2 = event.target.value;
    },
  },
  filters: {
    cap: function (value) {
      return value.toUpperCase();
    },
  },
});
