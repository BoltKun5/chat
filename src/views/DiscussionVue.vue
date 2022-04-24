<template>
  <div class="main-discussion">
    <header-component />
    <div class="profile">
      <div class="back-button" @click="backToList">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </div>
      <div class="profile-picture">
        <img :src="require('@/assets/profilepicture.png')" />
      </div>
      <div class="name">Discussion avec {{ this.$route.params.id }}</div>
    </div>
    <div class="hr">
      <hr />
    </div>
    <div class="messages">
      <single-message-component
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </div>
    <div class="send-message">
      <input-component placeholder="Écrire..." v-model="value"/>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import InputComponent from '../components/InputComponent.vue';
import SingleMessageComponent from "../components/SingleMessageComponent.vue";

export default {
  data() {
    return {
      newMessageText: "",
      messages: [
        {
          contenu: "Salut, ça va ?",
          isMe: true,
          id: 1,
        },
        {
          contenu: "Oui, et toi ?",
          isMe: false,
          id: 2,
        },
        {
          contenu: "Comme un lundi",
          isMe: true,
          id: 3,
        },
      ],
    };
  },
  components: {
    HeaderComponent,
    SingleMessageComponent,
    InputComponent,
  },
  methods: {
    backToList() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.main-discussion {
  height: 100%;
}
.profile {
  display: flex;
  align-items: center;
  padding: 10px 0;
  .name {
    color: $darkblue;
    font-size: 22px;
    font-weight: bold;
  }
  .profile-picture {
    display: flex;
    align-items: center;
    margin-right: 10px;
    & img {
      width: auto;
      height: 100%;
    }
  }
  .back-button {
    display: flex;
    align-items: center;
    margin: 0 10px;
  }
}
.hr {
  height: 1px;
  & hr {
    margin: 0px;
  }
}
.messages {
  height: calc(100% - 95px - 60px - 70px - 1px);
  overflow: auto;
}
.send-message {
  height: 70px;
    width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
