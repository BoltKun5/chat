<template>
  <HeaderComponent v-if="width <= 1200" />
  <div class="main">
    <div class="left" v-if="width > 1200">
      <div class="logo">
        <img src="@/assets/logo.png" />
        <p>SpeakTok</p>
      </div>
    </div>
    <div class="right" :class="width <= 1200 ? '' : 'responsive-right'">
      <LoginFormComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import LoginFormComponent from "@/components/LoginFormComponent.vue";

export default {
  data() {
    return {};
  },
  components: {
    HeaderComponent,
    LoginFormComponent,
  },
  computed: {
    width() {
      return window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
}
.right {
  height: 100%;
  width: 100%;
}
.responsive-right {
  width: 50%;
}
.left {
  width: 50%;
  background: $lightblue;
  height: 100%;
  display: flex;
}
.logo {
  width: 50%;
  margin: auto;
  & img {
    width: 80%;
    margin: auto 0 auto 0;
    align-content: center;
    transform: translateX(15%);
  }
  & p {
    color: white;
    font-size: 4em;
    font-weight: 600;
    text-shadow: 3px 2px 0px #2d2d68;
    text-align: center;
  }
}
</style>
