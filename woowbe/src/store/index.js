import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default createStore({
  state: {
    token: null,
    businessList: [],
    offersList: [],
    business: null,
    offers: []
  },
  getters,
  mutations,
  actions
})
