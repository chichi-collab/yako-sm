<template>
  <div class="add-teacher">
    <AddMarks />
  </div>
</template>

<script>
// @ is an alias to /src
import AddMarks from "@/components/AddMarks.vue";

export default {
  name: "examreport",
  components: {
    AddMarks
  }
};
</script>

<style scoped></style>
