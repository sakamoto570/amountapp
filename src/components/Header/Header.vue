<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header-container">
    <div class="header-item">
      <!-- <div class="logo">家計簿アプリ</div> -->
      <img src="@/assets/logo.png" class="logo ml-8"/>
      <nav v-show="!isShownNav">
        <a href="/home">ホーム</a>
        <a href="/input">家計簿入力</a>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
  setup() {
    const isShownNav = location.pathname === "/login";

    return { isShownNav };
  },
};
</script>

<style lang="scss" scoped >
@import "@/assets/css/mq.scss";
.logo{
  // width: 200px;
  height: 50px;
}
.header-container {
  margin: 0;
  font-family: Arial, sans-serif;
}
.header-item {
  background-color: #162f66;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 18px;
  padding: 12px;
  // margin-left: 20px;
  @include mq(sp) {
    font-size: 24px;
  }
}
nav {
  padding: 15px;
  @include mq(sp) {
    margin-right: 20px;
  }
}
nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 4px;
  font-size: 14px;
  @include mq(sp) {
    font-size: 18px;
    margin: 0 15px;
  }
}
nav a:hover {
  text-decoration: underline;
}
</style>