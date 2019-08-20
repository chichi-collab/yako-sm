<template>
  <div class="add-teacher">
    <ParentLists />
  </div>
</template>

<script>
// @ is an alias to /src
import ParentLists from "@/components/ParentLists.vue";

export default {
  name: "about",
  components: {
    ParentLists
  }
};
</script>

<style scoped></style>
