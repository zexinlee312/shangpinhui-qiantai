<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log(this)
    this.$store.dispatch('getCategory')
  },
}
</script>

<style></style>
