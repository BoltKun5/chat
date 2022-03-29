<template>
  <HeaderComponent />
  <MessagesComponent />
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
    MessagesComponent
  },
};
</script>

<style lang="scss" scoped></style>
