<template>
  <div  class="modal-overlay" @click="close">
    <div class="modal-content">
      <!-- <h2>口座登録</h2>
      <common-input title="口座名" type="text" v-model="accountName" />
      <common-input title="初期金額" type="number" v-model="accountAsset" />
      <common-button class="w-max mb-20 mt-20">保存する</common-button> -->
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import CommonInput from "../Common/CommonInput.vue";
import CommonButton from "@/components/Common/CommonButton.vue";
import { ref } from "vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: "AccountSetteingModal",
  components: {
    // CommonInput,
    // CommonButton,
  },
  props: {

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
