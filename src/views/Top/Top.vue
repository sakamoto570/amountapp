<template>
  <div class="container">
    <!-- <app-header /> -->
    <total-amount-section class="mt-32" />
    <month-amount-section class="mt-32" />
    <!-- <amount-detail-section class="mt-20 max" :details="testDetail" /> -->
    <button @click="isTest = !isTest">test</button>
    <amount-submit v-if="isTest" @close="isTest = !isTest" />
  </div>
</template>

<script lang="ts">
import MonthAmountSection from "@/views/Top/section/MonthAmountSection.vue";
import TotalAmountSection from "@/views/Top/section/TotalAmountSection.vue";
import AmountDetailSection from "@/views/Top/section/AmountDetailSection.vue";
// import { conversionDate } from "@/util/commonUtil";
// import { supabase } from "@/services/supabase";
import { ref } from "vue";
import axios from "axios";
import AmountSubmit from "@/components/Modal/AmountSubmit.vue";

export default {
  name: "AmountTop",
  components: {
    // AppHeader,
    MonthAmountSection,
    TotalAmountSection,
    // AmountDetailSection,
    AmountSubmit,
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
    const isTest = ref<boolean>(false);

    // const data = ref(null)

    // const fetchData = async () => {
    //   axios.get("https://amountapp.netlify.app/.netlify/functions/get-data")
    //     .then((response:any) => {
    //       console.log(response.data);
    //     })
    //     .catch((error:any) => {
    //       console.error(error);
    //     });

    //     // console.log(data);
    // };

    // fetchData();

    return { testDetail, isTest };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mq.scss";
.max {
  width: 100%;
}
.container {
  max-width: 90%;
  margin: 0 auto;
  @include mq(sp) {
    max-width: 70%;
  }
}
</style>