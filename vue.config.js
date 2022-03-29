module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/main.sass";`
      },
      scss: {
        prependData: `@import "~@/main.scss";`
      },
    }
  }
}