<template>
  <div class="add-teacher">
    <AddExpense />
  </div>
</template>

<script>
// @ is an alias to /src
import AddExpense from "@/components/AddExpense.vue";

export default {
  name: "account",
  components: {
    AddExpense
  }
};
</script>

<style scoped></style>
