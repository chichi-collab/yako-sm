<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="add-teacher">
        <ParentLists />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ParentLists from "@/components/ParentLists.vue";
import InfoBar from "@/components/InfoBar.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "parents",
  components: {
    ParentLists,
    InfoBar,
    SideMenuBar
  }
};
</script>

<style scoped></style>
