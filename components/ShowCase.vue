<template lang="">
    <div>
        <section class="section section-about">
        <div class="" ref="container">
            <h5 class="section__title container" ref="sectionTitle">showcase</h5>
            <div class="section__body">
                <div class="showcase" v-for="(showCase, index) in showCases" :key="index">
                    <div class="showcase__wrapper">
                        <img class="showcase__image" :src="showCase.image" alt="Project Image">
                        <div class="showcase__header">
                            <h1 class="showcase__title">{{ showCase.title }}</h1>
                            <h2 class="showcase__subtitle">{{ showCase.subtitle }}</h2>
                            <p class="showcase__tech">{{ showCase.tech }}</p>
                        </div>
                        <div class="showcase__link">
                            <a class="showcase__link--url" :href="showCase.url">
                                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.6 24H12C8.68 24 5.85 22.83 3.51 20.49C1.17 18.15 0 15.32 0 12C0 8.68 1.17 5.85 3.51 3.51C5.85 1.17 8.68 0 12 0H21.6V4.8H12C10 4.8 8.3 5.5 6.9 6.9C5.5 8.3 4.8 10 4.8 12C4.8 14 5.5 15.7 6.9 17.1C8.3 18.5 10 19.2 12 19.2H21.6V24ZM14.4 14.4V9.6H33.6V14.4H14.4ZM26.4 24V19.2H36C38 19.2 39.7 18.5 41.1 17.1C42.5 15.7 43.2 14 43.2 12C43.2 10 42.5 8.3 41.1 6.9C39.7 5.5 38 4.8 36 4.8H26.4V0H36C39.32 0 42.15 1.17 44.49 3.51C46.83 5.85 48 8.68 48 12C48 15.32 46.83 18.15 44.49 20.49C42.15 22.83 39.32 24 36 24H26.4Z" fill="#F5F5FA"/>
                                </svg>
                            </a>
                            <a class="showcase__link--url" href="#">
                            <svg fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12 0c-6.6289 0-12 5.4892-12 12.264 0 5.4173 3.4375 10.016 8.207 11.637 0.60156 0.1118 0.82031-0.2635 0.82031-0.5909 0-0.2914-0.01172-1.0619-0.01562-2.0839-3.3398 0.7386-4.043-1.6447-4.043-1.6447-0.54687-1.4172-1.332-1.7965-1.332-1.7965-1.0898-0.7585 0.08203-0.7425 0.08203-0.7425 1.2031 0.0878 1.8359 1.2615 1.8359 1.2615 1.0703 1.8763 2.8086 1.3334 3.4922 1.022 0.10937-0.7945 0.42187-1.3334 0.76171-1.6408-2.6641-0.3074-5.4648-1.3613-5.4648-6.0601 0-1.3413 0.46875-2.4352 1.2344-3.2935-0.12109-0.3074-0.53515-1.5569 0.11719-3.2456 0 0 1.0078-0.32735 3.3008 1.2575 0.95703-0.27147 1.9844-0.4072 3.0039-0.41119 1.0195 0.00399 2.0469 0.13972 3.0039 0.41119 2.293-1.5849 3.2969-1.2575 3.2969-1.2575 0.6562 1.6887 0.2461 2.9382 0.1211 3.2456 0.7695 0.85831 1.2304 1.9522 1.2304 3.2935 0 4.7108-2.8046 5.7447-5.4765 6.0521 0.4297 0.3753 0.8125 1.1258 0.8125 2.2676 0 1.6407-0.0117 2.9621-0.0117 3.3653 0 0.3274 0.2148 0.7106 0.8242 0.5909 4.7656-1.6248 8.1992-6.2198 8.1992-11.637 0-6.7747-5.3711-12.264-12-12.264z" clip-rule="evenodd" fill="#F5F5FA" fill-rule="evenodd"/>
                            </svg>
                            </a>
                        </div>
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
                subtitle: 'Design and Development',
                tech: 'vue js, nuxt, scss, typescript',
                image: 'https://i.ibb.co/K0n45MP/Rectangle-11-2.png',
                url: 'https://example.com/project1'
            },
            {
                id: 2,
                title: 'url shortening api',
                subtitle: 'design and development',
                tech: 'vue js, nuxt, scss',
                image: 'https://i.ibb.co/1R7b3Yb/Rectangle-12-3.png" alt="Rectangle-12-3',
                url: 'https://example.com/project2'
            },
            {
                id: 3,
                title: 'IP address tracker',
                subtitle: 'design and development',
                tech: 'vue js, nuxt, scss ',
                image: 'https://i.ibb.co/B2F5rh0/Rectangle-12-2.png',
                url: 'https://example.com/project3'
            },
            {
                id: 4,
                title: 'crud app',
                subtitle: 'design and development',
                tech: 'vue js, nuxt, scss ',
                image: 'https://i.ibb.co/QDzdd2C/Rectangle-11-3.png',
                url: 'https://example.com/project3'
            }
        ]);


        return {
            showCases
        }
    }

}
</script>

<style lang="scss">
.section-about {
    margin-top: 212px;
}
.section__body {
    margin-top: 64px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.showcase {
    display: flex;
    flex: 1 50%;
    &__wrapper {
        width: 100%;
        position: relative;
    }

    &__image {
        width: 100%;
    }

    &__header {
        position: absolute;
        bottom: 30px;
        left: 60px;
    }

    &__link {
        position: absolute;
        bottom: 30px;
        right: 60px;
        display: flex;
        gap: 16px;
    }

    &__title {
        max-width: 580px;
        font-size: 4rem;
        line-height: 4rem;
        font-weight: 700;
    }

    &__subtitle {
        margin-top: 4px;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.75;
    }

    &__tech {
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.15;
    }
}
</style>