<template>
  <div>
    <label>{{ title }}</label>
    <textarea :rows="row" />
  </div>
</template>

<script lang="ts">
export default {
  name: "TextBox",
  props: {
    title: {
      type: String,
    },
    row: {
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

textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
</style>
