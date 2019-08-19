<template>
  <div class="add-teacher">
    <SideMenuBar />
    <AddExpense />
  </div>
</template>

<script>
// @ is an alias to /src
import AddExpense from "@/components/AddExpense.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "account",
  components: {
    AddExpense,
    SideMenuBar
  }
};
</script>

<style scoped>
.add-teacher {
  background: #e8e9ec;
  height: 635px;
  display: grid;
  grid-template-columns: 250px 1fr;
}
</style>
