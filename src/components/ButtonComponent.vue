<template>
    <div>
        <div class="ButtonComponent" :class="color">{{ value }}</div>
    </div>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        color: String,
        value: String
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
.ButtonComponent {
    border-radius: 2000px;
    max-width:320px;
    width: 80%;
    height: 35px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10px auto;
}

.primary {
    background-color: #2D2D68;
}
.secondary {
    background-color: #5C7397;
}
</style>