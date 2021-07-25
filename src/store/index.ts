import Vuex from 'vuex'
import Vue from 'vue'
// @ts-ignore
import createLogger from 'vuex/dist/logger'
import{ home }  from './modules'
// @ts-ignores
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const vuexPersisted = new createPersistedState({
  storage: {
    getItem: (key: string) => uni.getStorageSync(key),
    setItem: (key: string, value: any) => uni.setStorageSync(key, value),
    removeItem: (key: string) => uni.clearStorageSync()
  }
})


const DEBUG = process.env.NODE_ENV === 'development'

const store = new Vuex.Store({
  strict: DEBUG,
  plugins: DEBUG ? [createLogger({}), vuexPersisted] : [vuexPersisted],
  modules: {
    home
  }
})

export default store