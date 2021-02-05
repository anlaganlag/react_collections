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
      users: [
        {
          name: "高方",
          email: "gal@gal.com",
          contacted: true,
        },

        {
          name: "bestp",
          email: "bestp@gal.com",
          contacted: true,
        },
        {
          name: "good",
          email: "good@gal.com",
          contacted: false,
        },
      ],
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
  },
};
</script>

<style scoped>
  .contacted {
    text-decoration: line-through;
  }
</style>
