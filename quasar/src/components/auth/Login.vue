<template lang="html">
  <div class="window-height window-width row justify-center items-center">
    <q-card>
      <q-card-title class="text-center">
        <h5>Sign-in</h5>
        <q-icon name="lock" />
      </q-card-title>
      <q-card-main>
        <q-item>
          <q-field
            icon="account_circle"
            helper="Your email account"
          >
            <q-input
              type="email"
              v-model="email"
              float-label="Email"
            />
          </q-field>
        </q-item>
        <q-item>
          <q-field
            icon="lock"
            helper="Your password"
          >
            <q-input
              type="password"
              v-model="password"
              float-label="Password"
              @keyup.enter="login"
              required
            />
          </q-field>
        </q-item>
        <q-btn color="primary" class="full-width" @click="login">
          Sign-in
        </q-btn>
        <br><br>
        <q-btn color="white" class="text-black full-width">
          Create New Account
        </q-btn>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
import {http} from 'src/http'
import {toast} from 'src/helpers/toast'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  created () {
    this.checkCurrentLogin()
  },
  updated () {
    this.checkCurrentLogin()
  },
  methods: {
    // verify for existing token and redirect to dashboard
    checkCurrentLogin () {
      if (localStorage.token) {
        this.$router.replace(this.$route.query.redirect || '/dashboard')
      }
      delete localStorage.user
    },
    login () {
      http.post('auth', {auth: {email: this.email, password: this.password}})
        .then(response => {
          this.loginSuccessful(response)

          toast('Successful login. Wellcome! :)', 'done')
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
