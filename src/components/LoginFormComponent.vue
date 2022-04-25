<template>
  <div class="LoginFormComponent">
    <div class="Title">
      {{ displayedForm === "login" ? "Se connecter" : "Inscription" }}
    </div>
    <template v-if="displayedForm === 'login'">
      <InputComponent label="Adresse email" class="LoginFormInput"/>
      <InputComponent label="Mot de passe" class="LoginFormInput"/>
      <div class="Submit">
        <router-link to="/home"><ButtonComponent color="primary" value="Se connecter" /></router-link>
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
  components: { ButtonComponent, InputComponent, OtherSigninComponent },
};
</script>

<style lang="scss" scoped>
.LoginFormComponent {
  display: flex;
  flex-direction: column;
  flex: 1;
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
</style>
