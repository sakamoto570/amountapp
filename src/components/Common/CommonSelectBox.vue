<template>
  <div>
    <label>{{ title }}</label>
    <select :value="modelValue" @change="handleChange">
      <option
        v-for="option in options"
        :key="option[this.valueKey]"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
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
    options: {
      type: Array,
    },
    modelValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const handleChange = (event: any) => {
      // eslint-disable-next-line no-undef
      emit("update:modelValue", event.target.value);
    };

    return { handleChange };
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

select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
</style>
