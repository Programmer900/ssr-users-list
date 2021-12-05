<template>
  <div class="link-item">
    <NuxtLink no-prefetch :to="page.link" :exact="page.exact" active-class="active">
      {{ page.name }}
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    name: "NavbarItem",
    props: {
      page: Object
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/css/variables";

  .link-item {
    display: inline-block;
    margin-right: 10px;
    font-size: 18px;
    text-transform: uppercase;
     a {
       text-decoration: none;
       color: $theme-light-text-color;
       &.active {
         color: $shadow-text-color;
         text-shadow: $shadow-text-color 0 0 2px;
       }
     }
    .nuxt-link {
      text-decoration: none;
      color: $theme-light-text-color;
    }

    &-exact-active {
      text-decoration: none;
    }
  }

  .theme-dark {
    a {
      color: $theme-dark-text-color;
    }
  }
</style>
