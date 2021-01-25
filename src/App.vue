<template>
  <div id="app">
    <!-- <Nav class="mb-6 z-10" />
    <Homepage class="z-0"/>
 -->
    <router-view />



  </div>
</template>

<script>
// import Nav from './components/Nav.vue'
// import Homepage from './views/Home/homePage'
export default {
  name: 'App',
  components: {
    // Nav,
    // Homepage
  }
}
</script>

<style>
#app {
  width: 100%;
}
</style>