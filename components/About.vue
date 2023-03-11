<template>
    <section class="section section-about">
        <div class="section-about__wrapper container" ref="container">
            <h5 class="section__title" ref="sectionTitle">about</h5>
            <div class="section__body">
                <div class="about" ref="about">
                    <div class="about__from">
                        from lithuania
                    </div>
                    <div class="about__role-title">
                        front end developer
                    </div>
                    <div class="about__role-subtitle">
                        with passion for design & development
                    </div>
                </div>
                <div class="figure-triangle">
                    <svg width="326" height="360" viewBox="0 0 326 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-2.20208e-05 74.0707H325.526L162.763 360L-2.20208e-05 74.0707ZM322.387 75.8963H3.09601L162.744 356.349L322.387 75.8963Z"
                            fill="#F5F5FA" />
                        <path
                            d="M162.763 283.188L82.1615 141.594L1.5599 0L162.763 0L323.966 0L243.365 141.594L162.763 283.188Z"
                            fill="#666666" />
                    </svg>
                </div>
                <div class="skills" ref="skills">
                    <div class="skills__title">
                        skills and technologies
                    </div>
                    <div class="skills__content">
                        VUE, vuetify, NUXT,
                        HTML, CSS, scss,
                        php, JAVASCRIPt, jquery
                        bem, git
                    </div>
                </div>
            </div>
            <div class="skills happy" ref="happy">
                <div class="skills__title">
                    happy in...
                </div>
                <div class="skills__content">
                    mobile first code, design slicing, bem naming convention, problem solving process
                </div>
            </div>
        </div>
        <div class="bg-img">
            <img src="@/assets/img/about_bg.svg" alt="about_bg.svg">
        </div>
    </section>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default {
    setup() {
        const sectionTitle = ref(null);
        const about = ref(null);
        const skills = ref(null);
        const happy = ref(null);

        onMounted(() => {
            const textRefs = [sectionTitle, about, skills, happy]
            textRefs.forEach((text) => {
                gsap.to(text.value, {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: text.value,
                        start: 'top 80%',
                        scrub: true,
                    },
                });
            })
        });

        return {
            sectionTitle,
            about,
            skills,
            happy,
        };
    },
};
</script>


<style lang="scss" scoped>
.section-about {
    margin-top: 412px;
    position: relative;

    &__wrapper {
        position: relative;
        z-index: 1;
    }

    .section__body {
        display: flex;
        justify-content: flex-start;
    }

    .about {
        max-width: 30rem;
        width: 100%;
        opacity: 0;
        transform: translateY(50%);

        &__from,
        &__role-title {
            font-weight: 300;
            font-size: 3.5rem;
            line-height: 3.5rem;
            letter-spacing: 0.01em;
        }

        &__role-title {
            max-width: 20.525rem;
            margin-left: auto;
            margin-top: .25rem;
        }

        &__role-subtitle {
            max-width: 16rem;
            margin-top: .75rem;
            margin-left: auto;
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 1.3rem;
        }
    }

    .skills {
        max-width: 22.5rem;
        margin-top: 13.375rem;
        margin-left: 120px;
        // margin-right: auto;
        opacity: 0;
        transform: translateY(50%);

        &__title {
            max-width: 19.6rem;
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.31rem
        }

        &__content {
            max-width: 19.6rem;
            margin-top: 1.5rem;
            margin-left: auto;
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 1.31rem
        }

        &.happy {
            margin-top: 0;
            margin-left: auto;
            margin-right: unset;
            opacity: 0;
            transform: translateY(50%);
        }
    }

    .figure-triangle {
        position: absolute;
        top: 0;
        left: 75%;
        transform: translateX(-75%);
    }

    .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
}
</style>