<template>
    <button class="btn">
        {{ text }}
        <template v-if="icon">
            <span v-html="icon"></span>
        </template>
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
    padding: 0.68rem 1.75rem;
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
        display: flex;
        margin-left: .5rem;
    }
}
</style>
  