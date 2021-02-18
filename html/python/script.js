Vue.component("blog-post", {
  props: ["post"],
  template: `
  <div class="blog-post">
  <h3>{{ post.title }}</h3>
  <button v-on:click="$emit('enlarge-text')">
    Enlarge text
  </button>
  <div v-html="post.content"></div>
</div>
  `,
});

new Vue({
  el: "#blog-post-demo",
  data: {
    posts: [
      { id: 1, title: "一.My journey with Vue", content: "最强Pro" },
      { id: 2, title: "二.Blogging with Vue", content: "天选之人theOne" },
      { id: 3, title: "三.Why Vue is so fun", content: "价值" },
    ],
    postFontSize: 1,
  },
});
