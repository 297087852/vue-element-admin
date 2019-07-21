const app = {
  namespaced: true,

  state: {
    language: 'zh'
  },

  mutations: {
    'SET_LANGUAGE' (state, lang) {
      state.language = lang
    }
  },

  actions: {
    setLanguage ({commit}, lang) {
      commit('SET_LANGUAGE', lang)
    }
  }
}

export default app
