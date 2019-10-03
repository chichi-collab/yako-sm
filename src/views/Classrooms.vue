<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="add-teacher">
        <AllClassrooms />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AllClassrooms from "@/components/AllClassrooms.vue";
import InfoBar from "@/components/InfoBar.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "classrooms",
  components: {
    AllClassrooms,
    InfoBar,
    SideMenuBar
  }
};
</script>

<style scoped></style>
