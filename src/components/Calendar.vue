<template>
  <div id="calendar">
    <v-date-picker mode="single" :attributes="attributes" is-inline></v-date-picker>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      attributes: [
        {
          key: "today",
          highlight: true,
          dates: new Date() // highlights todays date
        }
      ]
    };
  }
};
</script>
