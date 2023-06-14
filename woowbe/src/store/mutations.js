export default {
  setToken (state, payload) {
    state.token = payload
  },
  setBusinessList (state, payload) {
    state.businessList = payload
  },
  setOffersList (state, payload) {
    state.offersList = payload
  },
  setUserInfo (state, payload) {
    state.userInfo = payload
  },
  setBusiness (state, payload) {
    state.business = payload
  },
  setOffers (state, payload) {
    state.offers.push(payload)
  },
  emptyOffers (state) {
    state.offers = []
  }
}
