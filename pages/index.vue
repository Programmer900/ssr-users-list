<template>
  <section>
    <div class="grid">
      <nuxt />
      <UserLists :users="users"/>
    </div>
  </section>
</template>

<script>
export default {
  async fetch({ store }) {
    if(store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetchUsers')
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  }
}
</script>
