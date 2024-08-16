<template>
  <div class="month-amount-section-container">
    <div class="month-amount-section-item">
      <div class="amount-area">
        <div class="amount">総資産残高：XXX,XXXX円</div>
      </div>
      <div class="compare-area">
        <div class="compare">現金：YYY,YYY円</div>
        <div class="compare">〇〇銀行：YYY,YYY円</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TotalAmountSection",
};
</script>

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
  margin-top: 20px;
  font-size: 20px;
  text-align: left;
}
.compare {
  margin-right: 50px;
}
</style>