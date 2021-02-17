import { createStore } from 'vuex'
import state from './state.js'
import mutations from './mutation.js'

export default createStore({
  state,
  mutations,
})
