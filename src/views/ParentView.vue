<template>
  <div class="add-teacher">
    <SideMenuBar />
    <ParentLists />
  </div>
</template>

<script>
// @ is an alias to /src
import ParentLists from "@/components/ParentLists.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "ateachers",
  components: {
    ParentLists,
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
