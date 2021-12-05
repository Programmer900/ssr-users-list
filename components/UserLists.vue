<template>
    <div>
      <h2 class="page-title ">{{ title }}</h2>

      <div class="cards">
        <div v-for="user of users" :key="user.id" class="card">
          <NuxtLink :to="'/users/' + user.id">
            <div class="card-title">{{ user.name }}</div>
            <div class="card-description">
              <p class="small-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, veniam!</p>
            </div>
            <div class="card-phone">
              <i>{{ user.phone }}</i>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "UserLists",
    props: ['users'],
    data() {
      return {
        title: 'Список пользователей или постов'
      }
    },
    methods: {},

  }
</script>

<style scoped lang="scss">

</style>
