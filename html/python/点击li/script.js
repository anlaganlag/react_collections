new Vue({
  el: "#dynamic-component-demo",
  data: {
    movies: ["海王", "海尔兄弟", "海贼王", "红海"],
    curIdx: 0,
  },
  computed: {
    currentTabComponent: function () {
      return "tab-" + this.currentTab.toLowerCase();
    },
  },
  methods: {
    liClick(idx) {
      this.curIdx = idx;
    },
  },
});
