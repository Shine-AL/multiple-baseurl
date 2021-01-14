<template>
  <div>
    用户名：<input type="text" v-model="username"/>
    <br/>
    密码：<input type="password" v-model="">
    <button @click="handleLogin">登录</button>
  </div>
</template>
<script>
import {login} from '@/api/yszb'

export default {
  name: "test",
  data () {
   return {
     username:'',
     userpwd:''
   }
  },
  created () {},
  mounted () {},
  methods:{}
}
</script>
<style lang="scss" scoped>
</style>