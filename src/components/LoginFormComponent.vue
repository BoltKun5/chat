<template>
    <div class="LoginFormComponent">
        <div class="Title">{{ displayedForm === 'login' ? 'Se connecter' : 'Inscription' }}</div>
        <template v-if="displayedForm === 'login'">
            <InputComponent label="Adresse email" />
            <InputComponent label="Mot de passe" />
            <div class="Submit">
                <ButtonComponent color="primary" value="Se connecter" />
                <p>OU</p>
                <ButtonComponent
                    color="secondary"
                    @click="displayedForm = 'signin'"
                    value="S'inscrire"
                />
            </div>
        </template>
        <template v-else>
            <InputComponent label="Nom" />
            <InputComponent label="Prénom" />
            <InputComponent label="Adresse email" />
            <InputComponent label="Mot de passe" />
            <div class="Submit">
                <ButtonComponent color="secondary" value="S'inscrire" />
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
import ButtonComponent from "./ButtonComponent.vue"
import InputComponent from "./InputComponent.vue";
import OtherSigninComponent from "./OtherSigninComponent.vue";

export default {
    name: "LoginFormComponent",
    data() {
        return {
            displayedForm: "login"
        };
    },
    components: { ButtonComponent, InputComponent, OtherSigninComponent }
}
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
        color: 2D2D68;
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
</style>