<template>
  <button><slot /></button>
</template>

<script lang="ts">
export default {
  name: "CommonButton",
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  padding: 10px;
  background-color: #192663;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #0e1849;
}
</style>