<template>
  <HeaderComponent :isConnected="true" />
  <div class="main">
    <div v-if="width > 700" class="responsive-left">
      <MessagesComponent />
    </div>
    <div class="right" :class="width > 700 ? 'responsive-right' : ''">
      <DiscussionComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import DiscussionComponent from "../components/DiscussionComponent.vue";
import MessagesComponent from "@/components/MessagesComponent.vue";

export default {
  components: {
    HeaderComponent,
    DiscussionComponent,
    MessagesComponent,
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
  display: flex;
  width: 100%;
  height: 100%;
}
.left {
  width: 100%;
  height: 100%;
}
.right {
  height: 100%;
  width: 100%;
}
.responsive-left {
  width: 30%;
}
.responsive-right {
  width: 70%;
  border-left: 1px solid $darkblue;
}
</style>
