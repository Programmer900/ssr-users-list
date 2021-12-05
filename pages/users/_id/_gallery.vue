<template>
  <section>
    <btn-back @goBack="goBack"></btn-back>
    <div class="container full-vh fl-d-column">
      <div>
        <h1 class="page-title">{{ title }} {{ user.name }}</h1>
      </div>

      <div class="gallery-wrapper">
        <v-gallery :images="images" :index="index" @close="index = null"></v-gallery>
        <div
          class="image"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')', width: '200px', height: '200px' }"
        ></div>
      </div>
    </div>

  </section>
</template>

<script>
  import ButtonBack from '@/components/UI/ButtonBack'

  export default {
    name: "Gallery",
    components: {
      'btn-back': ButtonBack,
    },
    async asyncData({$axios, params, error}) {
      try {
        const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        return { user }
      } catch (e) {
        error( { statusCode: 404, message: 'User not found' } )
      }
    },
    data() {
      return {
        title: 'Gallery',
        images: [
          'https://neaktor.com/blog/wp-content/uploads/2018/08/126.jpg',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://www.kleo.ru/img/articles/otFe4.jpg',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
        //or this.$router.push('/');
      }
    },
    computed: {},
  }
</script>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px 5px 48px 5px;
    cursor: pointer;
  }
</style>
