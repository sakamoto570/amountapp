<template>
  <div class="input-container w-max">
    <div class="input-items mt-32">
      <common-text-box class="date-box" title="日付" type="date" />
      <common-select-box
        title="入出金"
        :options="depositOptions"
        v-model="selectedDepositValue"
      />
      <common-text-box class="item-box" title="品目" type="text" />
      <common-text-box title="品名" type="text" />
      <common-text-box title="金額" type="text" />
      <common-select-box
        title="支払い元"
        :options="assetsOptions"
        v-model="selectedAssetsValue"
      />
      <common-text-area title="メモ" row="4" />
      <common-button class="w-max" />
    </div>
  </div>
</template>

<script lang="ts">
import CommonTextBox from "@/components/CommonTextBox.vue";
import CommonTextArea from "@/components/CommonTextArea.vue";
import CommonSelectBox from "@/components/CommonSelectBox.vue";
import CommonButton from "@/components/CommonButton.vue";
import { ref } from "vue";

export default {
  name: "InputPage",
  components: {
    CommonTextBox,
    CommonTextArea,
    CommonSelectBox,
    CommonButton,
  },
  setup() {
    const depositOptions = [
      {
        value: "1",
        label: "出金",
      },
      {
        value: "2",
        label: "入金",
      },
    ];
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

    return {
      depositOptions,
      assetsOptions,
      selectedDepositValue,
      selectedAssetsValue,
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