import axios from 'axios'

export default {
  async getToken (context, payload) {
    try {
      const token = await axios.post('https://backend.dev.woowbe.com/api/v1/auth/jwt/token/', {
        email: payload.email,
        password: payload.password
      })
      context.commit('setToken', token.data.token)
      return token.data.token
    } catch (e) {
      console.log(e)
    }
  },
  async getBusinessList (context, token) {
    try {
      const response = await axios.get('https://backend.dev.woowbe.com/api/v1/business/public/',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      const businessList = response.data.results
      context.commit('setBusinessList', businessList)
    } catch (e) {
      console.log(e)
    }
  },
  async getOffersList (context, token) {
    try {
      const response = await axios.get('https://backend.dev.woowbe.com/api/v1/offers/public/',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      const offersList = response.data.results
      context.commit('setOffersList', offersList)
    } catch (e) {
      console.log(e)
    }
  },
  async getBusiness (context, payload) {
    try {
      const response = await axios.get(`https://backend.dev.woowbe.com/api/v1/business/public/${payload.id}`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`
          }
        })
      const business = response.data
      console.log(business)
      context.commit('setBusiness', business)
    } catch (e) {
      console.log(e)
    }
  },
  async getOffers (context, payload) {
    console.log(payload)
    try {
      const response = await axios.get(`https://backend.dev.woowbe.com/api/v1/offers/public/${payload.id}`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`
          }
        })
      const offers = response.data
      context.commit('setOffers', offers)
    } catch (e) {
      console.log(e)
    }
  },
  emptyOffers (context) {
    context.commit('emptyOffers')
  }
}
