<template>
    <HeaderComponent />
    <LoginFormComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import LoginFormComponent from "@/components/LoginFormComponent.vue";

export default {
    data() {
        return {
        }
    },
    components: {
    HeaderComponent,
    LoginFormComponent
}
}
</script>

<style lang="scss">
#app {
    height: 100%;
    display: flex;
    flex-direction: column;
}
body {
    height: 100vh;
}
</style>