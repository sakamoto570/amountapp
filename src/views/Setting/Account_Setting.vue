<template>
  <div class="container">
    <!-- <app-header /> -->
    <total-amount-section class="mt-20" />
    <month-amount-section class="mt-20" />
    <amount-detail-section class="mt-20 max" :details="testDetail" />
  </div>
</template>

<script lang="ts">
import AppHeader from "@/components/Header/Header.vue";
import MonthAmountSection from "@/views/Top/section/MonthAmountSection.vue";
import TotalAmountSection from "@/views/Top/section/TotalAmountSection.vue";
import AmountDetailSection from "@/views/Top/section/AmountDetailSection.vue";
import { conversionDate } from "@/util/commonUtil";
import { defineComponent } from 'vue';

export default defineComponent({
  name: "AmountTop",
  components: {
    // AppHeader,
    MonthAmountSection,
    TotalAmountSection,
    AmountDetailSection,
  },
  setup() {
    const testDetail = [
      {
        date: "1/1",
        item: "食品",
        itemName: "CoCo壱",
        amount: "80000",
        account: "現金",
        memo: "〇月分引き落とし",
      },
      {
        date: "1/1",
        item: "食品",
        itemName: "吉野家",
        amount: "60000",
        account: "PayPay",
        memo: "アタマ大盛",
      },
    ];

    const test = conversionDate("2024年8月13日 21時03分");
    console.log(test);

    return { testDetail, test };
  },
});
</script>

<style lang="scss" scoped>
.max {
  width: 100%;
}
.container {
  max-width: 90%;
  margin: 0 auto;
}
</style>