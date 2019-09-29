<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <div>
        <SideMenuBar />
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";
import InfoBar from "@/components/InfoBar.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "home",
  components: {
    Dashboard,
    InfoBar,
    SideMenuBar
  }
};
</script>

<style scoped></style>
