<template>
  <div class="container">
    <!-- <app-header /> -->
    <month-amount-section class="test" />
    <total-amount-section class="test" />
    <amount-detail-section class="test max" :details="testDetail" />
  </div>
</template>

<script lang="ts">
import AppHeader from "@/components/Header.vue";
import MonthAmountSection from "@/views/Top/MonthAmountSection.vue";
import TotalAmountSection from "@/views/Top/TotalAmountSection.vue";
import AmountDetailSection from "@/views/Top/AmountDetailSection.vue";

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

<style la
    TotalAmountSectionng="scss" scoped>
.test {
  margin-top: 20px;
}
.max {
  width: 100%;
}
.container {
  max-width: 95%;
  margin: 0 auto;
}
</style>