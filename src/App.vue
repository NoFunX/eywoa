<template>
  <v-app id="app">
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    data: () => ({
      //
    }),
  };
</script>

<style>
  *{
    box-sizing: border-box
  }

  /* body {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  } */

  .v-main {
    margin: 60px auto;
    max-width: 1400px;
    width: 100%;
  }
  button:hover {
    opacity: 0.8
  }

</style>