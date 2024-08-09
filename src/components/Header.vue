<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header-container">
    <div class="header-item">
      <div class="logo">家計簿アプリ</div>
      <nav>
        <a href="/">ホーム</a>
        <a href="/input">家計簿入力</a>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
};
</script>

<style scoped lang=scss>
.header-container {
  margin: 0;
  font-family: Arial, sans-serif;
}
.header-item {
  background-color: #192663;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 24px;
  margin-left: 20px;
}
nav {
  margin-right: 20px;
  padding: 15px;
}
nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
}
nav a:hover {
  text-decoration: underline;
}
</style>