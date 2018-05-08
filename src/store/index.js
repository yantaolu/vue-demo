import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import modules from './modules'

Vue.use(Vuex)

const state = {}

const mutations = {}

const actions = {}

const getters = {}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: modules,
  plugins: [createLogger()],
  strict: process.env.NODE_ENV !== 'production'
})

export default store
