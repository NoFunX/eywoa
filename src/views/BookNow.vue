<template>
    <div class="book-now">
        <h1 class="book-now_title">BOOK NOW</h1>
        <div class="book-now_cards">
            <div
                v-for="(card, index) of cards"
                :key="index" 
                class="book-now_cards_card"
            >
                <div
                    :style="{
                    'backgroundImage': `url(${card.url})`,
                    'backgroundSize': 'cover',
                    'max-width': '400px',
                    'width': '100%',
                    'height': '400px',
                    'position': 'relative',
                    }
                    "
                >
                    <div 
                        v-if="card.url && card.name !== 'CUSTOM BOARDS'"
                        class="cards_card__layer"
                    >
                        <h1
                            v-if="card.name"
                            class="cards_card_title"
                            :class="{ 
                            cards_card_title_coach: card.name === 'MEET NICK'}"
                        >
                            {{ card.name }}
                        </h1>
                    </div>
                </div>
                <div class="book-now_cards_card_content">
                    <p class="book-now_cards_card_text"> {{ card.desc }}</p>
                    <button class="book-now_cards_card_btn">REVERSE NOW</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        cards: [
             { 
                name: 'WAKESURF', 
                url: require('../assets/image3.png'),
                desc: 'Learn how to waksurf in no time, improve your airs and spins'
            },
            { 
                name: 'WAKEBOARD', 
                url: require('../assets/5ir5E9FvTBk.png'),
                desc: 'Improve your spin and invert in the best set up \n that you can find. Always flat water, pro coach, wake according to your scills'
            },
            { 
                name: 'KITESURF', 
                url: require('../assets/Mask1Group.png'),
                desc: 'Kitsurf in Abu-Dhabi: lessons, kite rental, kite repair'
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
    .book-now_title {
        text-align: center;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 60px;
        line-height: 84px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
        margin-top: 60px;
    }
    .cards_card__layer {
        background: rgba(36, 62, 112, 0.75);
        filter: alpha(Opacity=70); 
        color: #fff;
        position: absolute; 
        left:0;
        right:0;
        top:0;
        bottom:0;
    }
    .cards_card_title {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-top: 12%;
        margin-left: 10%
    }
    .book-now_cards {
        max-width: 1300px;
        margin: 0 auto 8% auto
    }
    .book-now_cards_card {
        display: flex;
        height: 400px;
        margin-top: 4%;
    }
    .book-now_cards_card_content {
        background: #282828;
        max-width: 1000px;
        width: 100%;
        position: relative;
    }
    .book-now_cards_card_text {
        margin: 4%;
        position: absolute;
        width: 324px;
        height: 44px;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        color: #FFFFFF;
    }
    .book-now_cards_card_btn {
        padding: 10px 14px;
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
        position: absolute;
        top: 75%;
        left: 4%;
    }
</style>