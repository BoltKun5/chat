<template>
  <div class="MessagesComponent">
    <div class="title">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.37996 16.3423L7.97947 16.6632C8.90779 17.1594 9.94448 17.4183 10.9971 17.4167H10.9999C12.269 17.4167 13.5096 17.0403 14.5648 16.3353C15.62 15.6302 16.4424 14.628 16.9281 13.4556C17.4138 12.2831 17.5408 10.9929 17.2933 9.74817C17.0457 8.50346 16.4345 7.36012 15.5372 6.46273C14.6398 5.56535 13.4964 4.95422 12.2517 4.70663C11.007 4.45904 9.71682 4.58611 8.54433 5.07177C7.37184 5.55744 6.36969 6.37988 5.66462 7.43509C4.95955 8.49031 4.58322 9.7309 4.58322 11V11.0028C4.58159 12.0554 4.84045 13.0921 5.33672 14.0204L5.65755 14.6199L5.16438 16.8355L7.37996 16.3423ZM2.74988 19.25L3.71972 14.8848C3.04867 13.6276 2.71471 12.2181 2.75039 10.7935C2.78607 9.36883 3.19016 7.97774 3.9233 6.75572C4.65644 5.53371 5.69361 4.52243 6.93378 3.82043C8.17395 3.11843 9.57481 2.74964 10.9999 2.75C13.1879 2.75 15.2863 3.61919 16.8335 5.16637C18.3807 6.71354 19.2499 8.81196 19.2499 11C19.2502 12.4251 18.8815 13.8259 18.1795 15.0661C17.4775 16.3063 16.4662 17.3434 15.2442 18.0766C14.0221 18.8097 12.6311 19.2138 11.2064 19.2495C9.78181 19.2852 8.37223 18.9512 7.11505 18.2802L2.74988 19.25Z"
          fill="#2D2D68"
        />
      </svg>
      <div>Vos messages</div>
    </div>
    <div class="hr">
      <hr />
    </div>
    <MessageComponent
      v-for="(listItem, index) in list"
      :key="index"
      @click="goToPage(index)"
      :isMe="listItem.isMe"
      :name="listItem.name"
      :lastMessage="listItem.lastMessage"
    />
  </div>
</template>

<script>
import MessageComponent from "@/components/MessageComponent";
export default {
  data() {
    return {
      displayedForm: "login",
      list: [
        {
          name: "Benjamin",
          lastMessage: "qui tu traites de chien",
          isMe: false
          },
        {
          name: "Adem",
          lastMessage: "20 / 20 et toi",
          isMe: true
          }
        ],
    };
  },
  components: {
    MessageComponent,
  },
  methods: {
      goToPage(id) {
        this.$router.push('/discussion/'+id)
      }
    }
};
</script>

<style lang="scss" scoped>
.MessagesComponent {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  & .title {
    width: 80%;
    display: flex;
    font-weight: bold;
    font-size: 22px;
    align-items: center;
    margin-top: 45px;
    margin-bottom: 30px;
  }
  & div:first-child {
    color: $darkblue;
  }
  & .hr {
    width: 80%;
    margin: 0 auto 15px auto;
    height: 1px;
  }
  hr {
    border: $lightgrey 1px solid;
    margin: 0;
  }
}
</style>
