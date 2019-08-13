<template>
  <div class="home">
    <SideMenuBar />
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "home",
  components: {
    Dashboard,
    SideMenuBar
  }
};
</script>

<style scoped>
.home {
  background:#e8e9ec;
  height: 635px;
  display: grid;
  grid-template-columns: 250px 1fr;
}
</style>
