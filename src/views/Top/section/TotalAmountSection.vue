<template>
  <div class="month-amount-section-container">
    <div class="month-amount-section-item">
      <div class="amount-area">
        <div class="amount">残高計：XXX,XXXX円</div>
      </div>
      <div class="compare-area">
        <div class="compare">現金：YYY,YYY円</div>
        <div class="compare">〇〇銀行：YYY,YYY円</div>
      </div>
      <div class="other-month">
        <a @click="isShowSettimgModal = !isShowSettimgModal" href="#"
          >＞ 口座の設定をする</a
        >
      </div>
    </div>
    <!-- submit処理ではテーブルからの口座情報再取得をする -->
    <account-setteing-modal
      v-show="isShowSettimgModal"
      @close="isShowSettimgModal = !isShowSettimgModal"
      @submit="test"
      v-if="isShowSettimgModal"
    />
  </div>
</template>

<script lang="ts">
import AccountSetteingModal from "@/components/Modal/AccountSetteingModal.vue";
import { ref } from "vue";

export default {
  name: "TotalAmountSection",
  components: {
    AccountSetteingModal,
  },
  setup() {
    const isShowSettimgModal = ref<boolean>(false);

    return { isShowSettimgModal };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mq.scss";
.month-amount-section-container {
  border: 1px solid;
}
.month-amount-section-item {
  padding: 10px 12px;
  @include mq(sp) {
    padding: 10px 50px;
  }
}
.amount-area {
  display: flex;
  gap: 120px;
}
.amount {
  font-size: 20px;
  font-weight: bold;
  @include mq(sp) {
    font-size: 30px;
  }
}
.compare-area {
  margin-top: 20px;
  font-size: 14px;
  text-align: left;
  @include mq(sp) {
    font-size: 20px;
  }
}
.compare {
  margin-right: 50px;
}
.other-month {
  text-align: right;
  @include mq(sp) {
    font-size: 20px;
  }
}
</style>