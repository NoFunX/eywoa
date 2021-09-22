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

@font-face {
  font-family: Avenir Next Cyr, sans-serif;
  src: url('fonts/avenirnextcyr-bold.woff') format('woff'),
  url('fonts/avenirnextcyr-bold.woff2') format('woff2');
}
  .v-main {
    margin: 60px auto 0 auto;
    max-width: 1400px;
    width: 100%;
  }
  button:hover {
    opacity: 0.8
  }

</style>