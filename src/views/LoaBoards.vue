<template>
    <div class="loa">
        <h1 class="loa_title">LOA BOARDS</h1>
        <div class="loa_centered">
            <span
                @click="$router.push({path: '/'})" 
                class="loa_centered_text"
            >
                HOME
            </span> 
            <img 
                src="@/assets/Vector (1).svg"
                class="ml-3 mr-3 mb-1"
            > 
            <span class="loa_centered_text">brands</span>
            <img 
                src="@/assets/Vector (1).svg"
                class="ml-3 mr-3 mb-1"
            >
            <span class="loa_centered_text">LOA BOARDS</span> 
        </div>
        <p class="loa_text">Made for riders by riders</p>
        <div class="loa_content">
            <div class="loa_content_section">
                <p class="loa_content_section_paragraph">
                    A group of friends who rides for over 30 years and decided to make there own boards at first. 
                    Today we make approx 40 Boards a year each one is unique. <br><br>

                    We Vacuum, infusion all our boards to gain weight and add strength. <br><br>

                    You Damage your board no problem we can <a style="text-decoration: underline">fix it</a> for you.
                </p>
                <div class="loa_content_section_models">
                    <img
                        v-for="(model, index) of models"
                        :key="index" 
                        :src="model"
                        class="loa_content_section_models_model"
                    >
                </div>
                <img 
                    class="loa_content_section_loaboards"
                    src="@/assets/Loaboards.svg"
                >
            </div>
            <div class="loa_content_aside">
                <div
                    v-for="(link, index) of links"
                    :key="index"
                    style="margin-bottom: 20%"
                >
                    <span class="loa_content_aside_title">{{ link.name}}</span>
                    <ul 
                        style="margin-top: 4%; padding-left: 0; list-style-type: none"
                    >
                        <li
                            v-for="(item, index) of link.content"
                            :key="index"
                        >
                            <a
                                class="loa_content_aside_links"
                            >
                                {{ item }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     </div>
</template>

<script>
export default {
    data: () => ({
        models: [
            require('@/assets/Model1.svg'),
            require('@/assets/Model2.svg'),
            require('@/assets/Model3.svg'),
            require('@/assets/Model4.svg'),
            require('@/assets/Model5.svg'),
            require('@/assets/Model6.svg'),
        ],
        links: [
            {
                name: 'PROCESS',
                content: [
                    'Hand lamination', 
                    'Vacuum bagging',
                    'Infusion',
                ]
            },
            {
                name: 'CORE',
                content: [
                    'Airex', 
                    'Wood',
                    'Eps',
                ]
            },
            {
                name: 'MATERIAL',
                content: [
                    'Fiber', 
                    'E Glass',
                    'S Glass',
                    'Carbon', 
                    'Aramid',
                    'Nylextra',
                    'Basalt'
                ]
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
    .loa {
        margin-bottom: 153px;
    }
    .loa_title {
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
    .loa_centered {
        text-align: center;
    }
    .loa_centered_text {
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
    .loa_text {
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
    .loa_content {
        display: flex;
        justify-content: space-between;
        max-width: 1000px;
        width: 100%;
        margin: 3% auto;
    }
    .loa_content_section {
        max-width: 767px;
        width: 100%;
    }
    .loa_content_section_paragraph {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 30px;
        color: #000000;
    }
    .loa_content_section_models {
        margin-top: 5%;
        display: flex;
        align-items: flex-start;
    }
    .loa_content_section_models_model {
        margin-right: 3%;
    }
    .loa_content_section_loaboards {
        margin-top: 5%;
    }
    .loa_content_aside_title {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
        opacity: 0.5;

    }
    .loa_content_aside_links {
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
        opacity: 0.5;
        margin-bottom: 4%;
    }

    a:hover {
        opacity: 0.8;
    }
    
</style>