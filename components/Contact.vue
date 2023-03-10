<template>
    <div>
        <section class="section section-contact">
            <div class="container" ref="container">
                <h5 class="section__title">contact</h5>
                <div class="section__body">
                    <div class="contact">
                        <a href="#" class="contact__title">sarunas.lekstutis@gmail.com</a>
                        <p class="contact__status">currently freelancing as front end developer</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
.section-contact {
    margin-top: 212px;

    .section__body {
        display: flex;
        justify-content: flex-start;
    }

    .contact {
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
    }
}
</style>