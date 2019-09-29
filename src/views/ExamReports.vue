<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="add-teacher">
        <AddMarks />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddMarks from "@/components/AddMarks.vue";
import InfoBar from "@/components/InfoBar.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "examreport",
  components: {
    AddMarks,
    InfoBar,
    SideMenuBar
  }
};
</script>

<style scoped></style>
