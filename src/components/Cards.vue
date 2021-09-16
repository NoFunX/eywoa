<template>
    <div class="cards">
        <div
            v-for="(card, index) of cards"
            :key="index"
            :style="{
              'backgroundImage': `url(${card.url})`,
              'backgroundSize': 'cover',
              'max-width': '400px',
              'width': '100%',
              'height': '400px',
              'position': 'relative',
              
            }
            "
            :class="{
                cards_first_card: index === 0,
                cards_card_coach: card.name === 'MEET NICK',
                cards_card_custom: card.name === 'CUSTOM BOARDS',
                cards_card_foil: card.name === 'WING FOIL'
            }"
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
            <span 
                v-if="card.coach"
                class="cards_card_surhcoach"
            >
                {{ card.coach }}
            </span>
            <p 
                v-if="card.desc"
                class="cards_card_desc"
                :class="{ cards_card_title_p: card.name === 'MEET NICK'}"
            >
                {{ card.desc }}
            </p>
            <img
                class="cards_card_image" 
                :src="card.img"
                v-if="card.img"
            >
            <button 
                v-if="card.btn"
                class="cards_card_btn"  
            > 
                {{ card.btn }}
            </button>
            </div>
            <div
            v-if="!card.url && card.name === 'Roberto Rey'"
            >
            <img class="cards_card_quotes" :src="card.quotes">
            <p class="cards_card_quote"> {{ card.desc }}</p>
            <div class="cards_card_named">
                <img class="mr-4" :src="card.img">
                <span class="cards_card_name"> {{ card.name}}</span>
            </div>
            <img 
                :src="card.img2"
                class="cards_card_img"
            >
            </div>
            <div
              v-if="card.name === '06:00 - 18:00'"
            >
            <div class="cards_card_centered">
                <h1 class="cards_card_centered_title">{{ card.name }}</h1>
                <span class="cards_card_centered_desc">{{ card.desc }}</span>
            </div>
            <button class="cards_card_centered_btn"> {{ card.btn }} </button>
            </div>
            <div
              v-if="card.name === 'CUSTOM BOARDS'"
              class="cards_card_custom_boards"
            >
              <h1> {{ card.name }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cards: {
            type: Array,
            default: () => [
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
                    url: false,
                    desc: 'Best place to progress \n your riding skills',
                    img: require('@/assets/Google(2).png'),
                    name: 'Roberto Rey',
                    img2: require('@/assets/Group23.png'),
                    quotes: require('@/assets/quotes.png')
                },
                { 
                    name: 'HYDROFOIL', 
                    url: require('../assets/MaskGroup.png'),
                },
                { 
                    name: '06:00 - 18:00', 
                    desc: 'NO WEEKENDS',
                    btn: 'BOOK NOW'
                },
                { 
                    name: 'KITESURF', 
                    url: require('../assets/Mask1Group.png'),
                },
                { 
                    name: 'WING FOIL', 
                    url: require('../assets/Mask2Group.png'),
                },
                { 
                    name: 'BOAT CRUISE', 
                    url: require('../assets/Rectangle180.png'),
                },
                { 
                    name: 'MEET NICK',
                    coach: 'SURF COACH',
                    desc: 'Coaching since 1993', 
                    url: require('../assets/Mask3Group.png'),
                },
                { 
                    url: require('../assets/Rectangle166.png'),
                    img: require('@/assets/Group21.png')
                },
                { 
                    url: require('../assets/image6.png'),
                    name: 'CUSTOM BOARDS'
                },
            ]
        }
    }
}
</script>

<style scoped>
  .cards {
    margin: 60px auto 100px auto;
    display: grid;
    grid-template-columns: repeat(3, 400px);
    grid-column-gap: 2%;
    grid-row-gap: 2%;
    max-width: 1300px;
    width: 100%;
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
  .cards_card_desc {
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
    margin: 5% 15% 0 11%
  }
  .cards_card_btn {
    margin-top: 30%;
    margin-left: 10%;
    background-color: #FFFFFF;
    color: #000000;
    padding: 14px 20px;
    border-radius: 88px;
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .cards_card_quotes {
    margin-top: 14%;
  }
  .cards_card_quote {
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 34px;
    color: #000000;
    position: absolute;
    top: 15%;
    left: 16%
  }
  .cards_card_named {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .cards_card_name {
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 27px;
    color: #000000;
  }
  .cards_card_img {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .cards_card_centered {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 18%;
  }
  .cards_card_centered_title {
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: 750;
    font-size: 43px;
    line-height: 53px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
  }
  .cards_card_centered_desc {
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 34px;
    line-height: 51px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
  }
  .cards_card_centered_btn {
    padding: 14px 21px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000000;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 88px;
    color: #FFFFFF;
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;   
  }
  .cards_card_coach {
    background-image: url('../assets/Mask3Group.png');
    max-width: 400px !important;
    width: 100%!important;
    height: 257px!important;
    margin-top: 7% !important;
  }
  .cards_card_title_coach {
    font-family: Avenir Next Cyr, sans-serif;
    margin-top: 18%;
    margin-left: 5%;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 78px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.3;
  }
  .cards_card_surhcoach {
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    position: absolute;
    top: 43%;
    left: 25%
  }
  .cards_card_title_p{
    position: absolute;
    top: 47%;
    left: 20%;
    text-transform: uppercase;
    font-size: 14px
  }
  .cards_card_image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .cards_card_custom {
    max-width: 850px !important;
    width: 100% !important;
    height: 400px;
  }
  .cards_card_custom_boards {
    font-family: Avenir Next Cyr, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
    margin-top: 5%;
    margin-left: 3%
  }
  button:hover {
    opacity: 0.8
  }

</style>