<template>
  <header>
    <a href>
      <img src="@/assets/logo.png" />
      <p>SpeakTok</p>
    </a>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style lang="scss" scoped>
header {
  background: #5C7397;
  height: 95px;
  width: 100%;
  display: flex;
  & a {
    display: flex;
    text-decoration: none;
    margin: auto;
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
      text-shadow: 3px 2px 0px #2D2D68;
    }
  }
}
</style>