<template>
    <div 
        class="main"
        :class="{ wrapper: data.btn}"
    >
        <div class="main_layer">
            <img 
                v-if="data.img"
                :src="data.img"
                class="main_title"
            >
            <div 
                v-if="data.text" 
                class="main_layer_geo"
            >
                <v-icon color="#FFFFFF">{{ data.icon }}</v-icon>
                <span class="main_layer_geo_sign">{{ data.text }}</span>
            </div>
            <div 
                v-if="data.btn"
                class="main_layer_text"
            >
                <span class="main_layer_text_span">{{ data.desc }}</span>
                <button class="main_layer_text_btn">{{ data.btn }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Object,
                default: () => {
                    return {
                        img: require('@/assets/RIDE NOW.png'),
                        icon: 'mdi-map-marker',
                        text: 'Yas Marina, Abu Dhabi'
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .main {
        display: inline-block;
        background-image: url("../assets/main.png");
        background-size: cover;
        max-width: 1400px;
        width: 100%;
        height: 800px;
        margin: 0 auto;
        position: relative;
        left: 50%;
        transform: translate(-50%);
    }
    .wrapper {
        display: inline-block;
        background-image: url("../assets/main.png");
        background-size: cover;
        max-width: 1400px;
        width: 100%;
        height: 800px;
        margin: 100px auto;
        position: relative;
    }
    .main_layer {
        background: rgba(22, 34, 57, 0.75);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .main_layer_geo {
        text-align: center;
        margin-top: 276px;
    }
    .main_title {
        display: inline-block;
        margin: 291px 49px 0 49px;
    }
    .main_layer_h1 {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-top: 5%;
        margin-left: 5%
    }
    .main_layer_button {
        margin-top: 1%;
        margin-left:5%;
        padding: 10px 14px;
        position: absolute;
        width: 122px;
        height: 34px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        border-radius: 88px;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 750;
        font-size: 10px;
        line-height: 15px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
    }

    .main_layer_geo_sign {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-left: 11px;
    }
    .main_layer_text {
        margin: 5%
    }
    .main_layer_text_span {
        display: block;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .main_layer_text_btn {
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        border-radius: 88px;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 750;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
        padding: 10px 14px;
        margin-top: 1%
    }
    button:hover {
        opacity: 0.8
  }
    
</style>

