<template>
  <div class="modal-overlay" @click="close">
    <div class="modal-content">
      <h2>家計簿修正</h2>
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
import CommonInput from "../Common/CommonInput.vue";
import CommonButton from "@/components/Common/CommonButton.vue";
import { ref } from "vue";
import { defineComponent } from "vue";
import CommonSelectBox from "../Common/CommonSelectBox.vue";

export default defineComponent({
  name: "AccountSetteingModal",
  components: {
    CommonInput,
    CommonButton,
    CommonSelectBox,
  },
  props: {
    //TODO もともと入力されていいた家計簿情報をデフォで渡す
  },
  setup(props, { emit }) {
    const accountName = ref<string>("");
    const accountAsset = ref<string>("");

    const close = () => {
      emit("close");
    };

    const submitForm = () => {
      // TBLへの登録処理
      close();
      emit("submit");
    };

    return { accountName, accountAsset, submitForm, close };
  },
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  width: 300px;
}

.modal-close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}
</style>
