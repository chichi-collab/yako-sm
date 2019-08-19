<template>
  <div class="add-teacher">
    <SideMenuBar />
    <AddMarks />
  </div>
</template>

<script>
// @ is an alias to /src
import AddMarks from "@/components/AddMarks.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "examreport",
  components: {
    AddMarks,
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
