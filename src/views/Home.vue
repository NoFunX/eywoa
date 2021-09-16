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
        LEARN HOW TO <span class="information_title_billet">{{ value }}</span> <br> IN ABU DHABI
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
      billet: ['WAKESURF', 'WAKEBOARD', 'KITSURF'],
      value: 'WAKESURF',
      data: {
        desc: 'Ready to ride?',
        btn: 'Reverse now'
      }
    }),
    methods: {
      getValue(){
        this.billet.forEach(e => {
          setTimeout(() => {
            this.value = e
          }, 1000)
        })
      
      }
    }
  }
</script>

<style scoped>
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
    background-color: #000000
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
