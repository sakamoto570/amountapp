<template>
  <div class="amount-detail-wrapper">
    <div>
      <div class="category">食費</div>
      <div class="date-item">
        <div class="date">2024/1/1</div>
        <div>食品</div>
      </div>
      <br class="sp-down" />
      <div class="bank-amount">
        <!-- 出金なら金額を赤に 入金なら青へ -->
        <div>〇〇銀行</div>
        <div>￥XXX,XXX円</div>
      </div>
    </div>
    <div class="arrow-right"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mq.scss";
.amount-detail-wrapper {
  border-bottom: solid 1px #a1a1a1;
  text-align: left;
  padding: 8px 24px;
  position: relative;
  //   gap: 30px;
  //   @include mq(sp) {
  //     font-size: 14px;
  //   }
}
.category {
  font-weight: bold;
  font-size: 14px;
}
.date-item,
.bank-amount {
  margin-left: 8px;
  display: inline-flex;
  gap: 60px;
  flex-wrap: wrap;
  font-size: 12px;
  @include mq(tab) {
    gap: 120px;
  }
}
.bank-amount {
  @include mq(tab) {
    margin-left: 120px;
  }
}
.sp-down {
  @include mq(tab) {
    display: none;
  }
}
.date {
  line-height: 25px;
}
.arrow-right {
  position: absolute;
  width: 10px;
  height: 10px;
  margin: 0 10px;
  border-top: 2px solid #6b6b6b;
  border-right: 2px solid #6b6b6b;
  transform: rotate(45deg);
  right: 10px;
  top: 43%;
}
</style>