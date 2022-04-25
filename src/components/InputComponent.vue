<template>
  <div class="InputComponent">
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      :placeholder="placeholder"
      v-on:input="updateValue($event.target.value)"
      :value="modelValue"
    />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    label: String,
    placeholder: String,
    modelValue: String
  },
  methods: {
    updateValue: function (value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.InputComponent {
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 320px;
  font-size: 14px;
  color: 2d2d68;
  
  & input {
    padding: 0 10px;
    outline: none;
    height: 30px;
    border-radius: 2000px;
    border: none;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>