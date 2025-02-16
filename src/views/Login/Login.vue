<template>
  <div class="input-container w-max">
    <div class="input-items">
      <!-- <h2>ログイン</h2> -->
      <div class="text-left">
        <div>本サイトではデータベースにsupabaseを使用しています。</div>
        <div>
          利用するためには会員登録が必要なため、「登録する」のチェックボックスにチェックを入れ、メールアドレスとパスワードを登録してください。
        </div>
      </div>
      <common-check-box title="登録する" type="checkbox" v-model="isSignUp" />
      <common-input title="メールアドレス" type="text" v-model="accountName" />
      <common-input title="パスワード" type="password" v-model="accountAsset" />
      <common-button
        class="w-max mb-20 mt-20"
        @click="loginAccount"
        v-show="!isSignUp"
        >ログイン
      </common-button>
      <common-button
        class="w-max mb-20 mt-20"
        @click="submitAccount"
        v-show="isSignUp"
        >登録</common-button
      >
    </div>
  </div>
  <div>{{ error }}</div>
  <div v-if="message">{{ message }}</div>
  <common-loading v-show="isLoading" />
</template>

<script lang="ts">
import CommonInput from "@/components/Common/CommonInput.vue";
import CommonButton from "@/components/Common/CommonButton.vue";
import CommonCheckBox from "@/components/Common/CommonCheckBox.vue";
import CommonLoading from "@/components/Common/CommonLoading.vue";
import { ref } from "vue";
// import { supabase } from "@/services/supabase";
import { defineComponent } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { token_update } from "@/util/test";

export default defineComponent({
  name: "LoginPage",
  components: {
    CommonInput,
    CommonButton,
    CommonCheckBox,
    CommonLoading,
  },
  setup(props, { emit }) {
    const router = useRouter();
    const accountName = ref<string>("");
    const accountAsset = ref<string>("");
    const error = ref<string | null>(null);
    const message = ref<string | null>(null);
    const isSignUp = ref<boolean>(false);
    const isLoading = ref<boolean>(false);

    const close = () => {
      emit("close");
    };

    const submitAccount = async () => {
      error.value = null;
      message.value = null;
      isLoading.value = true;

      // TBLへの登録処理
      // const { error: signUpError } = await supabase.auth.signUp({
      //   email: accountName.value,
      //   password: accountAsset.value,
      // });
      console.log(accountName.value);
      console.log(accountAsset.value);
      await axios
        .post("https://amountapp.netlify.app/.netlify/functions/signup", {
          email: accountName.value,
          password: accountAsset.value,
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

      // if (signUpError) {
      //   // error.value = signUpError.message;
      //   error.value =
      //     "ユーザーの登録に失敗しました。時間をおいて再度お試しください。";
      // } else {
      //   message.value =
      //     "ユーザーが正常に登録されました。確認メールをチェックしてください。";
      // }
    };

    const loginAccount = async () => {
      error.value = null;
      message.value = null;
      isLoading.value = true;

      // const { data, error: signInError } =
      //   await supabase.auth.signInWithPassword({
      //     email: accountName.value,
      //     password: accountAsset.value,
      //   });

      await axios
        .post("https://amountapp.netlify.app/.netlify/functions/login", {
          email: accountName.value,
          password: accountAsset.value,
        })
        .then((response: any) => {
          // console.log(response.data);
          message.value = "サインイン成功!";
          console.log(response);
          token_update(response.data.session.access_token);
          router.push("/home");
          isLoading.value = false;
        })
        .catch((error: any) => {
          isLoading.value = false;
          if (error.message.includes("confirmation")) {
            error.value =
              "アカウントの確認が必要です。確認メールをチェックしてください。";
          } else {
            error.value = "ログイン失敗。アカウント情報を確認してください";
          }
          error.value =
            "ユーザーの登録に失敗しました。時間をおいて再度お試しください。";
        });

      // if (signInError) {
      //   if (signInError.message.includes("confirmation")) {
      //     error.value =
      //       "アカウントの確認が必要です。確認メールをチェックしてください。";
      //   } else {
      //     //   error.value = signInError.message;
      //     error.value = "ログイン失敗。アカウント情報を確認してください";
      //   }
      // } else {
      //   console.log("suucess");
      //   message.value = "サインイン成功!";
      //   // サインイン成功後の処理をここに追加
      // }
    };

    return {
      accountName,
      accountAsset,
      isSignUp,
      error,
      message,
      submitAccount,
      close,
      loginAccount,
      isLoading,
    };
  },
});
</script>

<style scoped>
.input-container {
  max-width: 70%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
