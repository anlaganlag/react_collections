Vue.component("tab-home", {
  template: "<div>主页的组件</div>",
});
Vue.component("tab-posts", {
  template: "<div>帖子的组件</div>",
});
Vue.component("tab-archive", {
  template: "<div>历史帖子</div>",
});

new Vue({
  el: "#dynamic-component-demo",
  data: {
    checked:false,
    checkedNames: [],
    currentTab: "Home",
    tabsName: { Home: "首页", Posts: "帖子", Archive: "历史帖子" },
    tabs: ["Home", "Posts", "Archive"],
  },
  computed: {
    currentTabComponent: function () {
      return "tab-" + this.currentTab.toLowerCase();
    },
  },
});
