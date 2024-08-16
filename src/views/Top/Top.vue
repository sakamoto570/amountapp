<template>
  <div class="container">
    <!-- <app-header /> -->
    <month-amount-section class="mt-20" />
    <total-amount-section class="mt-20" />
    <amount-detail-section class="mt-20 max" :details="testDetail" />
  </div>
</template>

<script lang="ts">
import AppHeader from "@/components/Header.vue";
import MonthAmountSection from "@/views/Top/section/MonthAmountSection.vue";
import TotalAmountSection from "@/views/Top/section/TotalAmountSection.vue";
import AmountDetailSection from "@/views/Top/section/AmountDetailSection.vue";

export default {
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
        date: "2020/1/1",
        item: "食品",
        itemName: "CoCo壱",
        amount: "800",
        account: "現金",
        memo: "",
      },
      {
        date: "2020/1/1",
        item: "食品",
        itemName: "吉野家",
        amount: "600",
        account: "PayPay",
        memo: "",
      },
    ];

    return { testDetail };
  },
};
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