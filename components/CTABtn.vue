<template>
    <button class="btn hover-text-effect" :data-after="text">
        <span>{{ text }}</span>
    </button>
</template>
  
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: null
        }
    },
    setup(props) {
        const icon = ref(props.icon)

        return {
            icon
        }
    }
}
</script>   
  
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-yellow-700;
    color: $color-white-700;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: $color-white-700;
        color: $color-black-500;

        svg {
            fill: $color-black-500;

            path {
                fill: $color-black-500;
            }
        }
    }

    span {
        text-align: center;
    }
}

button {
    font-size: 1rem;

    &::after,
    span {
        padding: .5em 1.2em;
        min-width: 80px;
    }
}
</style>
  