export default {
  state: {
    user: localStorage.user ? JSON.parse(localStorage.user) : false,
    errors: false
  },

  getters: {
    currentUser (state) {
      return state.user
    },
    getErrors (state) {
      return state.errors
    }
  },

  mutations: {
    LOAD_ERRORS (state, payload) {
      state.errors = payload
    },
    LOAD_USER (state, payload) {
      state.user = payload
    },
    REMOVE_USER (state, payload) {
      state.user = null
    }
  },

  actions: {
    set_errors ({commit}, payload) {
      commit('LOAD_ERRORS', payload)
    },
    set_user ({commit}, payload) {
      commit('LOAD_USER', payload)
    },
    remove_user ({commit}) {
      commit('REMOVE_USER')
    }
  }
}
