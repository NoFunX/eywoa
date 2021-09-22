<template>
    <v-menu
        tile
    >
        <template v-slot:activator="{ on, attrs }">
            <div 
                class="header_wrapper"
                v-on="on"
                v-bind="attrs"
            >
                <v-icon color="#6CC656" x-small>mdi-checkbox-blank-circle</v-icon>
                <span class="header_wrapper_menu ml-2">Contact Us</span>
            </div>
        </template>
        <v-card 
            tile 
            class="card"  
            color="#282828"
            height="244"
        >
            <div 
                class="card_contact"
            >
                <v-icon color="#FFFFFF" x-small>mdi-checkbox-blank-circle</v-icon>
                <span class="card_contact_text ml-2">Contact Us</span>
            </div>
            <div 
                class="card_content"
            >  
                <div class="card_content_networks">
                    <img 
                        v-for="(network, index) of networks"
                        :key="index"
                        :src="network"
                        class="mr-4"
                        color="white"
                    >
                </div>
                <span class="card_content_text">We answer immediately</span>
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
      networks: [
            require('@/assets/1.png'),
            require('@/assets/2.png'), 
            require('@/assets/3.png'),
        ]
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
        line-height: 15px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #6CC656;
    }

    .v-menu__content--fixed {
        max-width: 285px !important;
        width: 100%;
        height: 244px !important;
    }
    .card {
        position: relative;
    }
    .card_contact {
        position: absolute;
        right: 17%;
        top: 8%;
        cursor: pointer;
    }
    .card_contact_text {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 750;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .card_content {
        position: absolute;
        top: 50%;
        left: 18%;
        transform: translateY(-50%);
        margin: 0 auto;
    }
    .card_content_networks {
        text-align: center;
    }
    .card_content_text {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;  
    }
   
</style>
