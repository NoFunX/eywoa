<template>
    <div class="sports">
        <h1 class="sports_title">SPORTS</h1>
        <div class="sports_centered">
            <span
                @click="$router.push({path: '/'})" 
                class="sports_centered_text"
            >
                HOME
            </span> 
            <img 
                src="@/assets/Vector (1).svg"
                class="ml-3 mr-3 mb-1"
            > 
            <span class="sports_centered_text">SPORTS</span>
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
                    name: 'WAKESURF', 
                    url: require('../assets/image3.png'),
                    desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills',
                    btn: 'READ MORE',
                    mouseHover: false,
                    height: '400px',
                    width: '400px'
                },
                { 
                    name: 'WAKEBOARD', 
                    url: require('../assets/5ir5E9FvTBk.png'),
                    desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills',
                    btn: 'READ MORE',
                    mouseHover: false,
                    height: '400px',
                    width: '400px'
                },
                { 
                    name: 'HYDROFOIL', 
                    url: require('../assets/MaskGroup.png'),
                    desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills',
                    btn: 'READ MORE',
                    mouseHover: false,
                    height: '400px',
                    width: '400px'
                },
    
                { 
                    name: 'KITESURF', 
                    url: require('../assets/Mask1Group.png'),
                    desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills',
                    btn: 'READ MORE',
                    mouseHover: false,
                    height: '400px',
                    width: '400px'
                },
                { 
                    name: 'WING FOIL', 
                    url: require('../assets/Mask2Group.png'),
                    desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills',
                    btn: 'READ MORE',
                    mouseHover: false,
                    height: '400px',
                    width: '400px'
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
    .sports_title {
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
    .sports_centered {
        text-align: center;
    }
    .sports_centered_text {
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
