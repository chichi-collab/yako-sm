<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="notice-board">noticeBoard</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InfoBar from "@/components/InfoBar.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "noticeBoard",
  components: {
    InfoBar,
    SideMenuBar
  }
};
</script>

<style scoped></style>
