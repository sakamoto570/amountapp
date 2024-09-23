<template>
  <div class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <h2>口座登録</h2>
      <common-input title="口座名" type="text" v-model="accountName" />
      <common-input title="初期金額" type="number" v-model="accountAsset" />
      <common-button class="w-max mb-20 mt-20" @click="submitForm"
        >保存する</common-button
      >
    </div>
    <div v-if="message">{{ message }}</div>
    <common-loading v-show="isLoading" />
  </div>
</template>

<script lang="ts">
import CommonInput from "../Common/CommonInput.vue";
import CommonButton from "@/components/Common/CommonButton.vue";
import CommonLoading from "@/components/Common/CommonLoading.vue";
import { ref } from "vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "AccountSetteingModal",
  components: {
    CommonInput,
    CommonButton,
    CommonLoading,
  },
  props: {
    // isVisible: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  setup(props, { emit }) {
    const accountName = ref<string>("");
    const accountAsset = ref<string>("");
    const message = ref<string | null>(null);
    const isLoading = ref<boolean>(false);

    const close = () => {
      emit("close");
    };

    const submitForm = async () => {
      isLoading.value = true;
      // TBLへの登録処理
      await axios
        .post("https://amountapp.netlify.app/.netlify/functions/insertBank", {
          last_insert_date: new Date().toLocaleDateString('ja-JP'),
          bank_name: accountName.value,
          amount: accountAsset.value,
        })
        .then((response: any) => {
          // console.log(response.data);
          isLoading.value = false;
          message.value =
            "ユーザーが正常に登録されました。確認メールをチェックしてください。";
        })
        .catch((error: any) => {
          // console.error(error);
          isLoading.value = false;
          error.value =
            "ユーザーの登録に失敗しました。時間をおいて再度お試しください。";
        });

      close();
      emit("submit");
    };

    return { accountName, accountAsset, isLoading, message, submitForm, close };
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
  z-index: 1000;
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
