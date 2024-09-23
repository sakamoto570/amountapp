<template>
  <div class="month-amount-section-container mt-32">
    <div class="month-amount-section-item">
      <div class="month-select-area mb-12">
        <div class="arrow-left"></div>
        <div class="month-text">2024年9月</div>
        <div class="arrow-right"></div>
      </div>
      <div class="amount-area mt-16">
        <div class="amount"><span class="red">支出</span>：XXX,XXX円</div>
        <div class="amount"><span class="blue">収入</span>：XXX,XXX円</div>
      </div>
      <div class="compare-area">
        <!-- <div class="compare">先月よりYYY,YYY円節約できました</div> -->
        <!-- <a href="" class="other-month"> ＞他の月の使用金額を確認する</a> -->
      </div>
    </div>
  </div>
  <amount-detail class="mt-12" />
  <amount-detail class="mt-8" />
  <amount-detail class="mt-8" />
  <amount-detail class="mt-8" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AmountDetail from "@/components/Common/AmountDetail.vue";
export default defineComponent({
  components: {
    AmountDetail,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/mq.scss";
.month-select-area {
  display: flex;
  justify-content: space-around;
}
.arrow-left {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 10px;
  border-left: 4px solid #000;
  border-bottom: 4px solid #000;
  transform: rotate(45deg);
}
.month-text {
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
}
.arrow-right {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 10px;
  border-top: 4px solid #000;
  border-right: 4px solid #000;
  transform: rotate(45deg);
}
.amount-area {
  display: flex;
  justify-content: center;
  gap: 20px;
  @include mq(sp) {
    gap: 100px;
  }
}
.amount {
  font-size: 15px;
  font-weight: bold;
  @include mq(sp) {
    font-size: 20px;
  }
}
.red {
  color: red;
}
.blue {
  color: rgb(0, 153, 255);
}
// .compare-area {
//   display: flex;
//   margin-top: 20px;
//   font-size: 14px;
//   flex-direction: column;
//   @include mq(sp) {
//     justify-content: space-between;
//     flex-direction: row;
//     gap: 120px;
//     font-size: 20px;
//   }
// }
.other-month {
  text-align: right;
}
.compare {
  margin-top: 20px;
  text-align: right;
  font-size: 14px;
  @include mq(sp) {
    font-size: 20px;
  }
}
</style>