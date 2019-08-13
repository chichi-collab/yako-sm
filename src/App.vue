<template>
  <div id="app">
    <InfoBar />
    <!-- <div id="nav">
      <router-link to="/"><i class="fa fa-home"></i></router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <Home />
  </div>
</template>

<script>
import InfoBar from "@/components/InfoBar";
import Home from "@/views/Home";

export default {
  name: "about",
  components: {
    InfoBar,
    Home
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

body * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}

</style>
