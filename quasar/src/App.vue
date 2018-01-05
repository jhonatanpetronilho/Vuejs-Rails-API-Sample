<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
  <!-- Header -->
  <q-toolbar slot="header" v-if="this.$route.path !== '/'">
    <q-btn flat @click="$refs.layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title>
      Dashboard
      <span slot="subtitle">Quasar API Sample</span>
    </q-toolbar-title>
  </q-toolbar>
  <!-- Left Side Panel -->
  <div slot="left">
    <q-list no-border link inset-separator>
      <q-list-header>Logged with: {{currentUser.email}}</q-list-header>
      <q-side-link item to="/docs">
        <q-item-side icon="link" />
        <q-item-main label="Link" sublabel="Some menu link" />
      </q-side-link>
      <q-item @click="logout">
        <q-item-side icon="power_settings_new" />
        <q-item-main label="Logout" />
      </q-item>
    </q-list>
  </div>
  <!-- sub-routes get injected here: -->
  <router-view />
  <!-- Footer -->

</q-layout>
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
      delete localStorage.user
    }
  }
}
</script>
