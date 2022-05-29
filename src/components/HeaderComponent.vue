<template>
  <header>
    <router-link :to="isConnected ? '/home' : ''">
      <img src="@/assets/logo.png" />
      <p>SpeakTok</p>
    </router-link>
    <OwnProfileComponent v-if="isConnected"/>
  </header>
</template>

<script>
import OwnProfileComponent from "../components/OwnProfileComponent.vue"

export default {
  name: "HeaderComponent",
  components: {
    OwnProfileComponent,
  },
  props: {
    isConnected: {
      default: false,
      type: Boolean
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #5c7397;
  height: 95px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    display: flex;
    text-decoration: none;
    margin: auto auto auto 30px;
    & img {
      height: 57px;
      margin: auto 0 auto 0;
      align-content: center;
    }
    & p {
      color: white;
      margin-left: 5px;
      font-size: 29px;
      font-weight: 600;
      text-shadow: 3px 2px 0px #2d2d68;
    }
  }
}
</style>
