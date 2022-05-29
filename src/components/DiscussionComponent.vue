<template>
  <div class="profile">
    <div v-if="width <= 700" class="back-button" @click="backToList">
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
    <div class="profile-picture" :class="width <= 700 ? '' : 'responsive-margin'">
      <img :src="require('@/assets/profilepicture.png')" />
    </div>
    <div class="name">Discussion avec {{ getName() }}</div>
  </div>
  <div class="hr">
    <hr />
  </div>
  <div class="messages">
    <SingleMessageComponent
      v-for="message in messages"
      :key="message.id"
      :message="message.attributes.Message"
      :isMe="message.attributes.from.data.id === myId"
    />
  </div>
  <div class="SendMessage">
    <InputComponent
      placeholder="Écrire..."
      class="NewTextInput"
      v-model="newMessageText"
    />
    <div class="SendButton">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 2L11 13"
          stroke="#5C7397"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 2L15 22L11 13L2 9L22 2Z"
          stroke="#5C7397"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import InputComponent from "../components/InputComponent.vue";
import SingleMessageComponent from "../components/SingleMessageComponent.vue";
import api from "@/plugins/axios.js";
export default {
  data() {
    return {
      newMessageText: "",
      // Mon ID devrait être récupéré à la connexion et stocké dans un store par exemple
      myId: 1,
      messages: [],
    };
  },
  components: {
    SingleMessageComponent,
    InputComponent,
  },
  computed: {
    width() {
      return window.innerWidth;
    },
  },
  methods: {
    backToList() {
      this.$router.push("/home");
    },
    getName() {
      let name = "";
      this.messages.forEach((element) => {
        if (element.attributes.from.data.id !== 1) {
          name = element.attributes.from.data.attributes.username;
        }
      });
      return name;
    },
  },
  async mounted() {
    const result = await api.get(
      // On ne peut pas récupérer les messages par conv donc on les récupères tous puisque dans ce cas ils sont uniquement pour 1 conv
      // `messages/${this.$route.params.id}?populate=*`
      `messages?populate=*`
    );
    const messages = result.data.data;
    this.messages.push(...messages);
  },
};
</script>

<style lang="scss" scoped>
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
  height: calc(100% - 60px - 70px - 1px);
  overflow: auto;
}
.SendMessage {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.SendButton {
  width: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 15px;

  & svg {
    height: auto;
    width: 100%;
  }
}
.NewTextInput {
  max-width: none;
}
.responsive-margin {
  margin-left: 20px
}
</style>
