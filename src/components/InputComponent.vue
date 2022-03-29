<template>
    <div class="InputComponent">
        <label>{{ label }}</label>
        <input type="text" />
    </div>
</template>

<script>
export default {
    name: "InputComponent",
    props: {
        label: String
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
.InputComponent {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 320px;
    margin: 15px auto 0 auto;
    font-size: 14px;
    color: 2D2D68;
    & input {
        padding: 0 10px;
        outline: none;
        height: 30px;
        border-radius: 2000px;
        border: none;
        box-shadow: 0 0 20px 0  rgba(0,0,0,0.1);
    }
}
</style>