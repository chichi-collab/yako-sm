<template>
  <div class="all-teachers">
    <AllTeachers />
  </div>
</template>

<script>
// @ is an alias to /src
import AllTeachers from "@/components/AllTeachers.vue";

export default {
  name: "teachers",
  components: {
    AllTeachers
  }
};
</script>

<style scoped></style>
