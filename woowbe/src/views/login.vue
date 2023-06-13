<template>
  <div class="login-card">
    <h4>Woowbe Login..!</h4>
    <div class="mb-3">
      <label for="email" class="text-custom">Email address</label>
      <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
    </div>
    <div class="mb-3">
      <label for="password" class="text-start">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
    </div>
    <button type="button" class="btn btn-info w-100" @click="login">Log-in</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: 'prueba@woowbe.com',
      password: 'pruebatecnica2023!'
    }
  },
  methods: {
    ...mapActions(['getToken', 'getBusinessList', 'getOffersList']),
    async login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      const token = await this.getToken(payload)
      await this.getBusinessList(token)
      await this.getOffersList(token)
      this.$router.push('business')
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.login-card {
  background-color: #fff;
  border-radius: 5px;
  padding: 30px 15px;
  margin: 10vh auto;
  height: fit-content;
  width: 40%;
}

label {
  width: 100%;
  text-align: start;
  margin: 0.3rem;
}
</style>
