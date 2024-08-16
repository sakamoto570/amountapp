<template>
  <div>
    <label>{{ title }}</label>
    <input :type="type" />
  </div>
</template>

<script lang="ts">
export default {
  name: "TextBox",
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
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

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
</style>
