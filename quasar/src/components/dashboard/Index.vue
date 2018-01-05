<template>
  <div class="view-parallax">
    <q-parallax :src="'https://upload.wikimedia.org/wikipedia/en/b/b3/Alt.nerd.obsessive.png'" :height="250">
      <div slot="loading">Loading...</div>
      <h3 class="text-center" style="color:white">"Simpsons Quotes"</h3>
    </q-parallax>

    <div class="cards" v-for="quote in quotes">
      <q-card>
        <q-card-main>
          <h5 class="text-grey-8"><i>"{{quote}}"</i></h5>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import {http} from 'src/http'
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
      .then(response => {
        if (response) {
          this.$store.dispatch('set_quotes', response.data)
        }
      })
      .catch(e => console.log(e))
  }
}
</script>

<style lang="css" scoped>

</style>
