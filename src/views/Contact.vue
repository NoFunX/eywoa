<template>
    <div class="contact">
        <h1 class="contact_title">CONTACT</h1>
        <div class="contact_centered">
            <span 
                @click="$router.push({path: '/'})" 
                class="contact_centered_text"
            >
                HOME
            </span> 
            <img 
                src="@/assets/divider.png"
                class="ml-3 mr-3 mb-1"
            > 
            <span class="contact_centered_text">CONTACT</span>
        </div>
        <p class="contact_text">For any info, inquiry, bookings please contact</p>
        <div class="contact_main">
            <div class="contact_main_centered">
                <img src="@/assets/dude.png">
                <p class="contact_main_centered_text">Yas Island, Abu Dhabi</p>
            </div>
        </div>
        <!-- <div class="contact_main">
            <iframe id="map" src="https://snazzymaps.com/embed/340110" width="1400px" height="600px" style="border:none;"></iframe>
        </div> -->
        <div class="contact_content">
            <div class="contact_section">
                <div 
                    v-for="(element, index) of info.filter(e => e.name !== 'Contact Us')"
                    :key="index"
                    class="contact_element"
                >
                    <h4 class="contact_element_title"> {{ element.name }}</h4>
                    <div
                        v-if="element.images" 
                    >
                        <img 
                            v-for="(item, index) of element.images"
                            :key="index"
                            :src="item"
                            class="mr-2"
                        >
                    </div>
                    <span
                        v-if="element.phone" 
                        class="contact_element_phone"
                    >
                        {{ element.phone }}
                    </span>
                    <span
                        v-if="element.desc" 
                        class="contact_element_desc"
                    >
                        {{ element.desc }} 
                    </span>
                    <span
                        v-if="element.phone2"
                        class="contact_element_phone"
                    >
                        {{ element.phone2 }}
                    </span>
                    <span
                        v-if="element.desc2" 
                        class="contact_element_desc_case"
                    >
                        {{ element.desc2 }} 
                    </span>
                </div>
            </div>
            <div class="contact_section">
                <div
                    v-for="(element, index) of info.filter(e => e.name === 'Contact Us')"
                    :key="index" 
                >
                    <h4 class="contact_element_title"> {{ element.name }}</h4>
                    <span 
                        class="contact_element_phone"
                    >
                        {{ element.text }}
                    </span>
                    <input 
                        class="contact_mail" 
                        placeholder="MAIL"
                    >
                    <input 
                        class="contact_message" 
                        placeholder="YOUR MESSAGE"
                    >
                    <button class="contact_button">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        info: [
            {
                name: 'Online',
                images: [
                    require('@/assets/Vector.png'),
                    require('@/assets/Vector(2).png'),
                    require('@/assets/Vector(3).png'),
                    require('@/assets/Vector(4).png'),
                ]
            },
            {
                name: 'Phone',
                phone: '+7971501210264',
                desc: 'Kitesurf, Wing Foil, Hydrofoil, Shop and Events',
                phone2: '+7971554136273',
                desc2: 'Wakeboard, Wakesurf, SUP, Boat Cruise'
            },
            {
                name: 'Mail',
                phone: 'info@eywoa.com'
            },
            {
                name: 'Contact Us',
                text: 'We answer immediately',
                mail: 'Mail',
                message: 'Your message'
            }
        ],
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
    .contact {
       max-width: 1400px;
       width: 100%;
       margin: 0 auto; 
    }
    .contact_title {
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
    .contact_centered {
        text-align: center;
    }
    .contact_text {
        margin-top: 39px;
        text-align: center;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 37px;
        text-align: center;
        color: #000000;
    }
    .contact_main {
        background-image: url(../assets/image4.png);
        background-size: cover;
        margin-top: 3%;
        width: 100%;
        height: 602px;
        position: relative;
    }
    .contact_main_centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .contact_main_centered {
        display: block;
        font-family: Avenir Next Cyr;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 37px;
        text-align: center;
        color: #FFFFFF;
    }
    .contact_centered_text {
        cursor: pointer;
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
    }
    .contact_content {
        display: flex;
        margin-top: 5%;
        margin-left: 7%;
        margin-bottom: 5%;
    }
    .contact_element_title {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
        opacity: 0.5;
        margin-bottom: 20px;
    }
    .contact_section {
        display: flex;
        flex-direction: column;
        margin-right: 12%;
    }
    .contact_element {
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
    }

    .contact_element_phone {
        width: 248px;
        height: 29px;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 750;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        margin-bottom: 10px;
    }
    .contact_element_desc {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        margin-bottom: 35px;
    }
    .contact_element_desc_case {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        margin-bottom: 0px !important;
    }
    .contact_mail {
        outline: 0;
        padding: 0 0 10px 0;
        margin-top: 60px;
        max-width: 486px;
        width: 100%;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 750;
        font-size: 24px;
        line-height: 37px;
        color: #000000;
        border-bottom: 2px solid #000000;
        
    }

    .contact_mail::placeholder {
        color: #000000 !important;
    }
    
    .contact_message {
        outline: 0;
        padding: 0 0 10px 0;
        max-width: 486px;
        margin-top: 60px;
        width: 100%;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 750;
        font-size: 24px;
        line-height: 37px;
        color: #000000;
        border-bottom: 2px solid #000000
    }
    .contact_message::placeholder {
        color: #000000 !important;
    }
    .contact_button {
        padding: 10px 20px;
        display: block;
        background: #000000;
        max-width: 76px;
        width: 100%;
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
        color: #FFFFFF;
        margin-top: 8%
    }
    button:hover {
        opacity: 0.8
    }
    
</style>
