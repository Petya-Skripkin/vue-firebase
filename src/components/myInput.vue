<template>
  <div class="input">
    <label>
      <slot></slot>
      <input
        :type="type"
        :value="modelValue"
        @input="updateValue"
        :class="{ 'input__error': wrongTitle }"
        required
      />
    </label>
    <div class="error" v-if="wrongTitle">
      Поле должно быть заполненно
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
    wrongTitle: Boolean,
    type: {
      default: "text"
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  margin: 10px 20px;
}

label {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 15px;
}

input {
  width: 300px;
  font-size: 22px;
  padding: 2px 5px;
  border: 1px solid green;
  border-radius: 5px;
  outline: none;
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

.input__error {
  border: 1px solid red;
}

.error {
  flex: 1;
  color: red;
  text-align: center;
}
</style>