<template>
  <div class="add-teacher">
    <EditStudentDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import EditStudentDetails from "@/components/EditStudentDetails.vue";

export default {
  name: "ateachers",
  components: {
    EditStudentDetails
  }
};
</script>

<style scoped></style>