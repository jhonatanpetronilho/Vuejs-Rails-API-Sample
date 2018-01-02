<template lang="html">
  <div class="dashboard-path">
    <h1>Dashboard</h1>
    <hr>
    <div class="posts">
      <h2>Quotes</h2>

      <blockquote v-for="quote in quotes">
	       <p>"{{quote}}"</p>
      </blockquote>
    </div>
  </div>
</template>

<script>
import {http} from '@/http'
import {mapGetters} from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters({
      quotes: 'getQuotes'
    })
  },
  mounted () {
    http.get('dashboard')
    .then(response => this.$store.dispatch('set_quotes', response.data))
  }
}
</script>

<style lang="css" scoped>
</style>
