<template>
    <v-menu
      tile
    >
        <template v-slot:activator="{ on, attrs }">
            <div 
                class="header_wrapper"
                v-on="on"
                v-bind="attrs"
                @click="switcher = !switcher"
            >
                <v-icon color="black" small>mdi-menu</v-icon>
                <span 
                    class="header_wrapper_menu"
                >
                    Menu
                </span>
            </div>
        </template>
        <v-card tile class="card" height="785px" color="#282828">
            <div class="card_menu">
                <v-icon color="white" small>mdi-menu</v-icon>
                <span class="card_menu_text">Menu</span>
            </div>
            <div class="card_section">
                <div 
                    v-for="(item, i) in items"
                    :key="i"
                    class="card_section_column"
                >
                    <h3 class="card_section_column_title">{{ item[0] }}</h3>
                    <ul class="card_section_column_list">
                        <li
                            v-for="(element, index) of item.slice(1)"
                            :key="index"
                            class="mb-4"
                        >
                            <a
                                class="card_section_column_link"
                            >
                                {{ element.title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </v-card>
    </v-menu>
</template>

<script>
  export default {
    data: () => ({
      items: [
          [ 'SPORTS',
            { title: 'Wakeboard' },
            { title: 'Wakesurf' },
            { title: 'Kitesurf' },
            { title: 'Wingfoil' },
            { title: 'Hydrofoil' },
            { title: 'Stand Up Puddle' },
          ],
          [ 'SERVICES',
            { title: 'Board repair' },
            { title: 'Boat cruise' },
            { title: 'Action shots' },
            { title: 'Custom boards' },
          ],
          [ 'INFO',
            { title: 'Yas Marina' },
            { title: 'General rules' },
            { title: 'Disclaimer' },
            { title: 'Kite spots' },
          ],
          [ 'BOOKING',
            { title: 'Book online' },
            { title: 'Mail' },
            { title: 'Office' },
          ]
      ],
      switcher: false
    }),
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
    .header_wrapper_menu {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 750;
        font-size: 12px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
        margin-left: 9px;
    }
    .header_wrapper_menu_on {
        color: white;
        position: relative;
        z-index: 999999999999;
    }

    .v-menu__content--fixed {
        max-width: 500px !important;
        width: 100%;
        height: 785px;
    }

    .card_menu {
        margin-top: 4%;
        margin-left: 8%;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 750;
        font-size: 12px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
        display: flex;
        cursor: pointer;
    }
    .card_menu_text {
        color:#FFFFFF;
        margin-left: 3%;
    }
    .card_section {
        margin-top: 0%;
        margin-left: 8%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card_section_column {
        margin-top: 10%;
        display: inline-block;
        width: 50%
    }
    .card_section_column_title {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        margin-bottom: 15%;
    }

    .card_section_column_list {
        margin-top: 7%;
        padding: 0;
        list-style-type: none;
    }
    .card_section_column_link {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        margin-bottom: 15%
    }
    .card_section_column_link:hover {
        opacity: 0.7
    }
</style>
