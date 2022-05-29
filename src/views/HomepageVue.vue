<template>
  <HeaderComponent :isConnected="true" />
  <div class="main">
    <div class="left" :class="width > 700 ? 'responsive' : ''">
      <MessagesComponent />
    </div>
    <div v-if="width > 700" class="right">
      <div class="no-discussion">Sélectionnez une discussion pour afficher les messages</div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MessagesComponent from "@/components/MessagesComponent.vue";

export default {
  data() {
    return {};
  },
  components: {
    HeaderComponent,
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
  width: 70%;
  border-left: 1px solid $darkblue;
}
.responsive {
  width: 30%;
}
.no-discussion {
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: $darkblue;
}
</style>
