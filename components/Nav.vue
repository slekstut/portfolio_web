<template>
  <nav>
    <div class="container nav">
      <div class="nav__logo">
        <div>
          <span>{ SL }</span>
          <span>Sarunas Lekstutis</span>
        </div>
      </div>
      <ul class="nav__links">
        <li><nuxt-link>about</nuxt-link></li>
        <li><nuxt-link>work</nuxt-link></li>
        <li><nuxt-link>contact</nuxt-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>

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

  &__logo {
    color: $color-yellow-700;
    font-size: 1rem;
    font-weight: 600;

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