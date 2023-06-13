<template>
  <div class="container-fluid px-0 main-section out-container">
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    <div class="row container-fluid p-0 m-0 vh-100">
      <div class="col py-0 px-2 main-container">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/layout/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #464646;
}

body {
  font-size: 13px;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

h1,
h2,
h4,
h5,
h6 {
  margin: 0;
}

h3 {
  margin-bottom: 2rem;
}

.main-section {
  background-color: #F8F8F8;
}

.out-container {
  max-height: 100vh;
  overflow: hidden;
}

.main-container {
  height: 92%;
  overflow: auto;
}

/*
nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
