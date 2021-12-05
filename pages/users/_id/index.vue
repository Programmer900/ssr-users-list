<template>
  <section>
    <btn-back @goBack="goBack"></btn-back>

    <div class="container fl-d-column full-vh">
      <h1 class="page-title">User {{ user.name }}</h1>
      <div class="page-image">
        <img class="image-placeholder__image" src="https://via.placeholder.com/2000x1000">
      </div>
      <div class="page-info">
        <p><i>{{ user.phone }}</i></p>
        <p>Website: {{ user.website }}</p>
        <p>User Email: {{ user.email }}</p>

        <NuxtLink :to="`/users/${user.id}/gallery`">
          <btn title="Смотреть галерею" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
  import Btn from '@/components/UI/Btn'
  import ButtonBack from '@/components/UI/ButtonBack'

  export default {
    components: {
      'btn': Btn,
      'btn-back': ButtonBack
    },
    async asyncData({ $axios, params, error }) {
      try {
        const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        return { user }
      } catch (e) {
        error( { statusCode: 404, message: 'User not found' } )
      }
    },
    validate({ params }) {
      return /^\d+$/.test(params.id)
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    },
  }
</script>

<style scoped lang="scss">
  .page {
    &-image {
      max-width: 300px;
      img {
        width: 100%;
      }
    }
  }

</style>

