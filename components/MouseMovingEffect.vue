<template>
    <div ref="container" class="container">
      <div ref="backgroundElement1" class="background-element layer-1"></div>
      <div ref="backgroundElement2" class="background-element layer-2"></div>
      <div ref="backgroundElement3" class="background-element layer-3"></div>
    </div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    mounted() {
      this.initMouseMoveEffect();
    },
    methods: {
      initMouseMoveEffect() {
        const container = this.$refs.container;
        const backgroundElement1 = this.$refs.backgroundElement1;
        const backgroundElement2 = this.$refs.backgroundElement2;
        const backgroundElement3 = this.$refs.backgroundElement3;
  
        container.addEventListener('mousemove', (event) => {
          const x = (event.clientX / window.innerWidth) * 100 - 50;
          const y = (event.clientY / window.innerHeight) * 100 - 50;
  
          gsap.to(backgroundElement1, {
            x: x * 0.5,
            y: y * 0.5,
            duration: 0.3,
            ease: 'power2.out',
          });
  
          gsap.to(backgroundElement2, {
            x: x * 0.75,
            y: y * 0.75,
            duration: 0.3,
            ease: 'power2.out',
          });
  
          gsap.to(backgroundElement3, {
            x: x,
            y: y,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .background-element {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background-color: #ffaa00;
    transform: translate(-50%, -50%);
  }
  
  .layer-1 {
    opacity: 0.1;
    z-index: 1;
  }
  
  .layer-2 {
    opacity: 0.3;
    z-index: 2;
  }
  
  .layer-3 {
    opacity: 0.5;
    z-index: 3;
  }
  </style>
  