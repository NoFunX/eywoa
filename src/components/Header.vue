<template>
  <header class="header">
    <div style="position: relative">
      <div class="header_container">
        <div class="header_container_menu">
          <Menu/>
        </div>
        <div
          @click="$router.push({path: '/'})" 
          class="header_container_home"
        >
          <img 
            v-if="$route.path !== '/'"
            src="@/assets/Home.svg"
          >  
        </div>
        <nav class="header_container_nav">
          <router-link
            v-for="link of navLinks.filter(e => e.name !== 'Contact Us')"
            :key="link.name"
            :to="link.path"
            class="header_container_nav_link"
            :class="{ header_container_nav_link_book : link.name === 'Book Now' }"
          >
            {{ link.name }}
          </router-link>
        </nav>
        <div class="header_container_contact">
          <Contact/>
        </div>
        </div>
    </div>
  </header>
</template>

<script>
  import Menu from '@/components/Menu.vue'
  import Contact from '@/components/ContactUs.vue'
  export default {
    name: 'Home',
    components: {
      Menu,
      Contact
    },
    data: () => ({
      navLinks: [
        { name: 'Sports', path: '/sports' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Book Now', path: '/book_now' },
      ]
    }),
  }
</script>

<style scoped>
  @font-face {
    font-family: Avenir Next Cyr;
    src: url('../fonts/avenirnextcyr-bold.woff') format('woff'),
    url('../fonts/avenirnextcyr-bold.woff2') format('woff2');
  }
  @font-face {
    font-family: Avenir Next Cyr;
    src: url('../fonts/avenirnextcyr-regular.woff') format('woff'),
    url('../fonts/avenirnextcyr-regular.woff2') format('woff2');
  }
  .header {
    padding: 0 4%;
    width: 100%;
    height: 60px;
    z-index: 9999;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.8);
  }
  .header_container {
    display: flex;
    justify-content: center;
    
  }

  .header_container_menu {
    margin-top: 17px;
    position: absolute;
    left: 0
  }
  .header_container_home{
    margin-top: 12px;
    cursor: pointer;
    width: 42px;
    position: absolute;
    left: 16%
  }

  .router-link-exact-active {
    opacity: 0.5;
  }

  .header_container_nav {
    margin-top: 17px;
  }

  .header_container_nav_link {
    text-decoration: none;
    color: black;
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: 750;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
    margin-right: 40px;
  }

  .header_container_nav_link:hover {
    opacity: 0.5
  }

  .header_container_nav_link_book {
    color: white;
    padding: 10px 16px;
    background: #000000;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 88px;
  }

  .header_container_contact {
    margin-top: 17px;
    position: absolute;
    right: 0
  }

</style>
