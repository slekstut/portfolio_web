<template>
    <div>
        <section class="section section-contact">
            <div class="container" ref="container" id="contact">
                <h5 class="section__title">contact</h5>
                <div class="section__body">
                    <div class="contact">
                        <a href="mailto: sarunas.lekstutis@gmail.com" class="contact__title">sarunas.lekstutis@gmail.com</a>
                        <p class="contact__status">currently freelancing as front end developer</p>
                        <div class="contact__icon">
                            <svg ref="contactIcon" width="149" height="10" viewBox="0 0 149 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M88.08 0H0V9.25922H88.08V0Z" fill="#666666" />
                                <path d="M109.032 0H99.7729V9.25922H109.032V0Z" fill="#666666" />
                                <path d="M128.966 0H119.707V9.25922H128.966V0Z" fill="#666666" />
                                <path d="M148.901 0H139.642V9.25922H148.901V0Z" fill="#666666" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-contact__bg">
                <img src="@/assets/img/contact_bg.png" alt="contact_bg.png">
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export default {
    setup() {
        const contactIcon = ref<HTMLElement | null>(null)

        const animateDots = () => {
            gsap.timeline({ repeat: -1 })
                .to(contactIcon.value.childNodes[3], { opacity: 0, duration: 0.2 })
                .to(contactIcon.value.childNodes[2], { opacity: 0, duration: 0.2 })
                .to(contactIcon.value.childNodes[1], { opacity: 0, duration: 0.2 })
                .to(contactIcon.value.childNodes[3], { opacity: 1, duration: 0.2 })
                .to(contactIcon.value.childNodes[2], { opacity: 1, duration: 0.2 })
                .to(contactIcon.value.childNodes[1], { opacity: 1, duration: 0.2 })
        }
        onMounted(() => {
            animateDots()
        })
        return {
            contactIcon,
            animateDots,
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.section-contact {
    position: relative;
    margin-top: 212px;

    .section__body {
        display: flex;
        justify-content: flex-start;
    }

    .contact {
        position: relative;
        margin-top: 64px;

        &__title {
            font-weight: 600;
            font-size: 3rem;
            line-height: 3.5rem;
        }

        &__status {
            margin-top: 12px;
            font-weight: 400;
            font-size: 1.75rem;
            line-height: 2rem;
        }

        &__icon {
            position: absolute;
            bottom: -28px;
            right: 0;
        }
    }

    &__bg {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
}

@media (max-width: $sm) {
    .section-contact {
        margin-top: 124px;

        .section__title {
            margin: 0;
        }

        .contact {
            &__title {
                font-size: 1.3rem;
                line-height: 121%;
                margin: 0;
                display: flex;
                flex-wrap: wrap;
            }
            &__status {
                font-size: 1rem;
                line-height: 121%;
            }
        }

        .section-contact__bg {
            display: none;
        }
    }


}
</style>