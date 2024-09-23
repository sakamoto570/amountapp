<template>
  <div class="input-container w-max">
    <div class="input-items mt-32">
      <common-check-box
        class=""
        title="繰り返し入力"
        type="checkbox"
        v-model="isReception"
      />
      <common-select-box
        title="支払い日"
        :options="receptionDate"
        v-model="selectReceptionDate"
        v-show="isReception"
      />
      <common-input
        class="date-box"
        title="日付"
        type="date"
        v-model="inputedDate"
      />
      <common-select-box
        title="入出金"
        :options="depositOptions"
        v-model="selectedDepositValue"
      />
      <common-input
        class="item-box"
        title="品目"
        type="text"
        v-model="inputedItem"
      />
      <common-input title="品名" type="text" v-model="inputedItemName" />
      <common-input title="金額" type="number" v-model="inputedAmount" />
      <common-select-box
        title="支払い元"
        :options="assetsOptions"
        v-model="selectedAssetsValue"
      />
      <common-text-area title="メモ" row="4" v-model="inputedMemo" />
      <common-button class="w-max mb-20 mt-20">保存する</common-button>
    </div>
  </div>
</template>

<script lang="ts">
import CommonInput from "@/components/Common/CommonInput.vue";
import CommonTextArea from "@/components/Common/CommonTextArea.vue";
import CommonSelectBox from "@/components/Common/CommonSelectBox.vue";
import CommonButton from "@/components/Common/CommonButton.vue";
import CommonCheckBox from "@/components/Common/CommonCheckBox.vue";
import { depositOptions } from "@/util/dataUtil";
import { receptionDate } from "@/util/dataUtil";
import { ref } from "vue";

export default {
  name: "InputPage",
  components: {
    CommonInput,
    CommonTextArea,
    CommonSelectBox,
    CommonButton,
    CommonCheckBox,
  },
  setup() {
    const assetsOptions = [
      {
        value: "1",
        label: "現金",
      },
      {
        value: "2",
        label: "〇〇銀行",
      },
    ];

    const selectedDepositValue = ref<string>("");
    const selectedAssetsValue = ref<string>("");
    const inputedDate = ref<Date>();
    const inputedItem = ref<string>("");
    const inputedItemName = ref<string>("");
    const inputedAmount = ref<string>("");
    const inputedMemo = ref<string>("");
    const isReception = ref<boolean>(false);
    const selectReceptionDate = ref<string>("");

    return {
      depositOptions,
      assetsOptions,
      selectedDepositValue,
      selectedAssetsValue,
      inputedDate,
      inputedItem,
      inputedItemName,
      inputedAmount,
      inputedMemo,
      isReception,
      selectReceptionDate,
      receptionDate,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  max-width: 70%;
  margin: 0 auto;
}
</style>