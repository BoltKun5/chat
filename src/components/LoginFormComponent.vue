<template>
  <div class="LoginFormComponent">
    <div class="Title" :class="width > 1200 ? 'responsive-title' : ''">
      {{ displayedForm === "login" ? "Se connecter" : "Inscription" }}
    </div>
    <template v-if="displayedForm === 'login'">
      <InputComponent label="Adresse email" class="LoginFormInput" />
      <InputComponent label="Mot de passe" class="LoginFormInput" />
      <div class="Submit">
        <router-link to="/home"
          ><ButtonComponent color="primary" value="Se connecter"
        /></router-link>
        <p>OU</p>
        <ButtonComponent
          color="secondary"
          @click="displayedForm = 'signin'"
          value="S'inscrire"
        />
      </div>
    </template>
    <template v-else>
      <InputComponent label="Nom" class="LoginFormInput" />
      <InputComponent label="Prénom" class="LoginFormInput" />
      <InputComponent label="Adresse email" class="LoginFormInput" />
      <InputComponent label="Mot de passe" class="LoginFormInput" />
      <div class="Submit">
        <router-link to="/home"
          ><ButtonComponent color="secondary" value="S'inscrire"
        /></router-link>
        <p>OU</p>
        <ButtonComponent
          color="primary"
          @click="displayedForm = 'login'"
          value="Se connecter"
        />
      </div>
    </template>
    <OtherSigninComponent />
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
import InputComponent from "./InputComponent.vue";
import OtherSigninComponent from "./OtherSigninComponent.vue";

export default {
  name: "LoginFormComponent",
  data() {
    return {
      displayedForm: "login",
    };
  },
  computed: {
    width() {
      return window.innerWidth;
    },
  },
  components: { ButtonComponent, InputComponent, OtherSigninComponent },
};
</script>

<style lang="scss" scoped>
.LoginFormComponent {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  & .Title {
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    margin: 30px auto;
    color: #2d2d68;
  }
  & .Submit {
    & > p {
      font-weight: bold;
      margin: 15px auto;
    }
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 15px;
  }
}
.LoginFormInput {
  margin: 15px auto 0 auto;
}
.responsive-title {
  width: 320px;
  justify-content: left !important;
  font-size: 30px !important;
}
</style>
