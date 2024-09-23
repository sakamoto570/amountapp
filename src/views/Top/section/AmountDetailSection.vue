<template>
  <table>
    <thead>
      <tr>
        <th>使用日</th>
        <th>品目</th>
        <th>品名</th>
        <th>金額</th>
        <th>口座</th>
        <th>メモ</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="detail in details" :key="detail">
        <td>{{ detail.date }}</td>
        <td>{{ detail.item }}</td>
        <td>{{ detail.itemName }}</td>
        <td>{{ detail.amount }}</td>
        <td>{{ detail.account }}</td>
        <td>{{ detail.memo }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
type DetailType = {
  date: string;
  item: string;
  itemName: string;
  amount: string;
  account: string;
  memo: string;
};

export default {
  name: "AmountDetailSection",
  props: {
    details: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mq.scss";
table {
  border-collapse: collapse;
  border: 2px solid #cfcfcf;
  font-family: sans-serif;
  font-size: 0.5rem;
  letter-spacing: 1px;
  @include mq(sp) {
    font-size: 14px;
  }
}
th,
td {
  border: 1px solid #cfcfcf;
  padding: 8px 10px;
}
</style>