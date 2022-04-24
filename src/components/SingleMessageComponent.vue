<template>
  <div class="messageWrapper">
    <div class="message" :class="message.isMe ? 'myMessage' : ''">
      {{ message.contenu }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleMessageComponent",
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.messageWrapper {
  display: flex;
  padding: 5px;

  & .message {
    height: 35px;
    max-width: 280px;
    border-radius: 1000px;
    background: #F9F9F9;
    align-items: center;
    display: flex;
    padding: 0 10px;
    margin: 5px auto 5px 20px;
    font-size: 14px;
  }

  & .myMessage {
      background: #5C7397;
      margin: 5px 20px 5px auto;
      color: white;
  }
}
</style>