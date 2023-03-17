<template>
  <nav>
    <div class="container nav">
      <ul class="nav__logo">
        <a @click.prevent="scrollToSection('header')">
          <span>{ SL }</span>
          <span>Sarunas Lekstutis</span>
        </a>
      </ul>
      <ul class="nav__links">
        <li>
          <a @click.prevent="scrollToSection('about')" class="hover-text-effect" data-after="about">
            <span>about</span>
          </a>
        </li>
        <li>
          <a @click.prevent="scrollToSection('work')" class="hover-text-effect" data-after="work">
            <span>work</span>
          </a>
        </li>
        <li>
          <a @click.prevent="scrollToSection('contact')" class="hover-text-effect" data-after="contact">
            <span>contact</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import scrollTo from 'vue-scrollto';

export default {
  setup() {
    const scrollToSection = (id: string) => {
      scrollTo(`#${id}`, 500, { easing: 'linear' });
    }
   
    return {
      scrollToSection,
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.nav {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2001;

  &__logo a{
    color: $color-yellow-700;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;

    span:last-child {
      padding-left: .75rem;
      display: inline-block;
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      cursor: pointer;
      span:last-child {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  &__links {
    display: flex;
    align-items: center;

    li+li {
      margin-left: 36px;
    }

    li {
      a {
        font-weight: 600;
        position: relative;
        transition: all 0.2s ease-in-out;

        &:before {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: $color-pink-800;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.2s ease-in-out;
        }

        &:hover {
          cursor: pointer;
          color: $color-pink-800;

          &:before {
            transform: scaleX(1);
          }
        }
      }
    }
  }
}
</style>