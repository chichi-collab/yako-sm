<template>
  <div class="all-teachers">
    <SideMenuBar />
    <AllTeachers />
  </div>
</template>

<script>
// @ is an alias to /src
import AllTeachers from "@/components/AllTeachers.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "ateachers",
  components: {
    AllTeachers,
    SideMenuBar
  }
};
</script>

<style scoped>
.all-teachers {
  background:#e8e9ec;
  height: 635px;
  display: grid;
  grid-template-columns: 250px 1fr;
}
</style>
