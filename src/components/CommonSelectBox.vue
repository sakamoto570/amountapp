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
export default {
  name: "TextBox",
  props: {
    title: {
      type: String,
    },
    options: {
      type: Array,
    },
  },
  methods: {
    handleChange(event: any) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
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
