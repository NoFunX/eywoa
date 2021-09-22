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
            :galleries="cards"
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
                  name: 'GALLERY NAME',
                  photos: '10 photos'
                },
                {
                  name: 'GALLERY NAME',
                  photos: '22 photos'
                },
                {
                  name: 'GALLERY NAME',
                  photos: '12 photos'
                },
                {
                  name: 'GALLERY NAME',
                  photos: '2 photos'
                },
                {
                  name: 'GALLERY NAME',
                  photos: '8 photos'
                },
                {
                    name: 'GALLERY NAME',
                    photos: '16 photos'
                },
                {
                    name: 'GALLERY NAME',
                    photos: '20 photos'
                }
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