<template>
    <div class="InscriptionMedias">
        <p>S'inscrire à l'aide de</p>
        <div class="Medias">
            <a href>
                <img src="@/assets/facebook.svg" />
            </a>
            <a href>
                <img src="@/assets/google.svg" />
            </a>
            <a href>
                <img src="@/assets/twitter.svg" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "OtherSigninComponent"
}
</script>

<style lang="scss" scoped>
.InscriptionMedias {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: auto;
    & p {
        display: flex;
        justify-content: center;
        color: 2D2D68;
    }
    & .Medias {
        display: flex;
        align-content: center;
        justify-content: center;
        margin-bottom: 20px;
        & a {
            height: 27px;
            margin: 0 15px;
        }
    }
}
</style>