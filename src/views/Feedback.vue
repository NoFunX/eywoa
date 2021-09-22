<template>
    <div class="feedback">
        <h1 class="feedback_title">FEEDBACK</h1>
        <div class="feedback_centered">
            <span
                @click="$router.push({path: '/'})" 
                class="feedback_centered_text"
            >
                HOME
            </span> 
            <img 
                src="@/assets/Vector (1).svg"
                class="ml-3 mr-3 mb-1"
            > 
            <span class="feedback_centered_text">FEEDBACK</span>
        </div>
        <div class="feedback_main">
            <div class="feedback_main_section">
                <div
                    v-for="(item, index) of 3"
                    :key="item"
                    class="feedback_main_section_element"
                    :class="{ feedback_main_section_last: index === 2}"
                >
                    <img 
                        class="feedback_main_section_element_commas"
                        src="@/assets/comas.svg"
                    />
                    <span class="feedback_main_section_element_text">Best place to progress <br> your riding skills</span>
                    <div class="feedback_main_section_element_centered">
                        <img src="@/assets/Google.svg">
                        <span class="ml-3 mt-1">Roberto Rey</span>
                    </div>
                </div>
            </div>
            <div class="feedback_main_aside">
                <div
                    v-for="elem of 2"
                    :key="elem"
                    class="feedback_main_section_elem"
                >
                    <img 
                        class="feedback_main_section_element_commas"
                        src="@/assets/comas.svg"
                    />
                    <p class="feedback_main_section_element_p">
                        Я в восторге ! Ребят, вы сделали невероятно! <br>
                        Научили кататься в удовольствие за одну неделю. 
                    </p>    

                    <p class="feedback_main_section_element_desc"> 
                        Огромное спасибо инструктору Фабиану.<br><br>

                        Шикарный спот! Кататься мимо Феррари парка, 
                        красивых отелей, заповедника с птицами — волшебно!<br><br>
                        
                        Благодарю всю команду!
                        Это было незабываемо ❤️ <br><br>

                        Я обязательно вернусь ! 
                    </p>
                    <div class="feedback_main_section_element_case">
                        <img src="@/assets/Vector.svg">
                        <span class="ml-3 mt-1">Stretch Me</span>
                    </div>                   
                </div>
            </div>
        </div>
        <div style="text-align: center">
            <button class="feedback_btn">Load More</button>
        </div>
    </div>
</template>

<script>
export default {

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
    .feedback_main {
        margin-top: 60px;
    }
    .feedback_title {
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
    .feedback_centered {
        text-align: center;
    }
    .feedback_centered_text {
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
    .feedback_main {
        display: flex;
        max-width: 1200px;
        width: 100%;
        margin: 60px auto;
    }
    .feedback_main_section {
        width: 50%
    }
    .feedback_main_aside {
        width: 50%;
        margin-top: 13%;
    }
    .feedback_main_section_element {
        position: relative;
        max-width: 360px;
        width: 100%;
        margin-bottom: 60%;
    }
    .feedback_main_section_last {
        position: relative;
        max-width: 360px;
        width: 100%;
        margin-bottom: 0;

    }
    .feedback_main_section_elem {
        position: relative;
        max-width: 484px;
        width: 100%;
        margin-bottom: 30%;
    }
    .feedback_main_section_element_text {
        position: absolute;
        top: 10%;
        left: 18%;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 34px;
        color: #000000;
    }
    .feedback_main_section_element_centered {
        margin-top: 10%;
        display: flex;
        justify-content: center;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
    }

     .feedback_main_section_element_p {
        position: absolute;
        top: 3%;
        left: 14%;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        margin-bottom: 52px;
    }
    .feedback_main_section_element_desc {
        margin-left: 14%;
        font-family: Avenir Next Cyr, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
    }
    .feedback_main_section_element_case {
        margin-top: 7%;
        margin-left: 14%;
        display: flex;
    }
    .feedback_btn {
        padding: 10px 20px;
        margin-bottom: 60px;
        background: #000000;
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
    }

</style>