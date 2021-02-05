<template>
  <div class="test">
    <input type="text" v-model="title" />
    <br />
    <span v-text="title"></span>
    <p v-if="showName">{{ user.first_name }}</p>
    <p v-else>没人了</p>

    <p v-text="user.last_name"></p>
    <ul>
      <li v-for="i in items">{{ i.title }}</li>
    </ul>
    <button @click="greet('牛逼了')">问好</button>
    <input type="text" @keyup="pressKey" @keyup.enter="enterHit"></input>
    <hr />
    <label>姓 </label> <input type="text" v-model="user.first_name"></input>
    <br />
        <label>名</label> <input type="text" v-model="user.last_name"></input>
    <h3>{{fullName}}</h3>

    <h2> {{msg}} </h2>
  </div>
</template>

<script>
export default {
  name: "test",
  props:{
        msg:{
            type:String,
            default:"随便"
        }
  },

  data() {
    return {
      title: "Galfond",
      user: {
        first_name: "Gal",
        last_name: "Fond"
      },
      showName: false,
      items: [{ title: "项目1" }, { title: "项目2" }, { title: "项目3" }]
    };
  },

  methods: {
    greet: function(arg) {
      alert(arg);
    },
    pressKey:function(e){
        console.log(e.target.value)
    },
    enterHit:function(){
        console.log("按下了回车")
    }
    },
    computed:{
        fullName:function(){
            return this.user.first_name + " " + this.user.last_name 
        }
    }
}
</script>

<style scoped></style>
