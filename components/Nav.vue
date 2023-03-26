<template>
  <nav>
    <div class="container nav" :class="{ 'active': isOpen }">
      <ul class="nav__logo">
        <a href="#header">
          <span>{ SL }</span>
          <span>Sarunas Lekstutis</span>
        </a>
      </ul>
      <div class="nav-links">
        <ul class="nav-list">
          <li class="nav-list__item">
            <a href="#about" class="hover-text-effect" data-after="about" @click="toggleMenu">
              <span>about</span>
            </a>
          </li>
          <li class="nav-list__item">
            <a href="#work" class="hover-text-effect" data-after="work" @click="toggleMenu">
              <span>work</span>
            </a>
          </li>
          <li class="nav-list__item">
            <a href="#contact" class="hover-text-effect" data-after="contact" @click="toggleMenu">
              <span>contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="mobile-menu" :class="{ 'active': isOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu-overlay"></div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
      console.log(isOpen.value)

    };

    return { isOpen, toggleMenu };
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

  &__logo a {
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

  .mobile-menu {
    display: none;
  }
}

@media (max-width: $sm) {
  .nav {
    position: relative;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;

    &-links {
      display: none;
      width: 200px;
      height: 100vh;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      opacity: 0;
      background-color: $color-white-700;
      transition: all .3s ease-in-out;
    }

    .menu-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    .mobile-menu {
      display: flex;
      position: relative;
      width: 32px;
      height: 24px;
      cursor: pointer;
      z-index: 1000;

      span {
        display: block;
        position: absolute;
        height: 4px;
        width: 100%;
        background: $color-white-500;
        border-radius: 2px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: all 0.3s ease-in-out;

        &:nth-child(1) {
          top: 0;
        }

        &:nth-child(2) {
          top: 10px;
        }

        &:nth-child(3) {
          top: 20px;
        }

        &:nth-child(2) {
          transform-origin: left center;
        }

        &:nth-child(3) {
          transform-origin: right center;
        }
      }

      &.active span {
        opacity: 1;
      }

      &.active span:nth-child(1) {
        top: 11px;
        transform: rotate(45deg);
      }

      &.active span:nth-child(2) {
        opacity: 0;
      }

      &.active span:nth-child(3) {
        top: 0;
        left: -5px;
        transform: rotate(-45deg);
      }
    }

    &.active {
      position: relative;

      .nav-links {
        display: block;
        opacity: 1;
      }

      .nav-list {
        padding: 96px 16px 0 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 28px;

        &__item {
          a {
            color: $color-black-500;
          }
        }
      }

      .menu-overlay {
        opacity: 1;
      }

      .mobile-menu {
        span {
          background-color: $color-black-500;
        }
      }
    }
  }
}
</style>