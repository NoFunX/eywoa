<template>
  <div>
    <Main/>
    <div class="information">
      <img 
        src="@/assets/logo8.svg"
        class="information_logo"
      >
      <div class="information_networks">
        <div class="information_networks_case">
          <img src="@/assets/TADV.svg">
          <span class="information_networks_case_amount">4.9</span>
        </div>
        <div class="information_networks_case">
          <img src="@/assets/Google.svg">
          <span class="information_networks_case_amount">4.8</span>
        </div>
        <div class="information_networks_case">
          <img src="@/assets/Vector.svg">
          <span class="information_networks_case_amount">4.8</span>
        </div>
      </div>
      <h1 
        class="information_title"
      >
        LEARN HOW TO 
        <transition name="fade">
          <span v-show ="switcher" class="information_title_billet">{{ value }}</span>
        </transition> <br> 
        IN ABU DHABI
      </h1>
      <p class="information_paragraph">Lessons are given by ex-pro and qualified instructions</p>
      <button class="information_btn">Book Now</button>
    </div>
    <Cards/>
    <Main :data="data"/>
    <GalleryDetails/>
  </div>
</template>

<script>
  import Main from '@/components/Main.vue'
  import Cards from '@/components/Cards.vue'
  import GalleryDetails from '@/components/GalleryDetails.vue'

  export default {
    name: 'Home',
    components: {
      Main,
      Cards,
      GalleryDetails
    },
    data: () => ({
      billet: ['WAKESURF', 'WAKEBOARD', 'KITSURF', 'HYDROFOIL', 'WINGFOIL'],
      value: 'WAKESURF',
      data: {
        desc: 'Ready to ride?',
        btn: 'Reserve now'
      },
      switcher : true
    }),
    methods: {
      getValue(index){
        console.log(index)
        this.value = this.billet[index]
      },
    },
    mounted () {
      let index = 0
      setInterval(() => {
        this.switcher = !this.switcher
        if (index < this.billet.length) { 
          this.value = this.billet[index]
          index += 1
        } else {
          index = 0
        }
      }, 2000)
    }
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

  .fade-enter-active, .fade-leave-active {
    transition: all 8s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .information {
    text-align: center;
    width: 1400px;
    margin: 0 auto
  }

  .information_logo {
    margin-top: 77px
  }
  .information_networks {
    margin: 43px auto;
    display: flex;
    justify-content: space-between;
    width: 15%
  }

  .information_networks_case {
    display: flex
  }
  .information_networks_case_amount {
    margin-left: 5px;
    margin-top: 5px;
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }
  .information_title {
    margin-top: 75px;
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 84px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
  }
  .information_title_billet {
    color: #FFFFFF;
    display: inline-block;
    background-color: #000000;
    width: 400px!important;
  }
  .information_paragraph {
    margin-top: 42px;
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }
  .information_btn {
    margin-top: 54px;
    padding: 14px 21px 12px 21px;
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    background-color: #000000;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 88px;
  }

</style> 
