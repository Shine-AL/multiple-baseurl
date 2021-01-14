<template>
  <div id="app">
    用户名：<input type="text" v-model="username">
    <br />
    密码：<input type="password" v-model="userpwd">
    <br />
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import {login} from '@/api/yszb'
import {auth} from '@/api/rootcloud'

export default {
  data () {
   return {
     username:'',
     userpwd:'',
     clientId:'60d3fd78',
     secret:'3ba110e38e92fb5181eef7cacb88d104'
   }
  },
  created () {},
  mounted () {},
  methods:{
    handleLogin(){
      login({
        userPhone:this.username,
        userPwd:this.userpwd
      }).then(res=>{
        localStorage.setItem('access_token', res.data.data);
        auth({
          clientId:this.clientId,
          secret:this.secret
        }).then(res=>{
          console.log(res);
        })
      })
    }
  }
}
</script>

