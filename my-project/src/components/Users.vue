<template>
  <div class="users">
    <h1>用户</h1>
    <form @submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="某个用户" />
      <br />
      <input type="text" v-model="newUser.email" placeholder="某个邮箱" />
      <br />
      <input type="submit" value="提交" />
    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted" />
        <span :class="{ contacted: user.contacted }">
          {{ user.name }}:{{ user.email }}
          <button @click="deleteUser(user)">X</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "users",

  data() {
    return {
      newUser: {},
      users: [],
    };
  },

  methods: {
    addUser: function (e) {
      console.log("添加用户");
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false,
      });
      e.preventDefault();
    },
    deleteUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
  },
  created: function () {
    console.log("创建函数开始运行");
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (resp) {
        console.log(resp.data);
        this.users = resp.data
      });
  },
};
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>
