<template lang="html">
  <div class="login-path">
    <h1>Login</h1>
    <form @submit.prevent="login()">
      <p>
        Email: <br>
        <input type="email" v-model="email" />
      </p>
      <p>
        Password: <br>
        <input type="password" v-model="password" />
      </p>
      <input type="submit" value="Login"/>
    </form>
  </div>
</template>

<script>
import {http} from '@/http'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      http.post('auth', {auth: {email: this.email, password: this.password}})
      .then(response => {
        this.loginSuccessful(response)
      })
      .catch(() => this.loginFailed)
    },
    // unless login error exeucute login loginFailed
    // mountUserInfo and move to dashboard
    loginSuccessful (response) {
      if (!response.data.jwt) {
        this.loginFailed()
        return
      }

      this.mountUserInfo(response)
      this.$router.replace(this.$route.query.redirect || '/dashboard')
    },
    loginFailed () {
      delete localStorage.token
    },
    mountUserInfo (response) {
      localStorage.token = response.data.jwt
      localStorage.user = JSON.stringify(response.data.user)

      this.$store.dispatch('set_user', response.data.user)
    }
  }
}
</script>

<style lang="css">
</style>
