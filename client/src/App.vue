<template>
  <div id="app">
    <header>
      <div class="wellcome">
        <span v-if="currentUser.email">
          Hi! You're logged like: {{currentUser.email}}
          <a href="#" @click="logout()">Logout</a>
        </span>
      </div>
    </header>
    <img src="./assets/logo.png">
    <div class="errors" v-if="showErros">
      <p>{{showErros}}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters({
      showErros: 'getErrors',
      currentUser: 'currentUser'
    })
  },
  methods: {
    // If not have localStorage token and path not "/" (login)
    // redirect to root (login)
    logout () {
      this.emptyLocalStorage()
      this.$store.dispatch('remove_user')
      this.$router.go('/')
    },
    emptyLocalStorage () {
      delete localStorage.token
      delete localStorage.user_email
      delete localStorage.user_id
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.wellcome {
  position: absolute;
  top: 15px;
  right: 10px;
}
</style>
