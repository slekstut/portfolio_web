<template>
    <section class="header" id="header">
        <div class="header__wrapper container" ref="headerText">
            <h1 class="header__title">Empowering your vision with code</h1>
            <p class="header__subtitle">Building engaging and responsive user experiences as a front-end developer</p>
            <CTABtn text="see work" @click="scrollToWork"/>
        </div>
        <div class="bg-img">
            <img src="@/assets/img/main_background.svg" alt="main_background.svg">
        </div>
    </section>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { scrollTo } from 'vue-scrollto'

export default {
    setup() {
        const headerText = ref(null);

        onMounted(() => {
            gsap.from(headerText.value, {
                duration: 2,
                opacity: 0,
                x: -100,
                ease: 'power2.out',
            });
        });

        const scrollToWork = () => {
            scrollTo('#work', 500, { easing: 'linear' });
        }

        return {
            headerText,
            scrollToWork
        };
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.header {
    position: relative;
    margin-top: 24px;

    &__wrapper {
        position: relative;
        z-index: 1;
    }

    &__title {
        padding-top: 6.81rem;
        width: 100%;
        max-width: 62rem;
        font-size: 6rem;
        line-height: 6rem;
        font-weight: 700;
        opacity: 1;
        z-index: 1;

    }

    &__subtitle {
        position: inherit;
        width: 100%;
        max-width: 33rem;
        margin-top: .75rem;
        font-size: 1.75rem;
        line-height: 2.06rem;
        text-transform: capitalize;
        z-index: 1;

    }

    .btn {
        margin-top: 1.5rem;
        font-size: 1rem;
        font-weight: 700;
        z-index: 1;


        &:hover {
            svg {
                fill: $color-black-500;

                path {
                    fill: $color-black-500;
                }
            }
        }

        span {
            height: .875rem;
        }
    }

    .bg-img {
        // max-width: 51.25rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        // margin-top: -10.25rem;
        // margin-left: auto;

        img {
            height: auto;
        }
    }
}
</style>