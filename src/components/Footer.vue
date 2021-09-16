<template>
    <div class="footer">
        <div class="footer_content">
            <span class="footer_content_span">© 2021 EYOWA MARINE SPORTS L.L.C</span>
            <div 
                class="footer_content_networks"
            >
                <img 
                    v-for="(network, index) of networks"
                    :key="index"
                    :src="network"
                    class="mr-4"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        networks: [
            require('@/assets/Group.svg'),
            require('@/assets/Vector (4).svg'), 
            require('@/assets/Vector (2).svg'),
            require('@/assets/Vector (3).svg')
        ]
    })
}
</script>

<style scoped>
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
</style>