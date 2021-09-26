<template>
    <div class="footer">
        <div class="footer_content">
            <span class="footer_content_span">© 2021 EYOWA MARINE SPORTS L.L.C</span>
            <div 
                class="footer_content_networks"
            >
                <svg
                    @click="$router.push({ path: '/contact'})"     
                    class="footer_content_networks_icon"
                >
                    <use xlink:href="@/assets/sprite.svg#inst_contact"></use>
                </svg>
                <svg
                    @click="$router.push({ path: '/contact'})"    
                    class="footer_content_networks_icon"
                >
                    <use xlink:href="@/assets/sprite.svg#facebook_contact"></use>
                </svg>
                <svg
                    @click="$router.push({ path: '/contact'})"  
                    class="footer_content_networks_icon"
                >
                    <use xlink:href="@/assets/sprite.svg#viber_contact"></use>
                </svg>
                <svg
                    @click="$router.push({ path: '/contact'})"  
                    class="footer_content_networks_icon"
                >
                    <use xlink:href="@/assets/sprite.svg#youtube_contact"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

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
    .footer {
        width: 100%;
        height: 186px;
        background: #F5F5F5;
        margin: 0 auto;
        position: relative;
        max-width:  1400px;
        width: 100%;
    }
    .footer_content_span {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
    }
    .footer_content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .footer_content_networks {
        display: flex;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 5%;
    }
    .footer_content_networks_icon {
        cursor: pointer;
        height: 22px;
        width: 22px;
        margin-right: 16px;
        fill: #000000;
    }
    .footer_content_networks_icon:hover {
        opacity: 0.6
    }
</style>