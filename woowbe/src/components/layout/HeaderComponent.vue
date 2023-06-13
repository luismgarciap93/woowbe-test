<template>
  <div class="container-fluid bg-white m-0 px-2 py-2">
    <div class="d-flex flex-row justify-content-between align-items-center">
      <div>
        <img src="@/assets/img/woowbe-logo.png" class="logo" alt="logo">
      </div>
    </div>
  </div>
</template>
<script>

// import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
    }
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
}
</style>
