export default {
  css: [
    '@/assets/scss/main.scss'
  ],
  build: {
    loaders: {
      scss: {
        implementation: require('node-sass')
      }
    },
  },
}
