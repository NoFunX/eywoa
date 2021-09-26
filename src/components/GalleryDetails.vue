<template>
    <div class="cards">
      <div
        v-for="(gallery, index) of galleries"
        :key="index"
        class="cards_gallery"
        :class="{ cards_gallery_long: gallery.photos === '22 photos' || gallery.photos === '16 photos'  }"
      >
        <h1 
          class="cards_gallery_title"
          :class="{ 
            cards_gallery_title_long: gallery.photos === '22 photos'
          }"
        >
          {{ gallery.name }}
        </h1>
        <span class="cards_gallery_photos">{{ gallery.photos }}</span>
        <svg class="cards_gallery_sign">
          <use xlink:href="@/assets/sprite.svg#gallery"></use>
        </svg>
      </div>
    </div> 
</template>

<script>
export default {
    props: {
        galleries: {
            type: Array,
            default: () => [
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
            ]
        }
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
  .cards {
    margin: 60px auto 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1300px;
    width: 100%;
  }
  
  .cards_gallery {
    max-width: 400px;
    width: 100%;
    height: 400px;
    background: #E9E9E9;
    position: relative;
    margin-top: 4%;
    cursor:pointer
  }
  .cards_gallery:hover .cards_gallery_sign{
    fill: #d2d4d3;
  }
  .cards_gallery:hover {
    opacity: 0.7;
  }
  .cards_gallery_title {
    font-family: Avenir Next Cyr,sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
    margin-top: 10%;
    margin-left: 7%
  }

  .cards_gallery_photos {
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-left: 7%;
    margin-top: 10%
  }

  .cards_gallery_long {
    max-width: 850px !important;
    width: 100%;
    height: 400px;
    background: #E9E9E9;
    
  }
  .cards_gallery_title_long {
    margin-top: 5%
  }
  .cards_gallery_sign {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 53px;
    height: 53px;
    fill: #E9E9E9
  }
</style>
