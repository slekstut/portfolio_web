<template>
    <section class="section section-about">
        <div class="container">
            <h5 class="section__title">about</h5>
            <div class="section__body">
                <div class="about">
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
                <div class="skills">
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
                <div class="skills happy">
                    <div class="skills__title">
                        happy in...
                    </div>
                    <div class="skills__content">
                        mobile first code, design slicing, bem naming convention, problem solving process
                    </div>
                </div>
            </div>
        </div>
        <div class="side__img">
            <img src="@/assets/img/side_img.png" alt="side_img.png">
        </div>
    </section>
</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
.section-about {
    position: relative;

    .about {
        max-width: 30rem;
        width: 100%;

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
        margin-left: auto;
        margin-right: auto;

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
        }
    }

    .side__img {
        position: absolute;
        top: 7.5rem;
        left: -6rem;
    }
}
</style>