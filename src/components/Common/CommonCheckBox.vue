<template>
  <div class="common-check-box-container">
    <input type="checkbox" @change="handleChange" />
    <label class="ml-8">{{ title }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextBox",
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    modelValue: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const handleChange = (event: any) => {
      emit("update:modelValue", event.target.checked);
    };

    return {
      handleChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.common-check-box-container {
  margin-top: 10px;
  display: flex;
}
label {
  font-weight: bold;
  text-align: left;
}

input {
  padding: 8px;
  box-sizing: border-box;
}
</style>
