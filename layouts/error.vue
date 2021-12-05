<template>
    <div class="container full-vh">
      <div class="center-block">
        <h1>{{ errorText }}</h1>
      </div>
    </div>
</template>

<script>
  export default {
    name: "error",
    data() {
      return {
        errorText: '404 Error. Page, not found!'
      }
    },
    mounted() {
      // console.log('Error Layout')
    }
  }
</script>

<style scoped>

</style>
