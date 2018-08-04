<template>
  <div>
    <Input v-model="username"  placeholder="Enter username..." />
    <Input v-model="password" type="password"  placeholder="Enter password..." />
    <Button type="success" @click="onClickLogin">登录</Button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created () {
    if (localStorage.username && localStorage.password) {
      this.axios.defaults.auth = {
        username: localStorage.username,
        password: localStorage.password
      }
      this.$router.replace('/main')
    }
  },
  methods: {
    onClickLogin () {
      this.axios.defaults.auth = {
        username: this.username,
        password: this.password
      }
      localStorage.username = this.username
      localStorage.password = this.password
      this.$router.replace('/main')
    }
  }
}
</script>
