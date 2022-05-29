<template>
  <div class="MessageComponent">
    <div class="ProfilePicture">
      <img :src="require('@/assets/profilepicture.png')" />
    </div>
    <div class="Informations">
      <div class="Name">{{ name }}</div>
      <div class="Message" :class="isMe ? 'addMe' : ''">{{ lastMessage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageComponent",
  props: {
    name: String,
    lastMessage: String,
    isMe: Boolean,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.MessageComponent {
  display: flex;
  justify-content: center;
  width: 80%;
  border-bottom: 1px $lightgrey solid;
  padding: 15px 0;
  cursor: pointer;
  
  & .ProfilePicture {
    margin-right: 10px;
    & img {
      width: auto;
      height: 100%;
    }
  }
  & .Informations {
    width: 80%;
    & .Name {
      font-weight: bold;
      font-size: 18px;
      color: $darkblue;
    }
    & .Message {
      color: $lightblue;
      width: 100%;
    }
  }
}

img {
  margin-right: 10px;
}

.addMe::before {
  content: "Moi : ";
  font-weight: bold;
}
</style>
