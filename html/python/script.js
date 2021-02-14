var app = new Vue({
  el: "#root",
  data: {
    num1: 666,
    num2: 0,
    email: "",
  },
  methods: {
    updateInfo1: function (event) {
      this.num1 = event.target.value;
    },
    updateInfo2: function (event) {
      this.num2 = event.target.value;
    },
  },
});
