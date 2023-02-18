<template>
    <div class="header">
        <div class="container">
            <h1 class="header__title">Empowering your vision with code</h1>
            <p class="header__subtitle">Building engaging and responsive user experiences as a front-end developer.</p>
            <CTABtn text="see work"/>
        </div>
        <div class="bg-img">
            <img src="@/assets/img/bg-img.svg" alt="bg-img.svg">
        </div>
    </div>
</template>

<script>
export default {
    setup() {
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.header {
    margin-top: 8.81rem;

    &__title {
        width: 100%;
        max-width: 62rem;
        font-size: 6rem;
        line-height: 6rem;
        font-weight: 700;
    }

    &__subtitle {
        width: 100%;
        max-width: 33rem;
        margin-top: .75rem;
        font-size: 1.75rem;
        line-height: 2.06rem;
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
            height: 14px;
        }
    }
}</style>