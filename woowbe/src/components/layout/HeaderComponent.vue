<template>
  <div class="container-fluid bg-white m-0 px-2 py-2">
    <div class="d-flex flex-row justify-content-between align-items-center">
      <div>
        <img src="@/assets/img/woowbe-logo.png" class="logo" alt="logo" @click="goToLogin">
      </div>
      <div v-if="userInfo" class="user-info">Logged as: <span class="badge rounded-pill bg-info .text-light">{{
        userInfo.email }}</span>
      </div>
      <bellNotification v-if="userInfo" class="bell" :notifications="userInfo.unread_notifications_count">
      </bellNotification>
    </div>
  </div>
</template>
<script>

import bellNotification from '@/components/common/bell.vue'

import { mapState } from 'vuex'

export default {
  name: 'Header',
  components: {
    bellNotification
  },
  data () {
    return {
      notifications: 0,
      cart: 0
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState(['userInfo'])
  }
}

</script>

<style scoped>
.prep-link {
  color: #15a28e;
  font-size: 0.8rem;
  text-decoration: none;
  display: inline-block;
  height: 25%;
}

.logo {
  height: 35px;
  cursor: pointer;
}

.user-info {
  margin-left: auto;
  margin-right: 1rem;
}
</style>
