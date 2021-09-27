<template>
    <div class="services">
        <h1 class="services_title">SERVICES</h1>
        <div class="services_centered">
            <span 
                @click="$router.push({path: '/'})"
                class="services_centered_text"
            >
                HOME
            </span> 
            <img 
                src="@/assets/Vector (1).svg"
                class="ml-3 mr-3 mb-1"
            > 
            <span class="services_centered_text">SERVICES</span>
        </div>
        <Cards
            :cards="cards"
        />
    </div>
</template>

<script>
    import Cards from '@/components/Cards.vue'
    export default {
        components: {
            Cards
        },
        data: () => ({
            cards: [
                { 
                    name: 'BOARD REPAIR', 
                    url: require('../assets/Mask10Group.png'),
                    desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills',
                    btn: 'READ MORE',
                    mouseHover: false,
                    height: '400px',
                    width: '400px'
                },
                { 
                    name: 'BOAT CRUISE', 
                    url: require('../assets/Rectangle180.png'),
                    desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills',
                    btn: 'READ MORE',
                    mouseHover: false,
                    height: '400px',
                    width: '400px'
                },
                { 
                    name: 'ACTION SHOTS', 
                    url: require('../assets/image3.png'),
                    desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills',
                    btn: 'READ MORE',
                    mouseHover: false,
                    height: '400px',
                    width: '400px'
                },
                { 
                    url: require('../assets/image6.png'),
                    name: 'CUSTOM BOARDS',
                    desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills',
                    btn: 'READ MORE',
                    mouseHover: false,
                    height: '400px',
                    width: '850px'
                },
            ]
        })
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
    .services_title {
        text-align: center;
        margin-top: 60px;
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
    .services_centered {
        text-align: center;
    }
    .services_centered_text {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
        opacity: 0.5;
        cursor: pointer;
    }

</style>