<template>
  <button class="btn">{{ title }}</button>
</template>

<script>

  export default {
    props: ['title']
  }

</script>

<style lang="scss">
  @import "assets/css/variables";

  .btn {
    background-color: $accent-color;
    padding: 10px;
    border: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: $white;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 12px;
  }
</style>
