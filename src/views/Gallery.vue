<template>
    <div class="gallery">
        <h1 class="gallery_title">GALLERY</h1>
        <div class="gallery_centered">
            <span 
                @click="$router.push({path: '/'})"
                class="gallery_centered_text"
            >
                HOME
            </span> 
            <img 
                src="@/assets/Vector (1).svg"
                class="ml-3 mr-3 mb-1"
            > 
            <span class="gallery_centered_text">GALLERY</span>
        </div>
        <GalleryDetails
            :cards="cards"
        />
    </div>
</template>

<script>
    import GalleryDetails from '@/components/GalleryDetails.vue'
    export default {
        components: {
            GalleryDetails
        },
        data: () => ({
            cards: [
                { 
                    name: 'WAKESURF', 
                    url: require('../assets/image3.png'),
                },
                { 
                    name: 'WAKEBOARD', 
                    url: require('../assets/5ir5E9FvTBk.png'),
                    desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills',
                    btn: 'READ MORE'
                },
                { 
                    name: 'HYDROFOIL', 
                    url: require('../assets/MaskGroup.png'),
                },
    
                { 
                    name: 'KITESURF', 
                    url: require('../assets/Mask1Group.png'),
                },
                { 
                    name: 'WING FOIL', 
                    url: require('../assets/Mask2Group.png'),
                },
            ]
        })
    }
</script>

<style scoped>
    .gallery_title {
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
    .gallery_centered {
        text-align: center;
    }
    .gallery_centered_text {
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