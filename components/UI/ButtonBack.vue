<template>
  <div class="container">
      <span @click="$emit('goBack')" class="home">
        <font-awesome-icon :icon="['fa', 'arrow-left']"/>
      </span>
  </div>
</template>

<script>
    export default {
        name: "ButtonBack"
    }
</script>

<style scoped lang="scss">
  .home {
      cursor: pointer;
      padding-left: 0;
      background-color: #fff;
      border-radius: 50px;
      width: 50px;
      height: 50px;
      display: flex;
      color: #000;
      align-items: center;
      justify-content: center;
    }

    .theme-light {
    .home {
      background-color: #333;
      color: #fff;
    }
  }
</style>
