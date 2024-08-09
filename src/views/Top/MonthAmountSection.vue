<template>
  <div class="month-amount-section-container">
    <div class="month-amount-section-item">
      <div class="amount-area">
        <div class="amount">X月の使用金額：XXX,XXXX円</div>
      </div>
      <div class="compare-area">
        <div class="compare">先月よりYYY,YYY円節約できました</div>
        <a href="" class="other-month"> ＞他の月の使用金額を確認する</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.month-amount-section-container {
  border: 1px solid;
}
.month-amount-section-item {
  padding: 10px 50px;
}
.amount-area {
  display: flex;
  //   justify-content: space-between;
  gap: 120px;
}
.amount {
  font-size: 30px;
  font-weight: bold;
}
.compare-area {
  display: flex;
  justify-content: space-between;
  gap: 120px;
  margin-top: 20px;
  font-size: 20px;
}
.compare {
  margin-right: 50px;
}
</style>