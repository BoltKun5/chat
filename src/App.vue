<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
}
a {
  text-decoration: none;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
body {
  height: 100vh;
}
</style>
