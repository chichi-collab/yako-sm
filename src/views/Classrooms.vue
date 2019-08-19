<template>
  <div class="add-teacher">
    <SideMenuBar />
    <AllClassrooms />
  </div>
</template>

<script>
// @ is an alias to /src
import AllClassrooms from "@/components/AllClassrooms.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "classrooms",
  components: {
    AllClassrooms,
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
