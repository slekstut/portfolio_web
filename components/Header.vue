<template>
    <section class="header">
        <div class="container" ref="headerText">
            <h1 class="header__title">Empowering your vision with code</h1>
            <p class="header__subtitle">Building engaging and responsive user experiences as a front-end developer</p>
            <CTABtn text="see work" />
        </div>
        <div class="bg-img">
            <img src="@/assets/img/header_img.png" alt="header_img.png">
        </div>
    </section>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
export default {
    setup() {
        const headerText = ref('headerText');

        onMounted(() => {
            gsap.from(headerText.value, {
                duration: 1,
                opacity: 0,
                y: 100,
                ease: 'power2.out',
            });
        });

    return {
        headerText,
    };
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.header {
    position: relative;
    margin-top: 8.81rem;

    &__title {
        width: 100%;
        max-width: 62rem;
        font-size: 6rem;
        line-height: 6rem;
        font-weight: 400;
        opacity: 1;
    }

    &__subtitle {
        width: 100%;
        max-width: 33rem;
        margin-top: .75rem;
        font-size: 1.75rem;
        line-height: 2.06rem;
        text-transform: capitalize;
    }

    .btn {
        margin-top: 1.5rem;
        font-size: 1rem;
        font-weight: 700;

        &:hover {
            svg {
                fill: $primary-color;

                path {
                    fill: $primary-color;
                }
            }
        }

        span {
            height: .875rem;
        }
    }

    .bg-img {
        max-width: 51.25rem;
        position: relative;
        margin-top: -10.25rem;
        margin-left: auto;

        img {
            height: auto;
        }
    }
}
</style>