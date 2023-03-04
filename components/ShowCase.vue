<template lang="">
    <div>
        <section class="section section-about">
        <div class="container" ref="container">
            <h5 class="section__title" ref="sectionTitle">showcase</h5>
            <div class="section__body">
           
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
                image: 'https://example.com/image1.jpg',
                url: 'https://example.com/project1'
            },
            {
                id: 2,
                title: 'Project 2',
                description: 'This is the description of project 2',
                image: 'https://example.com/image2.jpg',
                url: 'https://example.com/project2'
            },
            {
                id: 3,
                title: 'Project 3',
                description: 'This is the description of project 3',
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