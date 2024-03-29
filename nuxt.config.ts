export default {
  head: {
    title: 'Sarunas Lekstutis Web Developer',
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  plugins: [
    { src: "~/plugins/gsap.js", mode: "client" },
    { src: "~/plugins/smooth-scroll.js", mode: "client" },
  ],
  build: {
    loaders: {
      scss: {
        implementation: require('node-sass')
      }
    },
  },
}
