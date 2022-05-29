<template>
    <div class="InscriptionMedias">
        <p>S'inscrire à l'aide de</p>
        <div class="Medias">
            <div>
                <img src="@/assets/facebook.svg" />
            </div>
            <div>
                <img src="@/assets/google.svg" />
            </div>
            <div>
                <img src="@/assets/twitter.svg" />
            </div>
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
        & div {
            height: 27px;
            margin: 0 15px;
        }
    }
}
</style>