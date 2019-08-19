<template>
  <div class="add-teacher">
    <SideMenuBar />
    <EditTeacherDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import EditTeacherDetails from "@/components/EditTeacherDetails.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "ateachers",
  components: {
    EditTeacherDetails,
    SideMenuBar
  }
};
</script>

<style scoped>
.add-teacher {
  background:#e8e9ec;
  height: 635px;
  display: grid;
  grid-template-columns: 250px 1fr;
}
</style>
