export default {
  state: {
    quotes: []
  },

  getters: {
    getQuotes (state) {
      return state.quotes
    }
  },

  mutations: {
    LOAD_QUOTES (state, payload) {
      state.quotes = payload
    }
  },

  actions: {
    set_quotes ({commit}, payload) {
      commit('LOAD_QUOTES', payload)
    }
  }
}
