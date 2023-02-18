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
    background-color: $supplementary-color2;
    color: $secondary-color;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: $secondary-color;
        color: $primary-color;

            svg {
                fill: $primary-color;
                path {
                    fill: $primary-color;
                }
        }
    }

    span {
        display: flex;
        margin-left: .5rem;
    }
}
</style>
  