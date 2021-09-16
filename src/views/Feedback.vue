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

                >
                    <!-- <img 
                        class="feedback_main_section_commas"
                        src="@/assets/comas.svg"
                    />
                    <span>Best place to progress your riding skills</span> -->
                </div>
            </div>
            <div class="feedback_main_aside">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        elements: [
            {
                name: 'Best place to progress your riding skills',
                img: require(''),
                text: 'Roberto Ray'
            },
            {
                name: 'Best place to progress your riding skills',
                img: require(''),
                text: 'Roberto Ray'
            }
        ]
    })
}
</script>

<style scoped>
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

</style>