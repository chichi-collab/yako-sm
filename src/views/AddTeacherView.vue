<template>
  <div class="add-teacher">
    <AddTeacher />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTeacher from "@/components/AddTeacher.vue";

export default {
  name: "ateachers",
  components: {
    AddTeacher
  }
};
</script>

<style scoped></style>
