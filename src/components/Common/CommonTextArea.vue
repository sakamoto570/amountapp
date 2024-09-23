<template>
  <div>
    <label>{{ title }}</label>
    <textarea :rows="row" @input="inputText" :value="modelValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent( {
  name: "TextBox",
  props: {
    title: {
      type: String,
    },
    row: {
      type: String,
    },
    modelValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const inputText = (event: any) => {
      emit("update:modelValue", event.target.value);
    };

    return {
      inputText,
    };
  },
});
</script>

<style lang="scss" scoped>
label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  text-align: left;
}

textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
</style>
