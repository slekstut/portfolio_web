<template lang="">
    <div>
        <section class="section section-about">
        <div class="container" ref="container">
            <h5 class="section__title" ref="sectionTitle">showcase</h5>
            <div class="section__body">
                <div v-for="(showCase, index) in showCases" :key="index">
                    <div>
                        <h3>{{showCase.title}}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="side__img">
            <img src="@/assets/img/side_img.png" alt="side_img.png">
        </div>
    </section>
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        const showCases = ref([
            {
                id: 1,
                title: 'Personal Portfolio',
                description: 'Design and Development',
                tech: 'vue js, nuxt, scss, typescript',
                image: '~assets/img/project1.png',
                url: 'https://example.com/project1'
            },
            {
                id: 2,
                title: 'url shortening api',
                description: 'design and development',
                tech: 'vue js, nuxt, scss',
                image: 'https://example.com/image2.jpg',
                url: 'https://example.com/project2'
            },
            {
                id: 3,
                title: 'IP address tracker',
                description: 'design and development',
                tech: 'vue js, nuxt, scss ',
                image: 'https://example.com/image3.jpg',
                url: 'https://example.com/project3'
            },
            {
                id: 4,
                title: 'crud app',
                description: 'design and development',
                tech: 'vue js, nuxt, scss ',
                image: 'https://example.com/image3.jpg',
                url: 'https://example.com/project3'
            }
        ]);


        return {
            showCases
        }
    }

}
</script>