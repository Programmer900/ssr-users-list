<template>
    <div class="navbar-wrapper">
      <div class="navbar">
        <div>
          <NavbarItem v-for="pageItem in pages" :key="pageItem.id" :page="pageItem" />
        </div>
        <Switcher />
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      pages: [
        { id: 1, name: 'Главная', link: '/', exact: true },
        { id: 2, name: 'О нас', link: '/about', exact: false },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "assets/css/variables";

  .navbar-wrapper {
    background-color: $theme-light-bg;
    color: $theme-light-text-color;
    padding: 20px;
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .theme-dark {
    .navbar-wrapper {
      background-color: $theme-dark-bg;
      color: $theme-dark-text-color;
    }
  }
</style>
