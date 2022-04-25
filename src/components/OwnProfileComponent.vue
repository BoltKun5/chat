<template>
  <div>
    <img :src="require('@/assets/myprofilepicture.png')" />
  </div>
</template>

<script>
export default {
  name: "OwnProfileComponent",
  props: {
    color: String,
    value: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div {
    width: 45px;
    height: 45px;
    padding: 0 38px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
